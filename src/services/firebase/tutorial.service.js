import firebase from "./firebase";
export const dbN5 =  firebase.doc('Course/N5/Lesson1/Grammar')

export const getDataLesson =  (course,lesson,typeLesson,callback) => {
    let db = firebase.doc(`Course/${course}/${lesson}/${typeLesson}`)
    db.get().then(
        doc => {
            if (doc.exists) {
                let data = doc.data();
                callback(data)
            } else {
                // doc.data() will be undefined in this case
                callback(0)
            }
        }
    )
}

export const addNewLesson = (idUser,course,lesson) => {
    let db = firebase.doc(`User/${idUser}/History/${course}`)
    db.update({
        [lesson] : [0,1,2]
    })
}





