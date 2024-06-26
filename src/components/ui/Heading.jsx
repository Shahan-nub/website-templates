import Glow from "./Glow";

export default function Heading({text1,text2,textStyle}) {
  return (
    <div className={`relative text-2xl md:text-5xl font-semibold font-sans text-white ${textStyle}`}>
      <h1 className="text-color-1">{text1}</h1>
      <h1 className="lg:mt-3"> {text2}</h1>
      <Glow pos="right-1/4 bottom-16 "></Glow>
    </div>
  );
}
