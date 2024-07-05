/*
This function will upload the image file on firebase. This function will first get 
*/

import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "./config";

const uploadfile = (file, filePath) => {
  return new Promise((resolve, reject) => {
    const storageRef = ref(storage, filePath); //Reference to Storage Location

    uploadBytes(storageRef, file) //Upload the File
      .then(() => {
        return getDownloadURL(storageRef); //download URL
      })
      .then((url) => {
        resolve(url);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default uploadfile;
