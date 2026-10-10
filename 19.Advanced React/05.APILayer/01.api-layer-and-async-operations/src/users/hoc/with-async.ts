export async function withAsync<T>(
  fn: () => Promise<{ data: T }>,
) {
  try {
    if (typeof fn !== "function") {
      throw new Error(
        "withAsync expects a function as an argument",
      );
    }
    const { data } = await fn();
    return { response: data, error: null };
  } catch (error) {
    return { response: null, error };
  }
}
