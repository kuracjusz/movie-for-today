export const GET = async (url: string, properties?: RequestInit) => {
  return await (
    await fetch(url, {
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
      ...properties,
    })
  ).json();
};
