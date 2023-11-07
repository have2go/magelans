import services_en from "@/data/services_en.json";
import services_tur from "@/data/services_tur.json";

export default function Services({ lang }) {
    const handleClick = (e) => {
        e.target.parentElement.nextSibling.classList.toggle("hidden");
        e.target.parentElement.nextSibling.firstChild.classList.toggle(
            "opacity-100"
        );

        if (e.target.classList.contains("bg-arrow-right-orange")) {
            e.target.classList.toggle("rotate-90");
        } else {
            e.target.previousSibling.classList.toggle("rotate-90");
        }
    };

    return (
        <section className="justify-center items-center w-full pt-28 lg:pb-12 lg:pt-0 pb-40 bg-[#F5F5F5]">
            <div className="px-20 md:px-6 sm:px-2">
                {lang === "en" && (
                    <h2 className="text-5xl lg:text-4xl sm:text-3xl font-medium">
                        Custom procedures
                    </h2>
                )}
                {lang === "tur" && (
                    <h2 className="text-5xl lg:text-4xl sm:text-3xl font-medium">
                        Gümrük prosedürleri
                    </h2>
                )}
                <div className="mx-auto w-full pt-10 sm:pt-0">
                    {lang === "en" &&
                        services_en.map((service, i) => {
                            return (
                                <div
                                    className="w-3/4 md:w-11/12 mx-auto my-10"
                                    key={i}
                                >
                                    <div className="flex w-3/4 2xl:w-full mx-auto items-center gap-6">
                                        <div
                                            className="bg-arrow-right-orange h-12 w-12 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-4 sm:w-4 bg-center bg-contain bg-no-repeat transition-all cursor-pointer"
                                            onClick={(e) => {
                                                handleClick(e);
                                            }}
                                        ></div>
                                        <p
                                            className="text-4xl 1.5xl:text-3xl lg:text-2xl md:text-xl sm:text-lg cursor-pointer"
                                            onClick={(e) => {
                                                handleClick(e);
                                            }}
                                        >
                                            {service.text}
                                        </p>
                                    </div>
                                    <div className="mt-8 hidden transition-all duration-1000">
                                        <p className="text-3xl 1.5xl:text-2xl lg:text-xl md:text-lg sm:text-base opacity-0 ">
                                            {service.info}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    {lang === "tur" &&
                        services_tur.map((service, i) => {
                            return (
                                <div
                                    className="w-3/4 md:w-11/12 mx-auto my-10"
                                    key={i}
                                >
                                    <div className="flex w-3/4 2xl:w-full mx-auto items-center gap-6">
                                        <div
                                            className="bg-arrow-right-orange h-12 w-12 lg:h-8 lg:w-8 md:h-6 md:w-6 sm:h-4 sm:w-4 bg-center bg-contain bg-no-repeat transition-all cursor-pointer"
                                            onClick={(e) => {
                                                handleClick(e);
                                            }}
                                        ></div>
                                        <p
                                            className="text-4xl 1.5xl:text-3xl lg:text-2xl md:text-xl sm:text-lg cursor-pointer"
                                            onClick={(e) => {
                                                handleClick(e);
                                            }}
                                        >
                                            {service.text}
                                        </p>
                                    </div>
                                    <div className="mt-8 hidden transition-all duration-1000">
                                        <p className="text-3xl 1.5xl:text-2xl lg:text-xl md:text-lg sm:text-base opacity-0 ">
                                            {service.info}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
