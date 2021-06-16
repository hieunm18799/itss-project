import React, { Component } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CButton,
    CCardFooter,
    CForm,
    CFormLabel,
    CFormControl,
  } from '@coreui/react';
  import {
    Redirect,
    Route,
    Switch
  } from 'react-router-dom'
  import AppSidebar from "./admin/AppSidebar";
  import { AppHeader } from "./admin/AppHeader";
  import { firestore } from "../services/firebase/firebase";
  import firebase from "firebase/app";

  const storageRef = firebase.storage().ref();



class AddTailieu extends React.Component {
    constructor(props) {
      super(props);
      this.state = {Title: ''};
      this.state = {File: ''};
      this.state = {Type: ''};
      this.state = {Link: ''};
      this.state = {LinkFile: ''};
      this.fileInput = React.createRef();

      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeFile = this.handleChangeFile.bind(this);
      this.handleChangeType = this.handleChangeType.bind(this);
      this.handleChangeLink = this.handleChangeLink.bind(this);



      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeTitle(event) {
      this.setState({Title: event.target.value});
    }

    handleChangeFile(event) {
        this.setState({File: event.target.value});
      }

    handleChangeType(event) {
        this.setState({Type: event.target.value});
      }    
      handleChangeLink(event) {
        this.setState({Link: event.target.value});
      }
  
  
    handleSubmit(event) {
        alert('Đã thêm : ' + this.state.Title);
        event.preventDefault();

      //up img 
      var metadata = {
        contentType: 'image/jpeg'
      };

      var file = this.fileInput.current.files[0];
    
      // Upload file and metadata to the object 'images/mountains.jpg'
      var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);
    
      
          // Upload completed successfully, now we can get the download URL
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            console.log('File available at', downloadURL);
            this.setState({LinkFile: downloadURL});
        });

        let db = firestore.doc(`References/All`);
        db.get().then((doc) => {
        if (doc.exists) {
            let data = doc.data()["documents"];
            console.log('dowload urllll : '+ this.state.LinkFile);
            db.update({
             documents: firebase.firestore.FieldValue.arrayUnion({
                                                                    'title' : this.state.Title,
                                                                    'cove'  : this.state.Link, //this.state.LinkFile - thay = linkfile nếu muốn up file 
                                                                    'type'  : this.state.Type,
                                                                    'url'   : this.state.File,
                                                                })
            })
            console.log(data);
            } else {
            // doc.data() will be undefined in this case
            console.log("no data");
        }
        });

    }
  
    render() {
      return (
        <div>
        <AppSidebar />
        <div className="wrapper d-flex flex-column min-vh-100 bg-light">
          <AppHeader />
          <div className="body flex-grow-1 px-3">
        <CCard>
      <CCardHeader component="h5">Thêm tài liệu</CCardHeader>
    <form onSubmit={this.handleSubmit}>
      <CCardBody>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Tiêu đề:
            <CFormControl type="text" value={this.state.Title} onChange={this.handleChangeTitle} />
          </CFormLabel>
          <br/>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Liên kết:
            <CFormControl type="text" value={this.state.File} onChange={this.handleChangeFile} />
          </CFormLabel>
          <br/>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Type:
            <CFormControl type="text" value={this.state.Type} onChange={this.handleChangeType} />
          </CFormLabel>
          <br/>
          <CFormLabel htmlFor="exampleFormControlInput1">
            Ảnh:
          <CFormControl type="file" ref={this.fileInput} accept="image/x-png,image/jpeg"/>
        </CFormLabel>
        <CFormLabel htmlFor="exampleFormControlInput1">
            Link ảnh thay thế:
            <CFormControl type="text" value={this.state.Link} onChange={this.handleChangeLink} />
          </CFormLabel>
        
        <br/>
        
      </CCardBody>
      <CCardFooter className="text-muted"><CButton color="success" type="submit" value="Submit">Submit</CButton></CCardFooter>
      </form>
    </CCard>
    </div>
    </div>
    </div>
      );
    }
  }

export default AddTailieu;