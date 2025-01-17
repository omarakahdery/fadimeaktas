export default function AuthLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="page-wrapper">
      {children}
    </main>
  );
}