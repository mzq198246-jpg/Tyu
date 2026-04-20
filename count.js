export async function onRequestGet({ env }) {
  try {
    const count = await env.USER_COUNT.get("total") || "0";
    return new Response(JSON.stringify({ count: Number(count) }), {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    });
  } catch (e) {
    return new Response(JSON.stringify({ count: 0, error: e.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
}