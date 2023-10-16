export default function MainBgMob({ lang }) {
    return (
        <div className="relative w-full h-fit grid grid-cols-4 grid-rows-6 bg-black gap-[1px] border-t-[5px] border-b-[5px] border-black">
            <div className="absolute top-0 left-0 flex items-start justify-center h-full w-full">
                <div className="bg-logo-white w-[78%] h-[66%] z-10 bg-no-repeat bg-contain bg-center"></div>
            </div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-greyCell mix-blend-difference z-20"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag relative">
                {lang === "en" && (
                    <p className="absolute right-0 bottom-0 text-white w-fit max-w-[50vh] text-4xl font-semibold pr-8  pb-4 whitespace-nowrap xl:text-3xl lg:text-2xl md:text-xl">
                        International shipping
                        <br />
                        and logistics services
                    </p>
                )}
                {lang === "tur" && (
                    <p className="absolute right-0 bottom-0 text-white w-fit max-w-[50vh] text-4xl font-semibold pr-8  pb-4 whitespace-nowrap xl:text-3xl lg:text-2xl md:text-xl">
                        Uluslararası nakliye
                        <br />
                        ve lojistik hizmetleri
                    </p>
                )}
            </div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
            <div className="bg-orangeMag aspect-square"></div>
        </div>
    );
}
