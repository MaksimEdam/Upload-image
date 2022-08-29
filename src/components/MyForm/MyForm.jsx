import React, { useCallback } from "react";
import { Form } from "@altiore/form";
import s from "./MyForm.module.css";
import ButtonLoad from "../Button/ButtonLoad";

const MyForm = ({ uploadFiles }) => {
  const handleSubmit = useCallback(
    (file) => {
      uploadFiles(file.image);
    },
    [uploadFiles]
  );
  return (
    <div className={s.wrapper}>
      <Form onSubmit={handleSubmit}>
        <div className={s.inputWrapper}>
          <input type="file" name="image" className={s.modalFormInput} />
        </div>
        <ButtonLoad />
      </Form>
    </div>
  );
};
export default MyForm;
