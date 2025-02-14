import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { getData } from "@/lib/api/api-fun";
import { RemoveOverflow } from "@/components/remove-overflow";
import { getCategoriesAsList } from "@/lib/api/get-data-wc";


export default async function CartLayout({
                                           children,
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const categories = await getCategoriesAsList();
  return (
    <main className="page-wrapper">
      <RemoveOverflow/>
      <Navbar/>
      {children}
      <Footer categories={categories}/>
    </main>
  );
}
