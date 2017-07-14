import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Group from './ButtonGroup'
import { Icon } from '../Icon'
import './style'

function getIcon (icon, loading) {
  if (loading) {
    return <Icon className="air-button__icon air-button__icon--loading" name="spinner" spin />
  } else if (icon) {
    return <Icon className="air-button__icon" name={icon} />
  }
}

class Button extends React.PureComponent {
  static defaultProps = {
    onClick: () => {},
    className: '',
    disabled: false,
    loading: false,
    icon: '',
    htmlType: 'button',
    size: 'medium',
    type: 'default',
    shape: ''
  }

  static propTypes = {
    onClick: PropTypes.func,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    icon: PropTypes.string,
    htmlType: PropTypes.oneOf([
      'button',
      'submit',
      'reset'
    ]),
    size: PropTypes.oneOf([
      'mini',
      'small',
      'medium',
      'large',
      'block'
    ]),
    type: PropTypes.oneOf([
      'default',
      'primary',
      'link',
      'ghost',
      'danger',
      'success',
      'warning'
    ]),
    shape: PropTypes.oneOf([
      '',
      'circle'
    ])
  }

  render () {
    const {
      onClick,
      className,
      disabled,
      htmlType,
      size,
      type,
      shape,
      icon,
      loading,
      children
    } = this.props
    const buttonPrefix = 'air-button'
    const buttonClass = classnames({
      [`${buttonPrefix}`]: true,
      [`${buttonPrefix}--${size}`]: size,
      [`${buttonPrefix}--${type}`]: type,
      [`${buttonPrefix}--${shape}`]: shape,
      [`${buttonPrefix}--${type}--loading`]: loading,
      [className]: className
    })
    return (
      <button
        className={buttonClass}
        onClick={onClick}
        type={htmlType}
        role="button"
        disabled={disabled}
      >
        {getIcon(icon, loading)}
        {children && <span>{children}</span>}
      </button>
    )
  }
}

Button.Group = Group

export default Button
