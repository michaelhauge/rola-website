import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROLA International | Clinical Veterinary MedTech",
  description:
    "Purpose-built veterinary medical devices engineered to clinical standards. ROLA designs reliable devices that help clinics deliver safer, more efficient care.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
