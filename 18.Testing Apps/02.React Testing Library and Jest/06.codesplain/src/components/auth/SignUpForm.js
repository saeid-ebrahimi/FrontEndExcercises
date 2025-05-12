import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Input from '../forms/Input';
import Checkbox from '../forms/Checkbox';
import Button from '../forms/Button';
import FormError from '../forms/FormError';
import useSignUp from '../../hooks/useSignUp';

function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [marketingAccept, setMarketingAccept] = useState(false);

  const { signUp, error, isLoading, isSignedIn } = useSignUp();

  const handleSubmit = async (event) => {
    event.preventDefault();

    signUp({
      email,
      password,
      passwordConfirmation,
    });
  };

  if (isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-6">
      <div className="col-span-6">
        <Input
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          error={error}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Input
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          error={error}
        />
      </div>

      <div className="col-span-6 sm:col-span-3">
        <Input
          label="Password Confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          type="password"
          name="passwordConfirmation"
          error={error}
        />
      </div>

      <div className="col-span-6">
        <Checkbox
          label="Receive marketing emails"
          checked={marketingAccept}
          onChange={(e) => setMarketingAccept(e.target.checked)}
          name="marketingAccept"
        />
      </div>

      <FormError error={error} className="col-span-6" />

      <div className="col-span-6 flex items-center">
        <Button wide loading={isLoading} type="submit">
          Sign Up
        </Button>
      </div>

      <div className="col-span-6 flex items-center">
        <p className="text-sm text-gray-500">
          Already have an account?{' '}
          <Link to="/signin" className="text-gray-700 underline">
            Sign in
          </Link>
          .
        </p>
      </div>
    </form>
  );
}

export default SignUpForm;
