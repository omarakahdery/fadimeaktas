import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const userId = (await cookies()).get("token")
  if (!!userId) {
    redirect("/")
  }
  return (
    <main className="page-wrapper">
      {children}
    </main>
  );
}