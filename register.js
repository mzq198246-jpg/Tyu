export async function onRequestPost({ env }) {
  try {
    const current = await env.USER_COUNT.get("total") || "0";
    const newCount = Number(current) + 1;
    await env.USER_COUNT.put("total", newCount.toString());
    return new Response(JSON.stringify({ count: newCount }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}