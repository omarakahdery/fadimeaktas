"use client";
function onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
  console.log(event.target.value);
}

export function Filter() {
  return (
    <>
      <div className="d-flex align-items-center justify-content-end w-100 text-nowrap">
        <label className="form-label fw-semibold mb-0 me-2">Sıralama:</label>
        <div style={{ "width": "190px" }}>
          <select
            onChange={onCategoryChange}
            defaultValue="44"
            className="form-select border-0 rounded-0 px-1" data-select="{
                    &quot;removeItemButton&quot;: false,
                    &quot;classNames&quot;: {
                      &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;border-0&quot;, &quot;rounded-0&quot;, &quot;px-1&quot;]
                    }
                  }">
            <option value="44">En Popüler</option>
            <option value="1">Fiyat: Düşükten Yükseğe</option>
            <option value="2">Fiyat: Yüksekten Düşüğe</option>
            <option value="3">En Yeni Gelenler</option>
          </select>
        </div>
      </div>
    </>
  );
}