import classNames from 'classnames';

function FormError({ error, className }) {
  if (error instanceof Error || (error && error.message)) {
    const classes = classNames('text-red-500', className);

    return <div className={classes}>Something went wrong: {error.message}</div>;
  }
  return null;
}

export default FormError;
