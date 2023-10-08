'use client';

import { formSchema } from '@/model/formShema';
import Link from 'next/link';
import { FC } from 'react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface IPropsTypes {
  name?: string;
}

type FormSchema = z.infer<typeof formSchema>;

const Form: FC<IPropsTypes> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      subject: 'Zapytanie o ofertę',
    },
  });

  const submitData = async (data: FormSchema) => {
    const response = await fetch('/api/form', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log(result);
  };

  return (
    <section className="form" id="form-contact">
      <h5>Bądź z nami w kontakcie</h5>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="row">
          <label htmlFor="name">
            <input type="text" placeholder="Imię" id="name" {...register('name')} />
            {errors.name && <span className="formError">{errors.name?.message}</span>}
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" id="email" {...register('email')} />
            {errors.email && <span className="formError">{errors.email?.message}</span>}
          </label>
        </div>
        <div className="row">
          <label htmlFor="phone">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{3}"
              placeholder="Komórka w formacie xxx-xxx-xxx"
              id="phone"
              {...register('phone')}
            />
            {errors.phone && <span className="formError">{errors.phone?.message}</span>}
          </label>
          <label htmlFor="subject">
            <input type="text" placeholder="Temat" id="subject" {...register('subject')} />
            {errors.subject && <span className="formError">{errors.subject?.message}</span>}
          </label>
        </div>
        <label htmlFor="message">
          <textarea placeholder="Treść wiadomości" id="message" {...register('message')} />
          {errors.message && <span className="formError">{errors.message?.message}</span>}
        </label>
        <div className="submit">
          <label htmlFor="submitButton">
            <span>
              Wysyłając formularz zgadzasz się z <Link href={'/'}>Polityką Prywatności</Link>
            </span>
          </label>
          <button type="submit" className="btn btn--form">
            Wyślij
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
