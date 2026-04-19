export async function getUnsplashTemplates(page = 1, perPage = 8) {
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=website%20ui&per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
      cache: "no-store", // always fresh
    }
  );

  const data = await res.json();

  return data.results.map((img) => ({
    id: img.id,
    title: "UI Design",
    image_url: img.urls.regular,
    demo_url: img.links.html,
  }));
}