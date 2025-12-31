import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      onClick={handleClick}
      className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-px focus:outline-none md:w-60 md:mt-10"
    >
      <span className="absolute inset-[-1000%] animate-[spin_1.5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl ${otherClasses}`}
      >
        {position === "left" && icon}
        <span className={`${position === "left" ? "ml-2" : "mr-2"}`}>{title}</span>
        {position === "right" && icon}
      </span>
    </button>
  );
};

export default MagicButton;