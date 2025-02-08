"use client";
import { ReadonlyURLSearchParams, usePathname, useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";


export function Filter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const restQuery = () => {
    const url = pathname + "?" + queryString.stringify({});
    router.push(url);
  };

  function onCategoryChange(event: React.ChangeEvent<HTMLSelectElement>) {
    console.log(event.target.value);
    if (event.target.value !== "no-filter") {
      router.push(queryChangeHandler({
        orderby: "price",
        order: event.target.value
      }, pathname, searchParams), {
        scroll: false,
      });
      return
    } else {
      restQuery();
    }
  }

  return (
    <>
      <div className="d-flex align-items-center justify-content-end w-100 text-nowrap">
        <label className="form-label fw-semibold mb-0 me-2">Sıralama:</label>
        <div style={{ "width": "200px" }}>
          <select
            onChange={onCategoryChange}
            defaultValue={"no-filter"}
            value={searchParams.get("order") || "no-filter"}
            className="form-select border-0 rounded-0 px-1" data-select="{
                    &quot;removeItemButton&quot;: false,
                    &quot;classNames&quot;: {
                      &quot;containerInner&quot;: [&quot;form-select&quot;, &quot;border-0&quot;, &quot;rounded-0&quot;, &quot;px-1&quot;]
                    }
                  }">
            <option value={"no-filter"}>Sıralama yok</option>
            <option value="asc">Fiyat: Düşükten Yükseğe</option>
            <option value="desc">Fiyat: Yüksekten Düşüğe</option>
          </select>
        </div>
      </div>
    </>
  );
}

export const queryChangeHandler = (
  query: Record<string, string | undefined>,
  pathname: string,
  searchParams: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const optionSearchParams = new URLSearchParams(searchParams.toString());
  if (Object.keys(query).length > 0) {
    for (const [ key, value ] of Object.entries(query)) {
      !!value
        ? optionSearchParams.set(key, value)
        : optionSearchParams.delete(key);
    }
    const optionUrl = createUrl(pathname, optionSearchParams);
    return optionUrl;
  }
  const optionUrl = createUrl(pathname, optionSearchParams);
  return optionUrl;
};
const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams,
) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? "?" : ""}${paramsString}`;

  return `${pathname}${queryString}`;
};