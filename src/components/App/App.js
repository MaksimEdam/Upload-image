import React from "react";
import { storage } from "../Firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const file = e.target[0].files[0];
    console.log("form.values is", file);
    uploadFiles(file);
  };

  const [progress, setProgress] = useState(0);
  const uploadFiles = (file) => {
    if (!file) return;
    const storageRef = ref(storage, `/files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => console.log(url));
      }
    );
  };
  return (
    <div className="App">
      <h1>Привет</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" />
        <button type="submit">Upload</button>
      </form>
      ; ;<h3>Загружен {progress}%</h3>
    </div>
  );
}

export default App;
