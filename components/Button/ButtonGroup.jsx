import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

function ButtonGroup (props) {
  const buttonPrefix = 'air-button'
  const groupCls = classnames([`${buttonPrefix}-group`], props.className)
  return (
    <div className={groupCls}>
      {props.children}
    </div>
  )
}

ButtonGroup.defaultProps = {
  className: ''
}

ButtonGroup.propTypes = {
  className: PropTypes.string
}

export default ButtonGroup
