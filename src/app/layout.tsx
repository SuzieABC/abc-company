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

/* TODO */
export const metadata: Metadata = {
  title: "AhnLab Blockchain Company(ABC)",
  description: "Stay Secure, Explore Freely",
  openGraph: {
    images: [
      {
        url: "@/assets/images/SEO.png", // 이미지 URL
        alt: "AhnLab Blockchain Company Logo", // 이미지 설명
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#211837]`}
      >
        {children}
      </body>
    </html>
  );
}
