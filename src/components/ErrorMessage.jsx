import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div className="text-center text-lg font-bold text-red-500">{message}</div>
  );
};

export default ErrorMessage;
