export default function MainBg({ lang }) {
    return (
        <div className="absolute top-0 left-0 w-full h-full grid grid-cols-10 grid-rows-4 bg-black gap-[2px] border-t-[11px] border-b-[11px] border-black">
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-greyCell mix-blend-difference z-20"></div>
            <div className="bg-greyCell mix-blend-difference z-20"></div>
            <div className="bg-greyCell mix-blend-difference z-20"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag relative">
                {lang === "en" && (
                    <p className="absolute left-0 bottom-0 text-white w-fit max-w-[50vh] text-4xl font-semibold pl-4 pb-4 whitespace-nowrap xl:text-3xl lg:text-2xl md:text-xl">
                        International shipping
                        <br />
                        and logistics services
                    </p>
                )}
                {lang === "tur" && (
                    <p className="absolute left-0 bottom-0 text-white w-fit max-w-[50vh] text-4xl font-semibold pl-4 pb-4 whitespace-nowrap xl:text-3xl lg:text-2xl md:text-xl">
                        Uluslararası nakliye
                        <br />
                        ve lojistik hizmetleri
                    </p>
                )}
            </div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
            <div className="bg-orangeMag"></div>
        </div>
    );
}
