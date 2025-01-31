import { Input } from "@/components/input";
import { IUser } from "@/types/IUser";

export function FormFields({ formData, errors, handleChange, textarea }: {
  formData?: IUser["billing"],
  textarea?: React.ReactNode,
  errors: Record<string, string>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}) {
  return <>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"first_name"}
          type="text"
          label={"Ad"}
          value={formData?.first_name || ""}
          error={errors.first_name}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"last_name"}
          type="text"
          label={"Soyad"}
          value={formData?.last_name || ""}
          error={errors.last_name}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"state"}
          type="text"
          label={"İl"}
          value={formData?.state || ""}
          error={errors.state}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="col-sm-6">
      <div className="position-relative">
        <Input
          name={"city"}
          type="text"
          label={"İlçe"}
          value={formData?.city || ""}
          error={errors.city}
          onChange={handleChange}
        />
      </div>
    </div>
  </>
}