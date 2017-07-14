import React from 'react'
import ReactDOM from 'react-dom'
import { Router, browserHistory } from 'react-router'
import routesConfig from '@/routes'
import 'babel-polyfill'
import 'simple-reset'
import './index.less'

const root = document.querySelector('#app')

ReactDOM.render(
  <Router history={browserHistory} routes={routesConfig} />
, root)
