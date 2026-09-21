import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
`;

const data = ["a", "b"];

export default function App() {
  return (
    <>
      {data.map((val) => (
        <Input key={val} />
      ))}
      <Input />
    </>
  );
}

/**
 * [
 *  [
 *    {type: Input, key="a"}
 *    {type: Input, key="b"},
 *  ],
 *  {type: Input}
 * ]

 */
