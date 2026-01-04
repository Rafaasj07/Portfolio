"use client";

import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn, prefixPath } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { FaLocationArrow, FaRegFilePdf } from "react-icons/fa";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("rafael.silva.santos.dev@gmail.com");
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/10 group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={prefixPath(img)}
              alt={img}
              fill
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"}`}>
          {spareImg && (
            <Image
              src={prefixPath(spareImg)}
              alt={spareImg}
              fill
              className="object-cover object-center"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className={cn(
            "font-sans font-extralight md:text-xs lg:text-base text-white-200 z-10",
            id === 5 ? "md:max-w-full" : "md:max-w-32"
          )}>
            {description}
          </div>
          <div className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}>
            {title}
          </div>

          {id === 1 && (
            <div className="flex mt-10 justify-center">
              <a
                href="https://drive.google.com/file/d/1AM3kHfvH-H36bnYdBu-a-lx7Xs1pOhn4/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="Ver Currículo"
                  icon={<FaRegFilePdf />}
                  position="right"
                  otherClasses="!bg-[#161a31]"
                />
              </a>
            </div>
          )}

          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-3 w-fit absolute -right-2 lg:-right-2 top-0 pr-5 pt-0.5 sm:pt-1 lg:pt-1.5">
              <div className="flex flex-col gap-2 lg:gap-3">
                {['React.js', 'Next.js', 'TypeScript'].map((item) => (
                  <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
                <span className="pt-6 pb-3 px-4 rounded-lg text-center bg-[#10132e]" />
              </div>
              <div className="flex flex-col gap-2 lg:gap-3">
                <span className="pt-6 pb-3 px-4 rounded-lg text-center bg-[#10132e]" />
                {['JavaScript', 'AWS', 'MongoDB'].map((item) => (
                  <span key={item} className="py-2 lg:py-2 lg:px-3 px-3 text-xs lg:text-sm opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 5 && (
            <div className="mt-5 relative">
              <a
                href="https://github.com/Rafaasj07/Categorizar-Documentos-AI.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagicButton
                  title="Saiba mais"
                  icon={<FaLocationArrow />}
                  position="right"
                  otherClasses="!bg-[#161a31]"
                />
              </a>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "E-mail copiado!" : "Copiar meu e-mail"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161a31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};