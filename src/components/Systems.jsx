import a from "../assets/systems/1.png";
import b from "../assets/systems/2.png";
import c from "../assets/systems/3.png";
import d from "../assets/systems/4.png";
import e from "../assets/systems/5.png";
import f from "../assets/systems/6.png";
import g from "../assets/systems/7.png";
import h from "../assets/systems/8.png";

const Systems = () => {
  const images = [a, b, c, d, e, f, g, h];
  return (
    <>
      <div className="w-[100%] rounded-2xl bg-slate-600 bg-opacity-25 p-6 backdrop-blur-lg justify-center">
        <h1 className="text-white text-lg font-bold">Systems Integrated</h1>
        <div className="flex-row space-y-6 mt-6">
          <div className="flex justify-center">
            {images.slice(0, 4).map((image) => (
              <img className="h-7 w-7 mx-4 cursor-pointer" src={image} />
            ))}
          </div>
          <div className="flex justify-center">
            {images.slice(4, 8).map((image) => (
              <img className="h-7 w-7 mx-4 cursor-pointer" src={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Systems;
