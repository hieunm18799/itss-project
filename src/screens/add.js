import React, { Component } from "react";
import {
    CCard,
    CCardBody,
    CCardHeader,
    CButton,
    CCardFooter,
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
                                                                    'cove'  : this.state.LinkFile,
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
      <CCardHeader>Thêm tài liệu</CCardHeader>
    <form onSubmit={this.handleSubmit}>
      <CCardBody>
          <label>
            Tiêu đề:
            <input type="text" value={this.state.Title} onChange={this.handleChangeTitle} />
          </label>
          <br/>
          <label>
            Liên kết:
            <input type="text" value={this.state.File} onChange={this.handleChangeFile} />
          </label>
          <br/>
          <label>
            Type:
            <input type="text" value={this.state.Type} onChange={this.handleChangeType} />
          </label>
          <br/>
          <label>
            Ảnh:
          <input type="file" ref={this.fileInput} accept="image/x-png,image/jpeg"/>
        </label>
        <br/>
        
      </CCardBody>
      <CCardFooter className="text-muted"><input type="submit" value="Submit" /></CCardFooter>
      </form>
    </CCard>
    </div>
    </div>
    </div>
      );
    }
  }

export default AddTailieu;