import React, { lazy } from 'react'

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCard,
  CCardBody,
  CCardHeader
} from '@coreui/react'

const DocList = () => {

  return (
    <CCard>
  <CCardHeader>材料リスト</CCardHeader>
  <CCardBody>
    <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">名前</CTableHeaderCell>
        <CTableHeaderCell scope="col">リンく</CTableHeaderCell>
        <CTableHeaderCell scope="col">レベル</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>みんなの日本語</CTableDataCell>
        <CTableDataCell>https://drive.google.com</CTableDataCell>
        <CTableDataCell>N5</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>Jacob</CTableDataCell>
        <CTableDataCell>Thornton</CTableDataCell>
        <CTableDataCell>@fat</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell colspan="2">Larry the Bird</CTableDataCell>
        <CTableDataCell>@twitter</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
  </CCardBody>
  </CCard>
  )
}

export default DocList
