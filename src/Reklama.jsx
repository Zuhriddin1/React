import Foto from "./assets/Showpo..svg";
import Foto2 from "./assets/HeartKids.svg";
const Reklama = () => {
  return (
    <>
      <div>
        <span className="pl-[660px] pb-[30px]">Used by industry leaders</span>
      </div>
      <div className="flex pt-3">
        <img className="pl-[272px]" src={Foto} alt="" />
        <h1 className=" pt-3 pl-3 font-extrabold text-2xl">Showpo.</h1>
        <h1 className="text-2xl bg-white ml-[203px] text-black font-medium mt-[15px]">
          COCO REPUBLIC
        </h1>
        <img className="pl-[330px] pt-1" src={Foto2} alt="" />
      </div>
    </>
  );
};
export default Reklama;
