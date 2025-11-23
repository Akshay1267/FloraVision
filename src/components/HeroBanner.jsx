import plantain from "../assets/plantain.jpg";
import besto2plant from "../assets/besto2plant.png";
import borderTop from "../assets/bordertop.png";
import heroBlur from "../assets/heroBlur.png";

export default function HeroBanner() {
  return (
    <div className="min-h-screen relative overflow-hidden py-12">
      <div className="absolute inset-0 pointer-events-none"></div>

      <div className="container mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold text-white opacity-75">
              Earth's Exhale
            </h1>

            <p className="text-white/80 text-lg leading-relaxed opacity-75">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's
              natural environment and its essential role in sustaining life.
            </p>

            <div className="flex items-center gap-4">
              <button className="px-6 py-3 border border-white text-white rounded hover:bg-white/10 transition">
                Buy Now
              </button>
              <button className="w-12 h-12 border border-white rounded-full flex items-center justify-center text-white hover:bg-white/10 transition">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <span className="text-white text-xl">Live Demo...</span>
            </div>

            <div
              className="mt-12 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-md relative overflow-hidden"
              style={{
                backgroundImage: `url(${heroBlur})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gray-900/40 -z-10"></div>

              <div className="flex items-start gap-4 relative z-10">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
                  alt="Ronnie Hamill"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-white font-semibold">
                      Ronnie Hamill
                    </span>
                    <div className="flex text-yellow-400">
                      {[...Array(4)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <svg
                        className="w-4 h-4 text-white/30"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-white/80 text-sm">
                    I can't express how thrilled I am with my new natural
                    plants! They bring such a fresh and vibrant energy to my
                    home.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-end">
            <div className="relative rounded-3xl p-7 max-w-md overflow-hidden">
              <img
                src={borderTop}
                alt="blur background"
                className="absolute inset-0 w-full h-full object-cover rounded-3xl"
              />

              <div className="mb-6 relative z-10">
                <img
                  src={besto2plant}
                  alt="Aglaonema plant"
                  className="w-full h-64 object-contain"
                />
              </div>

              <div className="space-y-4 relative z-10">
                <p className="text-white/60 text-sm">Indoor Plant</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-white text-2xl font-semibold">
                    Aglaonema plant
                  </h3>
                  <button className="text-white hover:text-green-400 transition">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
                <button className="w-full px-6 py-3 border border-white text-white rounded hover:bg-white/10 transition">
                  Buy Now
                </button>

                <div className="flex justify-center gap-2 pt-4">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                  <div className="w-2 h-2 bg-white/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
