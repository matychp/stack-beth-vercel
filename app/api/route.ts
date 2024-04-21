export const dynamic = "auto"; // defaults to auto
export async function GET(request: Request) {
  return Response.json({
    hello: "world",
  });
}
