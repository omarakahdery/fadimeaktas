import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Bilgi'+ " | Fadime Aktaş",
  description: 'Bilgi sayfası' + " | Fadime Aktaş",
}
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ marginTop: "80px" }} className="content-wrapper">
      {children}
    </main>
  );
}