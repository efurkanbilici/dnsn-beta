import "./globals.css";
import Header from "@/components/header";
import { Raleway } from "next/font/google";

export const metadata = {
  title: "DNSN - Ücretsiz ürün denemenin en keyifli yolu.",
};

const font = Raleway({
  subsets: ["latin-ext"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
