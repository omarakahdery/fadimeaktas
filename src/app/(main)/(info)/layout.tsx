export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main style={{ marginTop: "80px" }} className="content-wrapper">
      {children}
    </main>
  );
}