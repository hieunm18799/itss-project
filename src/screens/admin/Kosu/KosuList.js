import React, { lazy } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { DocsCallout, Example } from 'src/reusable'

const WidgetsDropdown = lazy(() => import('../../../components/Widgets/WidgetsDropdown'));
const WidgetsBrand = lazy(() => import('../../../components/Widgets/WidgetsBrand.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
      <div>danh sach khoa hoc</div>
  )
}

export default Dashboard
