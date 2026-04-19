async function generateTemplate(prompt) {
  const res = await fetch("http://127.0.0.1:8000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: prompt }),
  });

  const data = await res.json();
  return data.type;
}

export async function POST(request) {
  try {
    const { prompt } = await request.json();

    if (!prompt) {
      return Response.json(
        { error: "Prompt is required" },
        { status: 400 }
      );
    }

    const templateType = await generateTemplate(prompt);

    return Response.json({
      success: true,
      templateType,
    });
  } catch (error) {
    console.error("Error generating template:", error);
    return Response.json(
      { error: "Failed to generate template" },
      { status: 500 }
    );
  }
}