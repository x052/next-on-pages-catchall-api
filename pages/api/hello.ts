export const config = {
  runtime: "edge",
};

export default async function handler(req: any) {
  return new Response("hello", {
    status: 200,
    headers: {
      "Content-Type": "text/html",
    },
  });
}
