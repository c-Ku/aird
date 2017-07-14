import React from 'react'
import { Layout, Menu } from 'antd'
import { browserHistory } from 'react-router'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import './Header.less'

const { Header } = Layout

class LayoutHeader extends React.PureComponent {
  static defaultProps = {
    className: ''
  }

  static propTypes = {
    className: PropTypes.string
  }

  menuClick (menu) {
    if (menu.key === 'home') {
      browserHistory.push('/')
    } else {
      browserHistory.push(`/docs/${menu.key}`)
    }
  }

  render () {
    const { className } = this.props
    const headerClass = classnames({
      header: true,
      [className]: className
    })
    return (
      <Header className={headerClass}>
        <img
          className="header__logo"
          src={require('../../../static/aircos.svg')}
          alt="aird"
        />
        <Menu
          mode="horizontal"
          defaultSelectedKeys={['home']}
          style={{ lineHeight: '78px', borderBottom: '0' }}
          onClick={this.menuClick}
        >
          <Menu.Item key="home">
            首页
          </Menu.Item>
          <Menu.Item key="components">
            组件
          </Menu.Item>
          <Menu.Item key="guide">
            指南
          </Menu.Item>
          <Menu.Item key="resource">
            资源
          </Menu.Item>
          <Menu.Item key="scaffold">
            脚手架
          </Menu.Item>
          <Menu.Item key="practice">
            最佳实践
          </Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default LayoutHeader
