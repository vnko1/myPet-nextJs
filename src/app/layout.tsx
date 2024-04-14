import type { Metadata } from "next";

import { manrope, inter, poppins } from "@/fonts";
import { Header } from "@/app/_components";

import "../styles/globals.scss";

import { userIsAuthenticated } from "@/auth";
import { JSONParser } from "@/utils";

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
  title: "My Pet App",
  description: "My Pet app - applications about pets",
};

// export const revalidate = 1800;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = (await userIsAuthenticated()) || null;

  const user = JSONParser(data);

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        <Header user={user} />
        {children}
      </body>
    </html>
  );
}
