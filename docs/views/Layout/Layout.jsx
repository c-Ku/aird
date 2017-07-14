import React from 'react'
import classnames from 'classnames'
import { Header, Footer } from '@/components'
import './Layout.less'

function Layout (props) {
  const contentCls = classnames({
    'content': true,
    'content--white': props.location.pathname === '/'
  })
  return (
    <div className="container">
      <div className={contentCls}>
        <Header />
        {props.children}
      </div>
      {
        props.location.pathname !== '/' && <Footer />
      }
    </div>
  )
}

export default Layout
