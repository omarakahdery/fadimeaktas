import { RemoveOverflow } from "@/components/remove-overflow";
import { Navbar } from "@/components/navbar";
import { LoadingSpinner } from "@/components/loading-spinner";

export default function Loading() {
  return (
    <main className="page-wrapper">
      <Navbar/>
      <RemoveOverflow/>
      <LoadingSpinner/>
    </main>
  )
}
