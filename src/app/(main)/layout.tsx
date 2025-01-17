import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getData } from "@/lib/api/api-fun";
import { RemoveOverflow } from "@/components/remove-overflow";


export default async function AppLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getData<ICategory[]>(`/products/categories`);
  return (
    <main className="page-wrapper">
      <RemoveOverflow/>
      <Navbar/>
      {children}
      <Footer categories={categories}/>
    </main>
  );
}

