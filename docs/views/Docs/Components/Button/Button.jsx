import React from 'react'
import { Demo, ComPage } from '@/components'
import { Row, Col } from 'antd'
import { Button } from '#'
import size from '#/Button/demo/size.md'
import type from '#/Button/demo/type.md'
import disable from '#/Button/demo/disable.md'
import icon from '#/Button/demo/icon.md'
import circle from '#/Button/demo/circle.md'
import loading from '#/Button/demo/loading.md'
import group from '#/Button/demo/group.md'
import README from '#/Button/README.md'

const ButtonGroup = Button.Group

class ButtonDemo extends React.PureComponent {
  render () {
    return (
      <ComPage markdown={README}>
        <Row gutter={16}>
          <Col span={12}>
            <Demo markdown={size} scope={{ Button }} />
            <Demo markdown={disable} scope={{ Button }} />
            <Demo markdown={circle} scope={{ Button }} />
          </Col>
          <Col span={12}>
            <Demo markdown={type} scope={{ Button }} />
            <Demo markdown={icon} scope={{ Button }} />
            <Demo markdown={loading} scope={{ Button }} />
            <Demo markdown={group} scope={{ Button, ButtonGroup }} />
          </Col>
        </Row>
      </ComPage>
    )
  }
}

export default ButtonDemo
