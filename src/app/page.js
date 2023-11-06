"use client";

import { useState } from "react";
import MainBg from "@/components/MainBg";
import MainBgMob from "@/components/MainBgMob";
import Header from "@/components/Header";
import Boxes from "@/components/Boxes";
import { useMediaQuery } from "@/utils/useMediaQuery";

export default function Home() {
    const [lang, setLang] = useState("en");
    const isBreakpoint = useMediaQuery(768);

    return (
        <>
            <main className="min-h-screen w-full grid grid-rows-[112px_1fr] md:min-h-0 md:grid-rows-[80px_1fr]">
                <Header lang={lang} setLang={setLang} />
                <div className="w-full h-full relative md:h-fit">
                    {isBreakpoint ? (
                        <MainBgMob lang={lang} />
                    ) : (
                        <MainBg lang={lang} />
                    )}
                    <div className="grid grid-rows-2 h-full md:hidden">
                        <div className="flex items-center justify-center h-full w-full">
                            <div className="bg-logo-white w-[78%] h-full z-10 bg-no-repeat bg-contain bg-center"></div>
                        </div>
                    </div>
                </div>
            </main>
            <Boxes lang={lang} />
            <footer className="h-28 w-full flex items-center justify-center bg-white md:h-20 border-t-[2px] border-black">
                <div className="flex gap-[70px] xl:gap-12 lg:gap-8 px-16 md:px-6 sm:px-2 w-full">
                    {/* <div className="bg-burger-icon bg-no-repeat bg-contain bg-center h-[26px] min-w-[26px]"></div> */}
                    <div className="flex w-full justify-between items-center gap-3">
                        <div className="bg-logo-orange bg-no-repeat bg-contain bg-center h-[26px] min-w-[168px]"></div>
                        <div className="flex flex-col gap-2">
                            <p className="text-black text-xl font-medium whitespace-nowrap xl:text-xl lg:text-lg md:hidden">
                                info@magellans.com.tr
                            </p>
                            <p className="text-black text-xl font-medium whitespace-nowrap xl:text-xl lg:text-lg md:hidden">
                                +90 242 152 5700
                            </p>
                        </div>
                    </div>
                    {/* <div className="bg-whatsapp-icon bg-no-repeat bg-contain bg-center h-[26px] min-w-[26px]"></div> */}
                    <div className="flex items-center">
                        <p
                            className={`text-black text-2xl font-medium cursor-pointer xl:text-xl lg:text-lg ${
                                lang === "en" && "underline"
                            }`}
                            onClick={() => {
                                if (lang !== "en") {
                                    setLang("en");
                                }
                            }}>
                            EN
                        </p>
                        <p className="text-black text-2xl font-medium cursor-pointer xl:text-xl lg:text-lg">
                            /
                        </p>
                        <p
                            className={`text-black text-2xl font-medium cursor-pointer xl:text-xl lg:text-lg ${
                                lang === "tur" && "underline"
                            }`}
                            onClick={() => {
                                if (lang !== "tur") {
                                    setLang("tur");
                                }
                            }}>
                            TUR
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
