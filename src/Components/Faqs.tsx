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
        <h3
          className="text-DarkPurple-301534 hover:text-Pink-AD28EB leading-[1.19rem] font-semibold hover:cursor-pointer lg:text-lg lg:leading-[1.32rem]"
          onClick={() => handleClick(item.id)}
        >
          {item.question}
        </h3>

        <button onClick={() => handleClick(item.id)}>
          <div className="h-[1.875rem] w-[1.875rem]">
            {showId === item.id ? (
              <img src={minusIcon} alt="Minus Icon" />
            ) : (
              <img src={plusIcon} alt="Plus Icon" />
            )}
          </div>
        </button>
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
