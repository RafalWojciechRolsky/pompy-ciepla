import { formSchema } from '@/model/formShema';

export const POST = async (request: Request) => {
  const rawData = await request.json();

  const parsedData = formSchema.parse(rawData);
  console.log(parsedData);

  return Response.json({});
};
