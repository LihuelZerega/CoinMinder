import React from "react";
import { Spinner } from "@nextui-org/react";

function LoadingPage() {
  return (
    <div className="flex justify-center items-center">
      <Spinner size="md" color="primary" />
    </div>
  );
}

export default LoadingPage;
