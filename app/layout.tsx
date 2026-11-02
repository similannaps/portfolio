import type { Metadata } from "next";
import "./globals.css"; // <<-- บรรทัดนี้สำคัญมากสำหรับการดึง Tailwind CSS มาใช้

export const metadata: Metadata = {
  title: "Similanna Palmieri Schvaigert — AI Portfolio",
  description: "AI & System Engineering Student Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#070114] text-slate-100">
        {children}
      </body>
    </html>
  );
}