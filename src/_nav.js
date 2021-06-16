import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'ダッシュボード',
    to: '/admin',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: '管理ウェブサイト',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'ユーザー管理',
    to: '/admin/yuza',
    icon: <CIcon name="cil-drop" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'コース管理',
    to: '/admin/kosu',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: '材料管理',
    to: '/admin/zairyou',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
]

export default _nav
