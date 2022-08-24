import React, { useCallback } from "react";
import { Form } from "@altiore/form";

const MyForm = ({ uploadFiles }) => {
  const handleSubmit = useCallback(
    (file) => {
      uploadFiles(file.image);
    },
    [uploadFiles]
  );
  return (
    <Form onSubmit={handleSubmit}>
      <input type="file" name="image" />
      <button type="submit">Отправить</button>
    </Form>
  );
};
export default MyForm;
