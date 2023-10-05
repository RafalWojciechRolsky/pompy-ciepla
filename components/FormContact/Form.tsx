'use client';

import { formSchema } from '@/model/formShema';
import Link from 'next/link';
import { FC, FormEvent } from 'react';
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
  } = useForm<FormSchema>({ resolver: zodResolver(formSchema) });

  const submitData = async (data: FormSchema) => {
    // e.preventDefault();

    // const formData = new FormData(e.currentTarget as HTMLFormElement);
    // const response = await fetch('/api/form', {
    //   method: 'POST',
    //   body: formData,
    // });

    // const result = await response.json();
    console.log(data);
  };

  return (
    <section className="form" id="form-contact">
      <h5>Bądź z nami w kontakcie</h5>
      <form onSubmit={handleSubmit(submitData)}>
        <div className="row">
          <label htmlFor="name">
            <input type="text" placeholder="Imię" id="name" {...register('name')} />
            {errors.name && <span className="formError">Wypełnij pole</span>}
          </label>
          <label htmlFor="">
            <input type="email" placeholder="Email" id="email" {...register('email')} />
            {errors.email && <span className="formError">Wypełnij pole</span>}
          </label>
        </div>
        <div className="row">
          <label htmlFor="phone">
            <input type="text" placeholder="Telefon" id="phone" {...register('phone')} />
            {errors.phone && <span className="formError">Wypełnij pole</span>}
          </label>
          <label htmlFor="subject">
            <input type="text" placeholder="Temat" id="subject" {...register('subject')} />
            {errors.subject && <span className="formError">Wypełnij pole</span>}
          </label>
        </div>
        <label htmlFor="message">
          <textarea placeholder="Message" id="message" {...register('message')} />
          {errors.message && <span className="formError">Wypełnij pole</span>}
        </label>
        <div className="submit">
          <label htmlFor="submitButton">
            <input type="checkbox" id="submitButton" name="submitButton" />
            <span>
              Zgadzam się z <Link href={'/'}>Polityką Prywatności</Link>
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
