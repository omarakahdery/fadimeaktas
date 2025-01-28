export async function getData<T>(url: string, baseUrl?: string): Promise<T | undefined> {
  const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/api${url}`
  try {
    const res = await fetch(endpoint,
      { cache: 'no-store' }
    );
    if (!res.ok) {
      throw new Error('Failed to fetch products');
    }
    return res.json()
  } catch (error) {
    console.error('Fetch error:', error)
    return undefined
  }
}