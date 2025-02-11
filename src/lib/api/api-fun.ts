export async function getData<T>(
  url: string,
  option?: Record<string, string>
): Promise<T | undefined> {
  let endOption: Record<string, string> | undefined = { cache: 'no-store' }
  if (endOption) {
    endOption = option
  }
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api${url}`
  try {
    const res = await fetch(endpoint,
      endOption
    );
    console.log(res, "res");
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return undefined
  }
}