"use client";

import { useState } from "react";
import MainBg from "@/components/MainBg";
import MainBgMob from "@/components/MainBgMob";
import Header from "@/components/Header";
import Boxes from "@/components/Boxes";
import { useMediaQuery } from "@/utils/useMediaQuery";
import Footer from "@/components/Footer";
import Services from "@/components/Services";

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
            <Services lang={lang} />
            <Footer lang={lang} setLang={setLang} />
        </>
    );
}
