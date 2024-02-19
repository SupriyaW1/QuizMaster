
import React from "react";
import img from "./images/Designer.png"

export default function Home() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${img})`,
          height: "100vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "auto",
          backgroundPosition: "center",
        }}
        className="img-fluid"
      ></div>
    </>
  );
}