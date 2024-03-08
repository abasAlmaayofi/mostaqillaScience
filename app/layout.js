// import Head from "next/head";
import "./globals.css";
import { NextUIProviders } from "./providers/nextUIProvider";
import localFont from "@next/font/local";

// const inter = Inter({ subsets: ["latin"] });

const trika = localFont({
  src: [
    {
      path: "../public/fonts/Trika-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Trika-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-trika",
});

const ruwudu = localFont({
  src: [
    {
      path: "../public/fonts/Ruwudu-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Ruwudu-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Ruwudu-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Ruwudu-Regular.ttf",
      weight: "300",
    },
  ],
  variable: "--font-ruwudu",
});

export const metadata = {
  title: "القائمة المستقلة - كلية العلوم",
  description: "تقدم لكم القائمة المستقلة كل ما يخص الطلبة في كلية العلوم",
  openGraph: {
    images: "../public/thumbnail.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${trika.variable} ${ruwudu.variable} font-sans`}
    >
      {/* <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head> */}
      <body>
        <NextUIProviders>{children}</NextUIProviders>
      </body>
    </html>
  );
}
