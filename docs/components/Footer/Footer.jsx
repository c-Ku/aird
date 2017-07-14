import React from 'react'
import classnames from 'classnames'
import { Layout, Row, Col, Icon } from 'antd'
import PropTypes from 'prop-types'
import './Footer.less'

const { Footer } = Layout

function LayoutFooter (props) {
  const { className } = props
  const footerClass = classnames({
    footer: true,
    className
  })
  return (
    <Footer className={footerClass}>
      <Row>
        <Col span={6} className="footer__col">
          <h4>
            <Icon type="github" />  Github
          </h4>
          <ul>
            <li><a href="https://github.com/AirHubs/aird" target="_blank">源码仓库</a></li>
            <li><a href="https://github.com/AirHubs/airhubs-cli" target="_blank">Airhubs-cli</a></li>
          </ul>
        </Col>
        <Col span={6} className="footer__col">
          <h4>
            <Icon type="usb" />  热门站点
          </h4>
          <ul>
            <li>
              <a href="http://chuangzaoshi.com/Go/?url=https://facebook.github.io/react/&linkId=86" target="_blank">React</a>
              &nbsp;-&nbsp;官方文档
            </li>
            <li>
              <a href="https://ant.design/index-cn" target="_blank">Ant-Design</a>
              &nbsp;-&nbsp;阿里 React 组件库
            </li>
            <li>
              <a href="http://lesscss.org/" target="_blank">Less</a>
              &nbsp;-&nbsp;官网
            </li>
            <li>
              <a href="http://fontawesome.io/" target="_blank">FontAwesome</a>
              &nbsp;-&nbsp;图标库
            </li>
            <li>
              <a href="https://jsfiddle.net/" target="_blank">JSfiddle</a>
              &nbsp;-&nbsp;实时 JS 环境
            </li>
            <li>
              <a href="http://caniuse.com/" target="_blank">CanIUse</a>
              &nbsp;-&nbsp;前端兼容性查看
            </li>
            <li>
              <a href="http://jquery.com/" target="_blank">Jquery</a>
              &nbsp;-&nbsp;官网
            </li>
          </ul>
        </Col>
        <Col span={6} className="footer__col">
          <h4>
            <Icon type="fork" />  代码托管平台
          </h4>
          <ul>
            <li>
              <a href="https://github.com/" target="_blank">Github</a>
              &nbsp;-&nbsp;大型同性交友社区
            </li>
            <li>
              <a href="https://about.gitlab.com/" target="_blank">GitLab</a>
              &nbsp;-&nbsp;免费无限制的项目托管
            </li>
            <li>
              <a href="https://git.oschina.net/" target="_blank">码云</a>
              &nbsp;-&nbsp;国内版 github
            </li>
            <li>
              <a href="https://bitbucket.org/" target="_blank">Bitbucket</a>
              &nbsp;-&nbsp;官网
            </li>
          </ul>
        </Col>
        <Col span={6} className="footer__col">
          <h4>
            <Icon type="team" />  热门论坛
          </h4>
          <ul>
            <li>
              <a href="https://www.v2ex.com/" target="_blank">V2ex</a>
              &nbsp;-&nbsp;IT创意工作者社区
            </li>
            <li>
              <a href="https://cnodejs.org/" target="_blank">cnode</a>
              &nbsp;-&nbsp;js专业中文社区
            </li>
            <li>
              <a href="https://stackoverflow.com/" target="_blank">stackoverflow</a>
            </li>
            <li>
              <a href="https://juejin.im/timeline" target="_blank">掘金</a>
              &nbsp;-&nbsp;高质量技术社区
            </li>
            <li>
              <a href="https://segmentfault.com/" target="_blank">segmentfault</a>
              &nbsp;-&nbsp;编程爱好者交流平台
            </li>
          </ul>
        </Col>
      </Row>
    </Footer>
  )
}

LayoutFooter.defaultProps = {
  className: ''
}

LayoutFooter.propTypes = {
  className: PropTypes.string
}

export default LayoutFooter
