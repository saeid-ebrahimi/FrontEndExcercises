type Props = {
  onClick: () => void;
  btnLabel: string;
};

const ExpensiveComponent = ({ onClick, btnLabel }: Props) => {
  console.log("expensive component rendered");
  return (
    <>
      <br />
      <button className="button" onClick={onClick}>
        {btnLabel}
      </button>
    </>
  );
};

export default ExpensiveComponent;
