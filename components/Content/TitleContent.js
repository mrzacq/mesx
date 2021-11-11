import { useState } from "react";
import { formatMenit } from "../../helpers/formatWaktu";
import Duration from "./Duration";

function TitleContent({
  showContent,
  handleShowContent,
  categoryName,
  id,
  sections,
}) {
  const [selected, setSelectedSection] = useState("");

  return (
    <div>
      <div
        className={
          showContent.includes(id)
            ? "p-3 flex justify-between items-center bg-blue-100"
            : "p-3 flex justify-between items-center"
        }
        onClick={() => handleShowContent(id)}
      >
        <h2 className="text-lg font-semibold">{categoryName}</h2>
        <button type="button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            {showContent.includes(id) ? (
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </div>
      {showContent.includes(id) && (
        <>
          {sections.map((section) => {
            return (
              <div key={section.id}>
                <Duration
                  title={section.name}
                  duration={formatMenit(Math.floor(section.duration))}
                  idSection={section.id}
                  selected={selected}
                  setSelectedSection={setSelectedSection}
                />
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}

export default TitleContent;
