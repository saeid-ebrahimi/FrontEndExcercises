import { useEffect, useState } from 'react';
import classNames from 'classnames';
import Label from './Label';

function Input({ className, label, error, onChange, ...rest }) {
  const [showError, setShowError] = useState(true);

  useEffect(() => {
    setShowError(true);
  }, [error]);

  const handleChange = (event) => {
    setShowError(false);
    onChange(event);
  };

  let errorMessage = null;
  if (showError && error && error[rest.name]) {
    errorMessage = (
      <div className="mt-0.5 text-red-500 text-sm">
        {error[rest.name].join(', ')}
      </div>
    );
  }

  const classes = classNames(
    'mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm',
    errorMessage && 'border-red-500',
    className
  );

  return (
    <div>
      <Label htmlFor={rest.name}>{label}</Label>
      <input
        {...rest}
        id={rest.name}
        className={classes}
        onChange={handleChange}
      />
      {errorMessage}
    </div>
  );
}

export default Input;
