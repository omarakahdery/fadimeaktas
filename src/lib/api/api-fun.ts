export async function getData<T>(url: string): Promise<T | undefined> {
  try {
    const res = await fetch(`${process.env
      .NEXT_PUBLIC_API_URL}/api/${url}`);
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return undefined
  }
}