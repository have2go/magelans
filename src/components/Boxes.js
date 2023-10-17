import { useState } from "react";

export default function Boxes({ lang }) {
    const [isHovered, setIsHovered] = useState(false);
    const [text, setText] = useState(0);

    const showText = (e) => {
        setIsHovered(true);
        if (e.target.id === "1") {
            setText(1);
        } else if (e.target.id === "2") {
            setText(2);
        } else if (e.target.id === "3") {
            setText(3);
        }
    };

    const hideText = () => {
        setIsHovered(false);
    };

    return (
        <section className="flex flex-col justify-center items-center w-full pt-28 md:py-12 pb-40 bg-[#F5F5F5]">
            {lang === "en" && (
                <h2 className="text-[34px] font-medium pb-14 md:text-2xl">
                    International shipping:
                </h2>
            )}
            {lang === "tur" && (
                <h2 className="text-[34px] font-medium pb-14 md:text-2xl">
                    Uluslararası nakliye:
                </h2>
            )}
            <div className="flex md:flex-col lg:gap-6 justify-between items-center gap-12 w-4/5 max-w-7xl lg:w-[85%] transition-all duration-1000">
                <div className="flex flex-col justify-center items-center">
                    <div
                        onMouseEnter={showText}
                        onMouseLeave={hideText}
                        id="1"
                        className="hexagon w-52 h-64 xl:w-44 xl:h-56 xl:mb-1 lg:w-36 lg:h-44 md:w-28 md:h-36 bg-hexagon-empty bg-contain bg-center bg-no-repeat hover:bg-hexagon-full hover:z-50"
                    ></div>
                    <div className="flex mt-[-77px] lg:mt-[-57px] md:mt-[-52px]">
                        <div
                            onMouseEnter={showText}
                            onMouseLeave={hideText}
                            id="2"
                            className="hexagon w-52 h-64 xl:w-44 xl:h-56 lg:w-36 lg:h-44 md:w-28 md:h-36 bg-hexagon-empty bg-contain bg-center bg-no-repeat hover:bg-hexagon-full hover:z-50"
                        ></div>
                        <div
                            onMouseEnter={showText}
                            onMouseLeave={hideText}
                            id="3"
                            className="hexagon w-52 h-64 xl:w-44 xl:h-56 lg:w-36 lg:h-44 md:w-28 md:h-36 bg-hexagon-empty bg-contain bg-center bg-no-repeat ml-[-1px] hover:bg-hexagon-full hover:z-50"
                        ></div>
                    </div>
                </div>
                <div className="bg-arrow-right-orange w-[86px] h-[86px] lg:w-16 bg-contain bg-center bg-no-repeat md:rotate-90"></div>
                <div className="max-w-[540px] 1.5xl:max-w-md xl:max-w-[350px] lg:max-w-[300px] md:max-w-none sm:min-h-[260px] md:min-h-[240px]">
                    {!isHovered &&
                        (lang === "en" ? (
                            <>
                                <p className="font-bold text-3xl xl:text-2xl lg:text-xl w-full md:w-3/4 md:mx-auto sm:w-full  mb-4 sm:mb-2">
                                    Turkish company Magelans specialises in
                                    international shipping.
                                </p>
                                <p className="font-medium text-3xl xl:text-2xl lg:text-xl w-full md:w-3/4 sm:w-full md:mx-auto">
                                    Import/export/transit as well as full
                                    support for all administrative and
                                    bureaucratic steps involved in bringing in
                                    and taking out items.
                                </p>
                            </>
                        ) : (
                            <>
                                <p className="font-bold text-3xl xl:text-2xl lg:text-xl w-full md:w-3/4 md:mx-auto sm:w-full  mb-4 sm:mb-2">
                                    Türk şirketi Magelans uluslararası nakliye
                                    konusunda uzmanlaşmıştır.
                                </p>
                                <p className="font-medium text-3xl xl:text-2xl lg:text-xl w-full md:w-3/4 md:mx-auto sm:w-full">
                                    İthalat/ihracat/transitin yanı sıra
                                    eşyaların getirilmesi ve çıkarılmasıyla
                                    ilgili tüm idari ve bürokratik adımlar için
                                    tam destek.
                                </p>
                            </>
                        ))}
                    {isHovered &&
                        text === 1 &&
                        (lang === "en" ? (
                            <div className="flex flex-col gap-5 md:gap-3">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    IMPORT
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    We assist our clients in the delivery of
                                    goods and materials from other countries.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    İÇE AKTARMAK
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    Müşterilerimize malların tesliminde yardımcı
                                    oluyoruz ve diğer ülkelerden malzemeler.
                                </p>
                            </div>
                        ))}
                    {isHovered &&
                        text === 2 &&
                        (lang === "en" ? (
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    EXPORT
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    We assist clients in delivering their goods
                                    and services to international markets.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    İHRACAT
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    Müşterilere mallarını teslim etmede yardımcı
                                    oluyoruz ve uluslararası pazarlara
                                    hizmetler.
                                </p>
                            </div>
                        ))}
                    {isHovered &&
                        text === 3 &&
                        (lang === "en" ? (
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    TRANSIT
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    We offer services for the transportation of
                                    goods through the territory of a third
                                    country without its storage or use in that
                                    country.
                                </p>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-5">
                                <p className="font-bold text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    TAŞIMA
                                </p>
                                <p className="font-medium text-4xl xl:text-3xl lg:text-2xl w-full md:text-xl md:mx-auto">
                                    Malların taşınması için hizmetler sunuyoruz
                                    olmadan üçüncü bir ülkenin toprakları
                                    üzerinden bu ülkede depolama veya kullanım.
                                </p>
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
}
