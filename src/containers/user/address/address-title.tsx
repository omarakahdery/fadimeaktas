export function AddressTitle({ title, collapseName }: { title: string, collapseName: string }) {
  return <>
    <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
      <div className="d-flex align-items-center gap-3 me-4">
        <h2 className="h6 mb-0">{title}</h2>
      </div>
      <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href={"." + collapseName}
         data-bs-toggle="collapse" aria-expanded="false"
         aria-controls="primaryAddressPreview primaryAddressEdit">Düzenle</a>
    </div>
  </>
}