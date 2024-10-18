import type { Metadata } from "next";
import {
  geistSans,
  geistMono,
  inter,
  interLight,
  pretendard,
  pretendardLight,
  pretendardSemibold,
  pretendardExtrabold,
  outfit,
  outfitLight,
  outfitSemibold,
  outfitExtrabold,
} from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "AhnLab Blockchain Company(ABC)",
  description: "Stay Secure, Explore Freely",
  openGraph: {
    images: [
      {
        url: "@/assets/images/seo.png",
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
