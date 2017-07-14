import React from 'react'
import './NotFound.less'

class NotFound extends React.PureComponent {
  render () {
    return (
      <section className="nf">
        <img
          className="nf__img"
          src={require('../../../static/404.png')} alt="404"
        />
        <h3 className="nf__title">
          页面正在施工中......
        </h3>
      </section>
    )
  }
}

export default NotFound
