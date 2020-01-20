'use strict'

// 系统函数库
// const user = require.main.require('./user')
// const db = require.main.require('../src/database')
// const meta = require.main.require('./meta')
// const utils = require.main.require('../public/src/utils')

// 常用模块
// const async = require.main.require('async')
// const nconf = require.main.require('nconf')
// const winston = require.main.require('winston')
// const path = require.main.require('path')

const Core = {}

Core.defineWidgetAreas = async (areas) => {
  areas = areas.concat([
    {
      'name': 'MOTD',
      'template': 'home.tpl',
      'location': 'motd'
    },
    {
      'name': 'Homepage Footer',
      'template': 'home.tpl',
      'location': 'footer'
    },
    {
      'name': 'Category Sidebar',
      'template': 'category.tpl',
      'location': 'sidebar'
    },
    {
      'name': 'Topic Footer',
      'template': 'topic.tpl',
      'location': 'footer'
    }
  ])

  return areas
}

module.exports = Core
module.exports.Core = Core
