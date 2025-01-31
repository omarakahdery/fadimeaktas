import Link from "next/link";
import { getData } from "@/lib/api/api-fun";
import { IUser } from "@/types/IUser";

type CollectionsProps = {
  params: {
    id: string,
    category: string
  }
}

interface ICategory {
  id: number,
  name: string,
  slug: string,
  parent: number,
  description: string,
}

export async function CollectionTitle({ params }: CollectionsProps) {
  const data = await getData<ICategory>(`/categories/${params.id}`);
  return (
    <>
      <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
        <ol className="breadcrumb text-dark fs-xs">
          <li className="breadcrumb-item"><Link href="/gelinlik-frontend/public">Ana Sayfa</Link></li>
          <li className="breadcrumb-item" aria-current="page">{data?.name}</li>
        </ol>
      </nav>
      <h1 className="h3 container pb-3 pb-lg-4">{data?.name}</h1>
    </>
  );
}