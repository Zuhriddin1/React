import HeroLogo from "./assets/ImgHero.svg";
import Phone from "./assets/IMAGE.svg";
import Plus from "./assets/plus.svg";
const Hero = () => {
  return (
    <div className="bg-[#022A1E] ml-4 mr-4 mb-[80px]">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="relative">
            <img src={Phone} alt="" />
            <img src={Plus} className="absolute top-6 left-3" alt="" />
            <img src={HeroLogo} className="absolute top-6 left-3" />
          </div>
          <div>
            <h1 className="text-5xl font-bold pb-[25px]">Next generation </h1>
            <p className="w-[455px] h-[63px]">
              Welcome to the next generation of mobile commerce and customer
              engagement. Meet your mobile customers where they want to be met.
            </p>
            <div className="chat chat-start pt-[36px]">
              <div className="chat-bubble chat-bubble-warning w-[397px] h-[66px] text-4xl">
                mobile commerce
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
