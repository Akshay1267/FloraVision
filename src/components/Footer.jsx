import { useState } from "react";
// import plant1 from "../assets/plant1.png";
import logoo from "../assets/logoo.png";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <footer className="text-white py-12 px-8 bg-[#1B2316]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/*  Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 flex items-center justify-center text-3xl">
                <img src={logoo}></img>
              </div>
              <h2 className="text-2xl font-bold opacity-75">FloraVision.</h2>
            </div>
            <p className="text-white text-sm leading-relaxed">
              "From lush indoor greens to vibrant outdoor blooms, our plants are
              crafted to thrive and elevate your living environment."
            </p>
            <div className="flex gap-6 pt-4 mt-11">
              <button className="text-white hover:text-emerald-400 transition-colors font-semibold">
                FB
              </button>
              <button className="text-white hover:text-emerald-400 transition-colors font-semibold">
                TW
              </button>
              <button className="text-white hover:text-emerald-400 transition-colors font-semibold">
                LI
              </button>
            </div>
          </div>

          {/*  Quick Links */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-4">Quick Link's</h3>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-white hover:text-white transition-colors underline text-sm"
              >
                Home
              </a>
              <a
                href="/plants"
                className="text-white hover:text-white transition-colors underline text-sm"
              >
                Type's Of plant's
              </a>
              <a
                href="/contact"
                className="text-white hover:text-white transition-colors underline text-sm"
              >
                Contact
              </a>
              <a
                href="/privacy"
                className="text-white hover:text-white transition-colors underline text-sm"
              >
                Privacy
              </a>
            </div>
          </div>

          {/*  Newsletter */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold mb-4">For Every Update.</h3>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="w-full px-4 py-3 pr-28 rounded-lg bg-transparent border-2 border-white text-white placeholder-gray-400 focus:outline-none focus:border-emerald-500 transition-colors"
              />
              <button
                onClick={handleSubscribe}
                className="absolute right-1 top-1 bg-white text-black px-5 py-2 rounded-md font-semibold hover:bg-emerald-400 hover:text-white transition-colors"
              >
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className=" border-gray-800 pt-6 text-right mr-45 ">
          <p className="text-white text-md">
            FloraVision <i class="ri-copyright-line"></i> all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
}
