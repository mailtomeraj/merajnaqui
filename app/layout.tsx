import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Meraj Naqui — Accessibility is a feature, not a favour",
  description: "Frontend UI developer and DHS Trusted Tester certified web accessibility professional."
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
