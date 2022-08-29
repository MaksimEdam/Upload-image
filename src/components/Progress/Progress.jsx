import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Progress({ progress }) {
  return (
    <div>
      <ProgressBar now={progress} label={`${progress}%`} />
    </div>
  );
}
