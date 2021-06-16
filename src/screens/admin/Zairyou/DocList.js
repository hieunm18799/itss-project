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
  <CCardHeader>Danh sách Tài liệu</CCardHeader>
  <CCardBody>
    <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Tên</CTableHeaderCell>
        <CTableHeaderCell scope="col">Link</CTableHeaderCell>
        <CTableHeaderCell scope="col">Trình độ</CTableHeaderCell>
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
        <CTableDataCell>みんなの日本語</CTableDataCell>
        <CTableDataCell>https://drive.google.com</CTableDataCell>
        <CTableDataCell>N5</CTableDataCell>
      </CTableRow>
      <CTableRow>
      <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>みんなの日本語</CTableDataCell>
        <CTableDataCell>https://drive.google.com</CTableDataCell>
        <CTableDataCell>N5</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
  </CCardBody>
  </CCard>
  )
}

export default DocList
