export async function get(url:string) {
    const response = await fetch(url)
    if (!response.ok)
    {
        throw new Error("failed to get data!");
    }
    const data = await response.json() as unknown;
    return data
}