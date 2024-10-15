import type { Metadata } from "next";
import localFont from "next/font/local";
import "@/styles/globals.css";

const geistSans = localFont({
  src: "./../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = localFont({
  src: "./../assets/fonts/Inter-Regular.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-inter",
});

const interLight = localFont({
  src: "./../assets/fonts/Inter-Light.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-interLight",
});

const pretendard = localFont({
  src: "./../assets/fonts/Pretendard-Medium.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});

const pretendardLight = localFont({
  src: "./../assets/fonts/Pretendard-Light.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendardSemibold",
});

const pretendardSemibold = localFont({
  src: "./../assets/fonts/Pretendard-SemiBold.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendardSemibold",
});

const pretendardExtrabold = localFont({
  src: "./../assets/fonts/Pretendard-ExtraBold.otf",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendardExtrabold",
});

const outfit = localFont({
  src: "./../assets/fonts/Outfit-Medium.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-outfit",
});

const outfitLight = localFont({
  src: "./../assets/fonts/Outfit-Light.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-outfitLight",
});

const outfitSemibold = localFont({
  src: "./../assets/fonts/Outfit-SemiBold.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-outfitSemibold",
});

const outfitExtrabold = localFont({
  src: "./../assets/fonts/Outfit-ExtraBold.ttf",
  display: "swap",
  weight: "45 920",
  variable: "--font-outfitExtrabold",
});

export const metadata: Metadata = {
  title: "AhnLab Blockchain Company(ABC)",
  description: "Stay Secure, Explore Freely",
  openGraph: {
    images: [
      {
        url: "@/assets/images/SEO.png",
        alt: "AhnLab Blockchain Company Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${inter.variable}
          ${interLight.variable}
          ${pretendard.variable} 
          ${pretendardLight.variable} 
          ${pretendardSemibold.variable}
          ${pretendardExtrabold.variable}
          ${outfit.variable}
          ${outfitLight.variable} 
          ${outfitSemibold.variable} 
          ${outfitExtrabold.variable} 
           antialiased bg-[#211837]`}
      >
        {children}
      </body>
    </html>
  );
}
