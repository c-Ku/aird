import React from 'react'
import './style'

class ButtonGroup extends React.PureComponent {
  render () {
    return (
      <div className="button-group">
        {this.props.children}
      </div>
    )
  }
}

export default ButtonGroup
