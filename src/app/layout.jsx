import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "./reusable-components/AppHeader";
import AppFooter from "./reusable-components/AppFooter";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "We Code",
  description: "Amp up your designs with our free tailor-made components and build better, faster.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <div className="app flex flex-col w-full flex-1 bg-white text-blue-800">
          <AppHeader/>
          <div className="app-body flex-1">
            {children}
          </div>
          <AppFooter/>
        </div>
      </div>
      </body>
    </html>
  );
}
