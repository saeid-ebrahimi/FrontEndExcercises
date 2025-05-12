import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import useSignOut from '../hooks/useSignOut';

function SignOutRoute() {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const { isSignedOut } = useSignOut();

  useEffect(() => {
    let timeout;
    if (isSignedOut) {
      timeout = setTimeout(() => setShouldNavigate(true), 2000);
    }
    return () => clearTimeout(timeout);
  }, [isSignedOut]);

  if (shouldNavigate) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid mt-40 px-4 bg-white place-content-center">
      <div className="text-center">
        <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Sad to see you go...
        </p>

        <p className="mt-4 text-gray-500">
          Redirecting you to the home page...
        </p>
      </div>
    </div>
  );
}

export default SignOutRoute;
