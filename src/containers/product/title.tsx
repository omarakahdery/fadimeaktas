import Link from "next/link";
import { getData } from "@/lib/api/api-fun";
import { IProduct } from "@/types/IProduct";

export async function ProductTitle({ id }: { id: string }) {
  const data = await getData<IProduct>(`/products/${id}`);
  return <>
    <nav className="container pt-2 pt-xxl-3 my-3 my-md-4" aria-label="breadcrumb">
      <ol className="breadcrumb text-dark fs-xs">
        <li className="breadcrumb-item"><Link href="/">Ana Sayfa</Link></li>
        <li className="breadcrumb-item"><Link href={`/${data?.categories[0].slug}/${data?.categories[0].id}`}>{data?.categories[0].name}</Link>
        </li>
        {/*<li className="breadcrumb-item active" aria-current="page">Ürün Sayfası</li>*/}
      </ol>
    </nav>
  </>
}