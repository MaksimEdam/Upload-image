import React from "react";
import Button from "react-bootstrap/Button";
import s from "./ButtonLoad.module.css";

export default function ButtonLoad() {
  return (
    <div className={s.formButton}>
      <Button as="input" type="submit" value="Загрузка" />{" "}
    </div>
  );
}
