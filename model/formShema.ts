import { z } from 'zod';

export const formSchema = z.object({
  name: z
    .string()
    .refine((value) => value.length >= 2, {
      message: 'Imię musi mieć co najmniej 2 znaki',
    })
    .refine((value) => value.length <= 40, {
      message: 'Imię może mieć maksymalnie 40 znaków',
    }),
  email: z
    .string()
    .email({
      message: 'Należy podać adres e-mail',
    })
    .refine((value) => value.length >= 6, {
      message: 'Adres e-mail musi mieć co najmniej 6 znaków',
    })
    .refine((value) => value.length <= 40, {
      message: 'Adres e-mail może mieć maksymalnie 40 znaków',
    }),
  phone: z
    .string()
    .refine((value) => value.length !== 0, {
      message: 'Podaj komórkę (format xxx-xxx-xxx)',
    })
    .refine(
      (value) => {
        const regex = /^(\+48)?[ \-]?(\d{3}[ \-]?\d{3}[ \-]?\d{3})$/;
        return regex.test(value);
      },
      {
        message: 'Błędny format numeru telefonu',
      },
    ),
  subject: z
    .string()
    .refine((value) => value.length >= 2, {
      message: 'Temat musi mieć co najmniej 2 znaki',
    })
    .refine((value) => value.length <= 40, {
      message: 'Temat może mieć maksymalnie 40 znaków',
    }),
  message: z
    .string()
    .refine((value) => value.length >= 2, {
      message: 'Wiadomość musi mieć co najmniej 2 znaki',
    })
    .refine((value) => value.length <= 400, {
      message: 'Wiadomość może mieć maksymalnie 400 znaków',
    }),
});
