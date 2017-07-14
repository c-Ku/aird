import React from 'react'
import { browserHistory } from 'react-router'
import { Menu, Row, Col } from 'antd'
import './ComponentsLayout.less'

const { ItemGroup } = Menu

function navigate (menu) {
  browserHistory.push(`/docs/components/${menu.key}`)
}

function ComponentLayout (props) {
  return (
    <div className="comp-layout">
      <Row>
        <Col span={4}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['button']}
            onClick={navigate}
          >
            <ItemGroup key="general" title="General">
              <Menu.Item key="button">Button 按钮</Menu.Item>
              <Menu.Item key="icon">Icon 图标</Menu.Item>
            </ItemGroup>
          </Menu>
        </Col>
        <Col className="comp-layout__right" span={20}>
          {props.children}
        </Col>
      </Row>
    </div>
  )
}

export default ComponentLayout
