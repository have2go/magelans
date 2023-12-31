import "./globals.css";
import { Inter } from "next/font/google";
// import {NextIntlClientProvider, useLocale} from 'next-intl';
// import {notFound} from 'next/navigation';

// export function generateStaticParams() {
//   return [{locale: 'en'}, {locale: 'tur'}];
// }

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Magelans",
    description: "",
};

export default function RootLayout({ children }) {
    // const locale = useLocale();

    // let messages;
    // try {
    //   messages = (await import(`../../messages/${locale}.json`)).default;
    // } catch (error) {
    //   notFound();
    // }

    return (
        <html lang="en">
            <body className={inter.className}>{children}</body>
        </html>
    );
}
