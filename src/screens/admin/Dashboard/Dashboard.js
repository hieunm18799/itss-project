import React from 'react';
import {WidgetsDropdown} from '../../../components/Widgets/WidgetsDropdown.js';
import {
  CRow,
  CCol,
  CWidgetDropdown,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'


const Dashboard = () => {

  return (
    <CRow>
    <CCol sm="6" lg="4">
      <CWidgetDropdown
        className="mb-4"
        color="primary"
        value="100"
        title="Số lượng học viên"
      />
    </CCol>
    <CCol sm="6" lg="4">
          <CWidgetDropdown
          className="mb-4"
          color="info"
          value="20"
          title="Tổng số khoá học "
        />
    </CCol>
    <CCol sm="6" lg="4">
      <CWidgetDropdown
        className="mb-4"
        color="warning"
        value="120"
        title="Tổng số tài liệu "
      />
    </CCol>
  </CRow>
  )
}

export default Dashboard
