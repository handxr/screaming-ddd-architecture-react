import * as z from 'zod';

import { Button } from '@/components/elements';
import { Form, InputField } from '@/components/form';

import { useLogin } from '../hooks';

const schema = z.object({
  email: z.string().min(1, 'Required'),
  password: z.string().min(1, 'Required'),
});

type LoginValues = {
  email: string;
  password: string;
};

type LoginFormProps = {
  onSuccess: () => void;
};

export const LoginForm = ({ onSuccess }: LoginFormProps) => {
  const { login, isLoading } = useLogin();

  const handleSubmit = async (values: LoginValues) => {
    await login(values);
    onSuccess();
  };

  return (
    <div>
      <Form<LoginValues, typeof schema> onSubmit={handleSubmit} schema={schema}>
        {({ register, formState }) => (
          <>
            <InputField
              type="email"
              label="Email Address"
              error={formState.errors['email']}
              registration={register('email')}
            />
            <InputField
              type="password"
              label="Password"
              error={formState.errors['password']}
              registration={register('password')}
            />
            <div>
              <Button type="submit" className="w-full" isLoading={isLoading}>
                Log in
              </Button>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};
