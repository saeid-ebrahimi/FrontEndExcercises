import {loader} from '../assets';

const Loader = ({title}) => (
  <div className={"w-full flex justify-center items-center flex-col"}>
      <img src={loader} alt="loader" className={"w-32 h-32 object-contain"}/>
      <h1 className={"font-bold text-2xl mt-2 text-white"}>{title || "Loading..."}</h1>
  </div>
);

export default Loader;
