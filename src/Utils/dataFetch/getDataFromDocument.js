import { doc, getDoc } from "firebase/firestore";
import db from "../../Firebase/firebase";

const getDataFromDocument=(collectionPath,docId,setFunction)=>{
    const docRef = doc(db, collectionPath, docId);
 getDoc(docRef).then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        setFunction(doc.data())
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
})


}
export default getDataFromDocument