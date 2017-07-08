import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Icon } from '../Icon'
import './style'

function getIcon (icon, loading) {
  if (loading) {
    return <Icon className="button__icon button__icon--loading" name="spinner" spin />
  } else if (icon) {
    return <Icon className="button__icon" name={icon} />
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
      'danger',
      'link',
      'ghost'
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
      loading
    } = this.props
    const buttonClass = classnames({
      'button': true,
      [`button--${size}`]: size,
      [`button--${type}`]: type,
      [`button--${shape}`]: shape,
      [`button--${type}--loading`]: loading,
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
        <span>
          {this.props.children}
        </span>
      </button>
    )
  }
}

export default Button
