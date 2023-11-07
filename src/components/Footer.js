export default function Footer({ lang, setLang }) {
    return (
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
                        }}
                    >
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
                        }}
                    >
                        TUR
                    </p>
                </div>
            </div>
        </footer>
    );
}
