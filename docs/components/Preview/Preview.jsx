import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import ReactDOMServer from 'react-dom/server'
import { transform } from 'babel-standalone'
import './Preview.less'

class Preview extends React.Component {
  static defaultProps = {
    component: 'div',
    className: ''
  }

  static propTypes = {
    code: PropTypes.string.isRequired,
    scope: PropTypes.object.isRequired,
    component: PropTypes.node,
    noRender: PropTypes.bool,
    context: PropTypes.object,
    className: PropTypes.string
  }

  constructor (props) {
    super(props)
    this.state = {
      error: null
    }
    this.compileCode = this.compileCode.bind(this)
    this.setTimeout = this.setTimeout.bind(this)
  }

  componentDidMount () {
    this.executeCode()
  }

  componentDidUpdate (prevProps) {
    clearTimeout(this.timeoutID)
    if (this.props.code !== prevProps.code) {
      this.executeCode()
    }
  }

  setTimeout (...args) {
    clearTimeout(this.timeoutID)
    this.timeoutID = setTimeout.apply(null, args)
  }

  compileCode () {
    const { code, noRender, scope, context } = this.props
    const presets = ['es2015', 'react', 'stage-2']
    const generateContextTypes = (context) => {
      return `{ ${Object.keys(context).map(val => `${val}: React.PropTypes.any.isRequired`).join(',')} }`
    }

    if (noRender) {
      return transform(`
        ((${Object.keys(scope).join(',')}, mountNode) => {
          class Component extends React.Component {

            getChildContext() {
              return ${JSON.stringify(context)}
            }

            render() {
              return (
                ${code}
              )
            }
          }

          Component.childContextTypes = ${generateContextTypes(context)}

          return Comp
        })
      `, { presets }).code
    } else {
      return transform(`
        ((${Object.keys(scope).join(',')}, mountNode) => {
          ${code}
        })
      `, { presets }).code
    }
  }

  executeCode = () => {
    const mountNode = this.refs.mount
    const { scope, noRender, component } = this.props
    const tempScope = []

    try {
      Object.keys(scope).forEach(s => tempScope.push(scope[s]))
      tempScope.push(mountNode)
      const compiledCode = this.compileCode()
      if (noRender) {
        const Component = React.createElement(eval(compiledCode).apply(null, tempScope))
        ReactDOMServer.renderToString(React.createElement(component, {}, Component))
        ReactDOM.render(React.createElement(component, {}, Component), mountNode)
      } else {
        eval(compiledCode).apply(null, tempScope)
      }
      this.setState({ error: null })
    } catch (err) {
      this.setTimeout(() => {
        this.setState({ error: err.toString() })
      }, 500)
    }
  }

  render () {
    const { className } = this.props
    const { error } = this.state
    return (
      <div className={className}>
        <div ref="mount" />
        {error !== null ? <div className="preview__error">{error}</div> : null}
      </div>
    )
  }
}

export default Preview
