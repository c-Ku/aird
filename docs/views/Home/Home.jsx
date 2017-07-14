import React from 'react'
import { Button } from 'antd'
import { browserHistory } from 'react-router'
import './Home.less'

class Home extends React.PureComponent {
  render () {
    return (
      <div className="home">
        <div className="home__grid">
          <img className="home__bg" src={require('../../../static/bg.svg')} alt="" />
          <div className="home__content">
            <h1 className="home__title">
              Air-Draw
            </h1>
            <div className="home__description">
              <p>
                一套基于 React.js 的 UI 组件库。
              </p>
              <p>
                旨在减少研发过程中类似的页面和组件产生的大规模重复性建设成本。
              </p>
              <p>
                加快开发效率, 解放开发和设计的研发资源。
              </p>
            </div>
            <Button
              size="large"
              type="primary"
              onClick={() => browserHistory.push('/docs/components')}
            >
              快速开始
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
