import React from "react";
import { IUser } from "@/types/IUser";
import { stringHaveCharacter } from "@/lib/helper/string-have-character";

export function BillingAddressData({ data }: { data?: IUser["billing"] }) {
  return <>
    <ul className="list-unstyled fs-sm m-0">
      <li>
        {data && (stringHaveCharacter(data.first_name) || stringHaveCharacter(data.last_name)) ? (
          `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim()
        ) : (
          <p className={"text-danger"}>Ad ve soyad bilgisi eksik</p>
        )}
      </li>
      <li>
        {stringHaveCharacter(data?.state) || stringHaveCharacter(data?.city) ? (
          `${data?.state ?? ""}${data?.state ? ", " : ""}${data?.city ?? ""}`
        ) : (
          <p className="text-danger">İl ve ilçe bilgisi eksik</p>
        )}
      </li>
      <li>
        {stringHaveCharacter(data?.address_1) ? (
          data?.address_1
        ) : (
          <p className="text-danger">Adres bilgisi eksik</p>
        )}
      </li>
      <li>
        {stringHaveCharacter(data?.email) ? (
          data?.email
        ) : (
          <p className="text-danger">E-posta adresi eksik</p>
        )}
      </li>
      <li>
        {stringHaveCharacter(data?.phone) ? (
          data?.phone
        ) : (
          <p className="text-danger">Telefon eksik</p>
        )}
      </li>
    </ul>
  </>;
}
