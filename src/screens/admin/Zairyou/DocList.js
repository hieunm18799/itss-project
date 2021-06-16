import React, {  useEffect, useState } from 'react'

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
} from '@coreui/react';
import { firestore } from '../../../services/firebase/firebase';

const DocList = () => {
  const [references, setReferences] = useState([]);
  const [checkReferences, setCheckReferences] = useState([]);
  let i =1;
  const getReferences = () => {
    let db = firestore.doc(`References/All`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data()["documents"];
        setReferences(data);
        setCheckReferences(data);
      } else {
        // doc.data() will be undefined in this case
        console.log("no data");
      }
    });
  };
  useEffect(() => {
    getReferences();
  }, []);
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
        <CTableHeaderCell scope="col">Ảnh</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody>
      {references?.map((item) => (
        <CTableRow>
        <CTableHeaderCell scope="row">{item?.id}</CTableHeaderCell>
        <CTableDataCell>{item?.title}</CTableDataCell>
        <CTableDataCell>{item?.url}</CTableDataCell>
        <CTableDataCell><img
              src={item?.cover}
              style={{ height: "100%", width: "100%", objectFit: "cover" }}
            /></CTableDataCell>
      </CTableRow>
      ))}
    </CTableBody>
  </CTable>
  </CCardBody>
  </CCard>
  )
}

export default DocList
