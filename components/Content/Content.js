import { useState } from "react";
import TopAccordion from "./TopAccordion";
import TitleContent from "./TitleContent";
import Instructor from "./Instructor";

import { formatWaktu } from "../../helpers/formatWaktu";

function Content({ title, instructor, data }) {
  const [showFirst, setShowFirst] = useState(true);
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

  return (
    <div>
      <TopAccordion
        totalDuration={totalDuration}
        totalMateri={totalMateri}
        setShowFirst={setShowFirst}
        showFirst={showFirst}
        title={title}
      />
      {showFirst && (
        <div>
          {data.map((el) => {
            return (
              <div className="mx-4 my-3 md:my-2" key={el.id}>
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
      <div className="md:hidden">
        <Instructor instructor={instructor} />
      </div>
    </div>
  );
}

export default Content;
