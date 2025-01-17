import { Home } from "@/containers/home";
import { getData } from "@/lib/api/api-fun";

export default async function HomePage() {
  const categories = await getData<ICategory[]>(`/products/categories`);
  return (
    <>
      <Home footerData={categories}  />
    </>
  );
}
