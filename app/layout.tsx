import "./globals.scss";
import { Inter } from "next/font/google";
import NavBar from "@components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Eco-Track",
  description: "Towards a sustainable future",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body className={inter.className}>
        <div className="max-w-[1440px] flex flex-col m-auto">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
