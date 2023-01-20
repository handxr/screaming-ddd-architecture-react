import clsx from 'clsx';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  UseFormProps,
  UseFormReturn,
} from 'react-hook-form';
import { ZodType, ZodTypeDef } from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';

interface FormProps<TFormValues extends FieldValues, Schema> {
  className?: string;
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  id?: string;
  schema?: Schema;
}

export const Form = <
  TFormValues extends Record<string, unknown>,
  Schema extends ZodType<TFormValues, ZodTypeDef, any> = ZodType<
    TFormValues,
    ZodTypeDef,
    any
  >,
>({
  className,
  onSubmit,
  children,
  options,
  id,
  schema,
}: FormProps<TFormValues, Schema>) => {
  const methods = useForm<TFormValues>({
    resolver: schema && zodResolver(schema),
    ...options,
  });

  return (
    <form
      className={clsx('space-y-6', className)}
      onSubmit={methods.handleSubmit(onSubmit)}
      id={id}
    >
      {children(methods)}
    </form>
  );
};
