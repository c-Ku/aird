import React from 'react'
import PropTypes from 'prop-types'
import Codemirror from 'react-codemirror'
import './codemirror.css'
import './syntax.css'
require('codemirror/mode/jsx/jsx')

class Editor extends React.Component {
  static propTypes = {
    theme: PropTypes.string,
    code: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    className: PropTypes.string
  }

  render () {
    const {
      className,
      style,
      code,
      theme
    } = this.props

    const options = {
      mode: 'jsx',
      lineNumbers: false,
      lineWrapping: true,
      smartIndent: false,
      matchBrackets: true,
      theme
    }

    return (
      <Codemirror
        className={className}
        options={options}
        style={style}
        value={code}
        onChange={this.props.onChange}
      />
    )
  }
}

export default Editor
