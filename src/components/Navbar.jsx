import logoo from "../assets/logoo.png";

export default function Navbar() {
  return (
    <nav className=" top-0 left-0 w-full z-50 px-10 py-4 flex items-center justify-between bg-transparent">
      {/* Logo & Title */}
      <div className="flex items-center space-x-3">
        <img src={logoo} alt="Logo" className="h-16 w-16 mb-0 " />
        <p className="text-white text-2xl font-semibold">FloraVision.</p>
      </div>

      {/* Menu */}
      <div className="flex items-center space-x-10 text-lg">
        <p className="text-white hover:text-green-300 cursor-pointer font-[Indie_Flower] text-[24px] leading-[100%] tracking-[0]">
          Home
        </p>
        <p className="text-white hover:text-green-300 cursor-pointer font-[Indie_Flower] text-[24px] leading-[100%] tracking-[0]">
          Plants Type <i class="ri-arrow-drop-down-fill text-white"></i>
        </p>
        <p className="text-white hover:text-green-300 cursor-pointer font-[Indie_Flower] text-[24px] leading-[100%] tracking-[0]">
          More
        </p>
        <p className="text-white hover:text-green-300 cursor-pointer font-[Indie_Flower] text-[24px] leading-[100%] tracking-[0]">
          Contact
        </p>
      </div>

      {/* Icons Right Side */}
      <div className="flex items-center space-x-6 text-white text-xl">
        <i className="ri-search-line cursor-pointer"></i>
        <i class="ri-shopping-bag-4-line"></i>
        <i class="ri-menu-3-line"></i>
      </div>
    </nav>
  );
}
