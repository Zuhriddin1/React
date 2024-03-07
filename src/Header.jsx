const Header = () => {
  return (
    <div className="w-full flex text-[#022A1E]">
      <div className="flex  gap-[46px] pt-[35px] pb-[35px]">
        <p className="pl-[342px] cursor-pointer">Products</p>
        <p className="cursor-pointer">Use cases</p>
        <p className="cursor-pointer">Resources</p>
        <p className="cursor-pointer">About us</p>
      </div>
      <div className="pt-[25px] pb-[35px]">
        <span className="pl-[169px]">Log in</span>
        <button className="ml-[37px] border-black border-[3] rounded-[100px] pt-[10px] pl-[21px] pb-[10px] pr-[21px]">
          Request a demo
        </button>
      </div>
    </div>
  );
};

export default Header;
