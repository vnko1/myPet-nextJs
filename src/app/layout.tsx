import type { Metadata } from "next";

import { manrope, inter, poppins } from "@/fonts";
import { Header } from "@/app/_components";
import "../styles/globals.scss";
import { isAuth } from "@/lib/database";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "My Pet App",
  description: "My Pet app - applications about pets",
};

// export const revalidate = 60 * 30;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await isAuth();

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        <Header user={JSON.parse(JSON.stringify(user))} />
        {children}
      </body>
    </html>
  );
}
