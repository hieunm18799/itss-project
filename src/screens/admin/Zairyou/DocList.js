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
  CCardHeader,
  CLink,
  CButton
} from '@coreui/react';
import { firestore } from '../../../services/firebase/firebase';
import CIcon from '@coreui/icons-react';


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

  const deleteX = (deleteid) => {
    console.log('nhan xoaaaaa id '+ deleteid);
    let db = firestore.doc(`References/All`);
    db.get().then((doc) => {
      if (doc.exists) {
        let data = doc.data()["documents"];
        db.update({
          documents: data.filter(document => document.id !== deleteid)
        })
          console.log(data);
        } else {
        // doc.data() will be undefined in this case
        console.log("no data");
      }
    });
  };
  return (
    <CCard>
  <CCardHeader>Danh sách Tài liệu</CCardHeader>
  <CCardBody>
    <CTable align="middle"  hover >
    <CTableHead color="dark">
      <CTableRow>
        <CTableHeaderCell scope="col">#</CTableHeaderCell>
        <CTableHeaderCell scope="col" className="w-20">Tên</CTableHeaderCell>
        <CTableHeaderCell scope="col" className="w-20">Link</CTableHeaderCell>
        <CTableHeaderCell scope="col" className="w-20">Ảnh</CTableHeaderCell>
        <CTableHeaderCell scope="col" colspan="2">Thao tác</CTableHeaderCell>
      </CTableRow>
    </CTableHead>
    <CTableBody >
      {references?.map((item) => (
        <CTableRow>
        <CTableHeaderCell scope="row">{item?.id}</CTableHeaderCell>
        <CTableDataCell >{item?.title}</CTableDataCell>
        <CTableDataCell> <CLink href={item?.url}> Truy cập </CLink></CTableDataCell>
        <CTableDataCell> <img 
        src={item?.cover}
              style={{ height: "70%", width: "70%", objectFit: "cover" }}
            /></CTableDataCell>
        <CTableDataCell scope="row">
          <CButton color="success" component={deleteX(item?.id)} ><CIcon size={'lg'} name={'cil-pencil'} class="text-primary" /> </CButton>
        </CTableDataCell>
        <CTableDataCell scope="row">
        <CButton color="danger"><CIcon size={'lg'} name={'cil-x'} class="text-primary" /></CButton>
        </CTableDataCell>
        
      </CTableRow>
      ))}
    </CTableBody>
  </CTable>
  </CCardBody>
  </CCard>
  )
}

export default DocList
