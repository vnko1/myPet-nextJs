import type { Metadata } from "next";
import { cookies } from "next/headers";

import { manrope, inter, poppins } from "@/fonts";
import { Header } from "@/app/_components";

import { authenticate } from "@/auth";
import "../styles/globals.scss";

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
  const token = cookies().get("token");

  const user = token && (await authenticate(token.name, token.value));

  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${inter.variable} ${poppins.variable}`}
      >
        <Header user={JSON.parse(JSON.stringify(user || ""))} />
        {children}
      </body>
    </html>
  );
}
