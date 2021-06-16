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
        title="ユーザー数"
      />
    </CCol>
    <CCol sm="6" lg="4">
          <CWidgetDropdown
          className="mb-4"
          color="info"
          value="20"
          title="コース数"
        />
    </CCol>
    <CCol sm="6" lg="4">
      <CWidgetDropdown
        className="mb-4"
        color="warning"
        value="120"
        title="材料数"
      />
    </CCol>
  </CRow>
  )
}

export default Dashboard
