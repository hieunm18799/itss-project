import React, { lazy } from 'react'

const WidgetsDropdown = lazy(() => import('../../../components/Widgets/WidgetsDropdown'));
const WidgetsBrand = lazy(() => import('../../../components/Widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
      <div>Danh sach nguoi dung</div>
  )
}

export default Dashboard
