import { useState } from "react";
import starIcon from "../assets/icon-star.svg";
import { faqData } from "../data";
import Faqs from "./Faqs";

function FaqCard() {
  const [showId, setShowId] = useState<number | null>(1);

  function handleClick(id: number) {
    setShowId(id === showId ? null : id);
  }

  return (
    <article className="bg-White-FFF dropShadow mx-6 my-[8.91rem] max-w-[37.5rem] rounded-lg p-6">
      <h2 className="text-DarkPurple-301534 mb-6 flex items-center gap-6 text-[2rem] leading-[2.375rem] font-bold">
        <img src={starIcon} alt="Star Icon" className="w-6" />
        <span>FAQs</span>
      </h2>

      {faqData.map((item) => (
        <Faqs
          item={item}
          key={item.id}
          isLastIndex={item.id === faqData.length}
          handleClick={handleClick}
          showId={showId}
        />
      ))}
    </article>
  );
}

export default FaqCard;
