import { useState } from "react";

function Duration({
  title,
  duration,
  idSection,
  selected,
  setSelectedSection,
}) {
  return (
    <div>
      <div
        className={
          idSection === selected
            ? "p-3 flex justify-between items-center border-t border-active"
            : "p-3 flex justify-between items-center border-t"
        }
        onClick={() => setSelectedSection(idSection)}
      >
        <div className="flex justify-start items-center space-x-3">
          <div>
            {idSection === selected ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill={idSection === selected ? "#FF0F51" : "#fff"}
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <div className="shadow-md rounded-full h-5 w-5"></div>
            )}
          </div>
          <h3>{title}</h3>
        </div>
        <p>{duration}</p>
      </div>
    </div>
  );
}

export default Duration;
