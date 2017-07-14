import React from 'react'
import marked from 'marked'
import PropTypes from 'prop-types'

class ComPage extends React.PureComponent {
  static defaultProps = {
    markdown: ''
  }

  static defaultProps = {
    markdown: PropTypes.string
  }

  handleAST (ast) {
    const index = ast.findIndex(token => (
      token.text === 'API' && token.type === 'heading'
    ))
    const explainAST = ast.slice(0, index)
    const APIAST = ast.slice(index)
    explainAST.links = ast.links
    APIAST.links = ast.links
    return { explainAST, APIAST }
  }

  render () {
    const { markdown, children } = this.props
    const ast = marked.lexer(markdown)
    const { explainAST, APIAST } = this.handleAST(ast)
    return (
      <div>
        <div className="markdown" dangerouslySetInnerHTML={{ __html: marked.parser(explainAST) }} />
        <div className="markdown">
          <h2>代码演示</h2>
        </div>
        {children}
        <div
          className="markdown"
          dangerouslySetInnerHTML={{ __html: marked.parser(APIAST) }}
        />
      </div>
    )
  }
}

export default ComPage
