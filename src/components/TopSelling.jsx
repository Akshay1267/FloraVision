import besto2plant from "../assets/besto2plant.png";
import plantain from "../assets/plantain.jpg";
import cactus from "../assets/cactus.png";
import swiss from "../assets/swiss.png";
import sansevieria from "../assets/sansevieria.png";
import agave from "../assets/agave.png";
import borderTop from "../assets/bordertop.png";

export default function TopSellingPlants() {
  return (
    <div className="min-h-screen py-16 px-4 relative bg-[#1B2316]">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Top Selling Plants
        </h1>

        {/* Plants Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={besto2plant}
                alt="Aglaonema plant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">Aglaonema plant</h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                The Aglaonema plant, commonly known as Chinese Evergreen, is
                known for its attractive foliage and ease of care.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 300/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={plantain}
                alt="Plantain Lilies"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">Plantain Lilies</h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                Hostas are primarily grown for their attractive foliage, which
                come in a wide variety of shapes, sizes...
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 380/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Plant 3 */}
          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={cactus}
                alt="Cactus"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">Cactus</h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                It is known for their ability to thrive in arid environments
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 259/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Plant 4 */}
          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={swiss}
                alt="Swiss cheese Plant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">
                Swiss cheese Plant
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                It is a popular tropical houseplant known for its distinctive,
                perforated leaves.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 400/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Plant 5 */}
          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={sansevieria}
                alt="Sansevieria plant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">
                Sansevieria plant
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                It is a popular indoor plant admired for its striking appearance
                and low-maintenance nature.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 450/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Plant 6 */}
          <div className="relative rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
            <img
              src={borderTop}
              alt=""
              className="absolute inset-0 w-full h-full object-fill"
            />

            <div className="relative z-10 mb-4 rounded-xl overflow-hidden h-64 flex items-center justify-center">
              <img
                src={agave}
                alt="Agave plant"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold text-white">Agave plant</h3>
              <p className="text-gray-300 text-sm leading-relaxed min-h-[60px]">
                The Agave plant is a genus of succulent plants known for their
                striking rosette of thick, fleshy leaves and architectural form.
              </p>
              <div className="flex items-center justify-between pt-2">
                <span className="text-white font-bold text-lg">Rs. 359/-</span>
                <button className="w-8 h-8 bg-green-600/20 hover:bg-green-600/40 border border-green-500/50 rounded flex items-center justify-center transition-colors">
                  <svg
                    className="w-4 h-4 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
