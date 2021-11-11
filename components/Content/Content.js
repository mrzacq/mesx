import { useState } from "react";
import TopAccordion from "./TopAccordion";
import TitleContent from "./TitleContent";
import { formatWaktu } from "../../helpers/formatWaktu";
const { title, instructor, data } = require("../course.json");

function Content() {
  const [showFirst, setShowFirst] = useState(false);
  const [showContent, setShowContent] = useState([]);

  const handleShowContent = (index) => {
    if (showContent.includes(index)) {
      setShowContent([showContent.filter((i) => i !== index)]);
    } else {
      setShowContent([...showContent, index]);
    }
  };

  let totalDuration = data
    .map((el) =>
      el.sections.map((x) => x.duration).reduce((prev, next) => prev + next, 0)
    )
    .reduce((p, n) => p + n, 0);
  totalDuration = Math.floor(totalDuration / 60);

  totalDuration = formatWaktu(totalDuration);

  let totalMateri = data.length;
  console.log(data);
  return (
    <div>
      <TopAccordion
        totalDuration={totalDuration}
        totalMateri={totalMateri}
        setShowFirst={setShowFirst}
        showFirst={showFirst}
      />
      {showFirst && (
        <div>
          {data.map((el) => {
            return (
              <div className="mx-4 my-3" key={el.id}>
                <div className="border rounded cursor-pointer">
                  <TitleContent
                    handleShowContent={handleShowContent}
                    showContent={showContent}
                    categoryName={el.category_name}
                    id={el.id}
                    sections={el.sections}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="mt-10 mb-20 border-t">
        <div className="flex justify-center items-start p-4 space-x-4">
          <img src="/img/ellipse1.png" alt="instructor" className="h-9 w-9" />
          <div className="flex flex-col justify-start items-start">
            <h1 className="text-lg font-bold">{instructor?.name}</h1>
            <p className="text-base font-light">{instructor?.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
