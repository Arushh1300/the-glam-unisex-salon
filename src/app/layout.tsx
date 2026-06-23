import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Glam Unisex Salon | Premium Luxury Salon in Kanpur",
  description: "Experience premium luxury at The Glam Unisex Salon in Barra, Kanpur. Professional beauty, hair, makeup, and nail styling with a high-end salon experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white font-sans min-h-screen flex flex-col relative selection:bg-[#cba876]/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

