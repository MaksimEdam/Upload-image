import { storage } from "../Firebase/firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useState } from "react";
import MyForm from "../MyForm/MyForm";

const App = () => {
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
    <div>
      <MyForm uploadFiles={uploadFiles} />
      <h3>Загружен {progress}%</h3>
    </div>
  );
};
export default App;
