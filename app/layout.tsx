import { Cormorant_Garamond, Poppins, Playfair_Display } from "next/font/google";
import SmoothScroll from "@/components/shared/SmoothScroll/SmoothScroll";
import { ClientShell, Footer } from "@/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${poppins.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <SmoothScroll>
          <ClientShell />
          {children}
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}