import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2).max(40),
  email: z.string().email().min(6).max(40),
  phone: z.string().refine(
    (value) => {
      const regex = /^(\+48)?[ \-]?(\d{3}[ \-]?\d{3}[ \-]?\d{3})$/;
      return regex.test(value);
    },
    {
      message: 'Błędny format numeru telefonu',
    },
  ),
  subject: z.string().min(2).max(40),
  message: z.string().min(2).max(400),
});
