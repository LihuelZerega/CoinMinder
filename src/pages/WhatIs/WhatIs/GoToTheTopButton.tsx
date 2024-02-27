import React from "react";
import { Tooltip, Button } from "@nextui-org/react";
import { FaArrowUp } from "react-icons/fa6";

const GoToTheTopButon = () => {
  return (
    <>
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          borderRadius: "50%",
          padding: "6px",
          backgroundColor: "#38bdf8",
          border: "none",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
          zIndex: 1000,
        }}
      >
          <FaArrowUp
            className="fab fa-whatsapp"
            style={{
              color: "white",
              fontSize: "32px",
              padding: "6px",
            }}
          />
      </button>
      <style jsx global>{`
        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
};

export default GoToTheTopButon;
