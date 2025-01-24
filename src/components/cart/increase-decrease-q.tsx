import { useState } from "react";

export function IncreaseDecreaseQ({ item_key, quantity }: { item_key: string, quantity: number }) {
  const [ q, setQ ] = useState(quantity || 1);
  return <>
    <div className="count-input rounded-2">
      <button
        type="button"
        className="btn btn-icon btn-sm"
        aria-label="Decrement quantity"
        onClick={() => {
          setQ(q - 1);
          if (q - 1 < 1) {
            setQ(1);
          }
        }}
      >
        <i className="ci-minus"></i>
      </button>
      <input type="number" className="form-control form-control-sm" value={q}/>
      <button
        type="button"
        className="btn btn-icon btn-sm"
        data-increment=""
        onClick={() => {
          setQ(q + 1)
        }}
        aria-label="Increment quantity"
      >
        <i className="ci-plus"></i>
      </button>
    </div>
  </>
}