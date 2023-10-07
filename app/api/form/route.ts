import { formSchema } from '@/model/formShema';

export const POST = async (request: Request) => {
  const rawData = await request.json();

  const parsedData = formSchema.safeParse(rawData);
  if (parsedData.success === false) {
    console.log('FAIL');
    return Response.json({ status: 'Błąd w formularzu' });
  }
  console.log(parsedData);
  return Response.json({ status: 'Wszystko gra' });
};
