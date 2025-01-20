import { RemoveOverflow } from "@/components/remove-overflow";
import { Navbar } from "@/components/navbar";

export default function Loading() {
  return (
    <main className="page-wrapper">
      <Navbar/>
      <RemoveOverflow/>
      <div style={{ height: "90vh" }} className="d-flex justify-content-center align-items-center">
        <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </main>
  )
}
