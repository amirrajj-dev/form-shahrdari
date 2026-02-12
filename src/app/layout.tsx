import type { Metadata } from "next";
import "./globals.css";
import { bnazanin, nazanin } from "./fonts";

export const metadata: Metadata = {
  title: "سیستم گزارش‌گیری تخلفات ساختمانی",
  description: "فرم بازدید و ارزیابی ایمنی کارگاه‌های ساختمانی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" data-theme="dark">
      <body
        lang="fa" className={`antialiased ${nazanin.variable} ${bnazanin.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
