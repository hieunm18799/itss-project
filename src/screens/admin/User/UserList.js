import React, { lazy } from 'react'

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { firestore } from '../../../services/firebase/firebase';

const UserList = () => {
  
  return (
    <CTable>
    <CTableHead>
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col">Tên tài khoản</CTableHeaderCell>
        <CTableHeaderCell scope="col">Họ Tên </CTableHeaderCell>
        <CTableHeaderCell scope="col">Email</CTableHeaderCell>
        <CTableHeaderCell scope="col">Thao tác</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      <CTableRow>
        <CTableHeaderCell scope="row">1</CTableHeaderCell>
        <CTableDataCell>QuangManh</CTableDataCell>
        <CTableDataCell>Bui Quang Manh</CTableDataCell>
        <CTableDataCell>mah@gmail.com</CTableDataCell>
        <CTableDataCell>
          <CTableRow>
          <CTableDataCell> <CIcon size={'sm'} name={'cilSettings'} /> </CTableDataCell>
          </CTableRow>  
        </CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">2</CTableHeaderCell>
        <CTableDataCell>HiepNguyen</CTableDataCell>
        <CTableDataCell>Nguyen Manh Hiep</CTableDataCell>
        <CTableDataCell>Hiep@gmail.com</CTableDataCell>
      </CTableRow>
      <CTableRow>
        <CTableHeaderCell scope="row">3</CTableHeaderCell>
        <CTableDataCell>MinhHieu</CTableDataCell>
        <CTableDataCell>Nguyen Minh Hieu</CTableDataCell>
        <CTableDataCell>Hieu@gmail.com</CTableDataCell>
      </CTableRow>
    </CTableBody>
  </CTable>
  )
}

export default UserList
