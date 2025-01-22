export function PersonalInfoTitle(){
  return(
    <>
      <div className="nav flex-nowrap align-items-center justify-content-between pb-1 mb-3">
        <h2 className="h6 mb-0">Kişisel bilgiler</h2>
        <a className="nav-link hiding-collapse-toggle text-decoration-underline p-0 collapsed" href=".basic-info"
           data-bs-toggle="collapse" aria-expanded="false" aria-controls="basicInfoPreview basicInfoEdit">Düzenle</a>
      </div>
    </>
  )
}