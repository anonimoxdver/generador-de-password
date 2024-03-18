import type { Metadata } from "next";
import { PrimeReactProvider } from 'primereact/api';
import { Inter } from "next/font/google";
import "./globals.css";
import 'primereact/resources/themes/saga-blue/theme.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primereact/resources/primereact.min.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Generador de password",
  description: "Genera tu contraseña",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PrimeReactProvider >
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
