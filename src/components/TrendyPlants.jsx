import plantainn from "../assets/plantainn.png";
import deskk from "../assets/deskk.png";
import blurrect from "../assets/blurrect.png";

export default function TrendyPlants() {
  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Our Trendy plants
        </h1>

        <div className="space-y-6">
          {/* Card 1 */}
          <div className="relative rounded-3xl p-8 overflow-hidden">
            <img
              src={blurrect}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Plant Image */}
              <div className="flex justify-center">
                <img
                  src={plantainn}
                  alt="Desk plant"
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  For Your Desks Decorations
                </h2>
                <div className="p-1">
                  <p className="text-gray-300 text-sm">
                    I recently added a beautiful desk decoration plant to my
                    workspace, and it has made such a positive difference!
                  </p>
                </div>
                <p className="text-white font-bold text-2xl">Rs. 599/-</p>
                <div className="flex gap-3">
                  <button className="px-6 py-2 text-white border border-white rounded-lg transition-colors font-semibold hover:bg-white/10">
                    Explore
                  </button>
                  <button className="w-10 h-10 border border-white rounded-lg flex items-center justify-center transition-colors hover:bg-white/10">
                    <svg
                      className="w-5 h-5 text-white"
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

          {/* Card 2 */}
          <div className="relative rounded-3xl p-8 overflow-hidden">
            {/* Background Image */}
            <img
              src={blurrect}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
              {/* Content */}
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  For Your Desks Decorations
                </h2>
                <p className="text-gray-300 text-sm">
                  The greenery adds a touch of nature and serenity to my desk,
                  making it feel more inviting and lively.
                </p>
                <p className="text-white font-bold text-2xl">Rs. 399/-</p>
                <div className="flex gap-3">
                  <button className="px-6 py-2 text-white border border-white rounded-lg transition-colors font-semibold hover:bg-white/10">
                    Explore
                  </button>
                  <button className="w-10 h-10 border border-white rounded-lg flex items-center justify-center transition-colors hover:bg-white/10">
                    <svg
                      className="w-5 h-5 text-white"
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

              {/* Plant Image */}
              <div className="flex justify-center md:order-first">
                <img
                  src={deskk}
                  alt="Desk plant"
                  className="w-full max-w-xs h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
