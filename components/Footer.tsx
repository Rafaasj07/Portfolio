import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";
import { prefixPath } from "@/lib/utils";

const Footer = () => {
    return (
        <footer className="w-full relative pt-10 md:pt-20 pb-5" id="contato">
            <div className="w-full absolute left-0 bottom-0 min-h-96">
                <Image
                    src={prefixPath("/footer-grid.svg")}
                    alt="grid"
                    fill
                    className="opacity-50 object-cover"
                />
            </div>

            <div className="flex flex-col items-center px-4 relative z-10">
                <h1 className="heading lg:max-w-[45vw] text-center text-[30px] md:text-5xl lg:text-6xl leading-tight">
                    Tem um projeto em mente? <span className="text-purple">Vamos desenvolvê-lo.</span>
                </h1>
                <p className="text-white-200 md:mt-10 mt-5 mb-8 text-center text-sm md:text-base lg:text-lg max-w-[90%] md:max-w-xl">
                    Disponível para projetos, freelas e parcerias em desenvolvimento web.
                </p>
                <a href="mailto:rafael.s.januario@gmail.com">
                    <MagicButton
                        title="Entrar em contato"
                        icon={<FaLocationArrow />}
                        position="right"
                    />
                </a>
            </div>

            <div className="flex mt-10 md:mt-16 md:flex-row flex-col justify-between items-center gap-y-6 px-6 md:px-10 relative z-10">
                <p className="md:text-base text-xs md:font-normal font-light">
                    Copyright © 2026 Rafael Augusto
                </p>

                <div className="flex items-center md:gap-3 gap-4">
                    {socialMedia.map((info) => (
                        <a
                            key={info.id}
                            href={info.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300 transition hover:scale-105"
                        >
                            <Image src={prefixPath(info.img)} alt="social icon" width={20} height={20} />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;