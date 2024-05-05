import React from "react";

export const CopyShareLink = ({ url,children }) => {
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(url);
      }}
    >
      {children}
    </button>
  );
};
