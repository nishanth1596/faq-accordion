import minusIcon from "../assets/icon-minus.svg";
import plusIcon from "../assets/icon-plus.svg";

type FaqsProps = {
  item: {
    question: string;
    answer: string;
    id: number;
  };
  isLastIndex: boolean;
  showId: number | null;
  handleClick: (id: number) => void;
};

function Faqs({ item, isLastIndex, handleClick, showId }: FaqsProps) {
  return (
    <>
      <div className="flex w-full items-center justify-between gap-6">
        <button
          className="text-DarkPurple-301534 hover:text-Pink-AD28EB text-left leading-[1.19rem] font-semibold hover:cursor-pointer lg:text-lg lg:leading-[1.32rem]"
          onClick={() => handleClick(item.id)}
        >
          {item.question}
        </button>

        <div>
          <button
            onClick={() => handleClick(item.id)}
            className="flex h-[1.875rem] w-[1.875rem] items-center justify-center p-0"
          >
            <img
              src={showId === item.id ? minusIcon : plusIcon}
              alt={showId === item.id ? "Minus Icon" : "Plus Icon"}
            />
          </button>
        </div>
      </div>

      <p
        className={`border-LightPink-F8EEFF text-PalePurple-8B6990 ${!isLastIndex ? "mb-5 border-b pb-5" : "mb-0 pb-0"} ${showId === item.id ? "mt-6" : ""} text-sm leading-[1.5] font-normal`}
      >
        {showId === item.id && item.answer}
      </p>
    </>
  );
}

export default Faqs;
