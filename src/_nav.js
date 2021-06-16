import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/admin',
    icon: <CIcon name="cil-speedometer" customClasses="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavTitle',
    anchor: 'Quản lý website',
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Quản lý người dùng',
    to: '/admin/yuza',
    icon: <CIcon name="cil-drop" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Quản lý khoá học',
    to: '/admin/kosu',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Quản lý tài liệu',
    to: '/admin/zairyou',
    icon: <CIcon name="cil-pencil" customClasses="nav-icon" />,
  },
]

export default _nav
