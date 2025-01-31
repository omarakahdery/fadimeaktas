"use client";
import { formatCurrency } from "@/lib/helper/format-currency";

export function Amount({ label, value }: { label: string, value?: number }) {
  return (
    <div className="d-flex align-items-center justify-content-between w-100 mt-4 mb-3">
      <span className="fs-sm">{label}</span>
      <span className="mb-0">
        {formatCurrency(Number(value))}
        </span>
    </div>

  )
}
