import React from "react";

function ProductContactHeader({ pages }) {
  return (
    <div>
      <div
        className={`ml-${pages}`}
        style={{
          fontWeight: "bolder",
          fontSize: "10rem",
          zIndex: "100",
          position: "absolute",
          marginTop: "0.5em",
          WebkitTextStroke: "4px white",
          background: "linear-gradient(to right, #a33237, #d06471)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          width: "100vw",
          textAlign: "center",
        }}
      >
        {pages}
      </div>

      <div
        className="min-w-max h-140 bg-linear-to-r from-[#f58ba1] to-[#8a0d15] relative overflow-hidden"
        style={{ position: "relative" }}
      >
        <div className="rounded-full hidden xl:block bg-[#df8594] mr-[94%] mt-[10%] absolute xl:w-[20%] xl:h-[55%]"></div>
        <div className="rounded-b-full hidden xl:block bg-[#df8594] ml-[50%] xl:w-[8%] xl:h-[12%]"></div>
        <div className="rounded-full hidden xl:block bg-[#df8594] ml-auto mr-[4%] xl:w-[3%] xl:h-[8%]"></div>
        <div className="rounded-full hidden xl:block bg-[#df8594] ml-[70%] mt-[13%] absolute xl:w-[12%] xl:h-[32%]"></div>
        <div className="rounded-full hidden xl:block bg-[#df8594] ml-[94%] mt-[18%] absolute xl:w-[9%] xl:h-[24%]"></div>
      </div>
    </div>
  );
}

export default ProductContactHeader;
