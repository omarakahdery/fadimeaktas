import React from "react";

export function InfoBody({ title, body }: { title: string, body: React.ReactNode }) {
  return <>
    <p className={"fw-bold"}>
      {title}
    </p>
    <p>
      {body}
    </p>
  </>

}