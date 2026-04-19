export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const perPage = searchParams.get("perPage") || 8;

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=website%20ui&per_page=${perPage}&page=${page}`,
    {
      headers: {
        Authorization: `Client-ID ${process.env.UNSPLASH_ACCESS_KEY}`,
      },
    }
  );

  if (!res.ok) {
    return Response.json(
      { error: "Failed to fetch from Unsplash" },
      { status: res.status }
    );
  }

  const data = await res.json();

  const templates = data.results.map((img) => ({
    id: img.id,
    title: "UI Design",
    image_url: img.urls.regular,
    demo_url: img.links.html,
  }));

  return Response.json(templates);
}
