import AddressUnit from "@/containers/user/address/address-unit";

export default function AddressesPage() {
  return (
    <>
      <h1 className="h2 mb-1 mb-sm-2">Adreslerim</h1>
      <AddressUnit collapseName={"Address-1"} title={"Ev adresim"} />
      <AddressUnit collapseName={"Address-2"} title={"işyeri adresim"} />
    </>
  )
}