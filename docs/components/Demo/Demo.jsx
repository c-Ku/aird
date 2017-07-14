import ReactDOM from 'react-dom'
import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'
import { Button } from 'antd'
import Editor from '../Editor'
import Preview from '../Preview'
import './Demo.less'

class Demo extends React.PureComponent {
  static defaultProps = {
    scope: {React, ReactDOM},
    theme: 'monokai',
    noRender: false,
    context: {},
    component: 'section'
  }

  static propTypes = {
    markdown: PropTypes.string.isRequired,
    scope: PropTypes.object,
    theme: PropTypes.string,
    noRender: PropTypes.bool,
    context: PropTypes.object,
    component: PropTypes.node
  };

  constructor (props) {
    super(props)
    const ast = marked.lexer(this.props.markdown)
    this.state = {
      visible: false,
      title: this.getTitle(ast).text || '暂无标题',
      code: this.getCode(ast).text,
      description: marked.parser(this.getDescription(ast))
    }
    this.showTemplate = this.showTemplate.bind(this)
    this.codeChange = this.codeChange.bind(this)
  }

  showTemplate () {
    this.setState(prevState => (
      { visible: !prevState.visible }
    ))
  }

  codeChange (code) {
    this.setState({ code })
  }

  getTitle (ast) {
    return ast.find(token => token.type === 'heading')
  }

  getDescription (ast) {
    const descriptionAst = ast.filter(token => (token.type !== 'heading' && token.lang !== 'jsx'))
    descriptionAst.links = ast.links
    return descriptionAst
  }

  getCode (ast) {
    return ast.find(token => token.lang === 'jsx')
  }

  render () {
    const { visible, code, title, description } = this.state
    const { scope, noRender, component, theme, context } = this.props
    return (
      <section className="demo">
        <Preview
          className="demo__preview"
          code={code}
          scope={{...scope, React, ReactDOM}}
          noRender={noRender}
          context={context}
          component={component}
        />
        <section className="demo__meta markdown">
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <div className="demo__title">
            {title}
          </div>
          <Button
            shape="circle"
            className="demo__toggle"
            icon="arrow-down"
            size="small"
            onClick={this.showTemplate}
          />
        </section>
        {
          visible && (
            <Editor
              className="demo__editor"
              code={code}
              onChange={this.codeChange}
              theme={theme}
            />
          )
        }
      </section>
    )
  }
}

export default Demo
