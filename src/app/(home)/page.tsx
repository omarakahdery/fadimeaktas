import { Home } from "@/containers/home";
import { getCategoriesAsList } from "@/lib/api/get-data-wc";

export default async function HomePage() {
  const categories = await getCategoriesAsList();
  return (
    <>
      <Home footerData={categories}  />
    </>
  );
}
