import React, { useCallback } from "react";
import { Form } from "@altiore/form";

const FormAltiore = () => {
  const handleSubmit = useCallback((values) => {
    console.log("Переменные формы:", values);
  }, []);

  return (
    <Form onSubmit={handleSubmit}>
      <input type="file" name="name" />
      <button type="submit">Отправить</button>
    </Form>
  );
};

export default FormAltiore;
