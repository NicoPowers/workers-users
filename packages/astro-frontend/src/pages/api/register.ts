import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({request}) =>
{  
  console.log("Form Data")
  const formData = await request.formData();
  console.log(formData.get("name"))
  console.log(formData.get("email"))
  // console.log(request)
  return new Response("Hello World")
}