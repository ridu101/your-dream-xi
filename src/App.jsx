import "./App.css";
import navImg from "./assets/logo.png";
import dollerImg from "./assets/dollar 1.png";
import heroBg from "./assets/bg-shadow.png";
import cricLogo from "./assets/banner-main.png";

function App() {
  return (
    <>
      {/* Navbar */}
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div>
              <img
                src={navImg}
                alt="Cricket Logo"
                className="w-14 md:w-16 object-contain"
              />
            </div>

            {/* Desktop Menu + Coin */}
            <div className="hidden md:flex items-center gap-8">
              {/* Menu */}
              <div className="flex items-center gap-8 text-sm text-gray-600">
                <a href="#home" className="hover:text-black transition-colors">
                  Home
                </a>

                <a
                  href="#fixture"
                  className="hover:text-black transition-colors"
                >
                  Fixture
                </a>

                <a href="#teams" className="hover:text-black transition-colors">
                  Teams
                </a>

                <a
                  href="#schedules"
                  className="hover:text-black transition-colors"
                >
                  Schedules
                </a>
              </div>

              {/* Coin Button */}
              <div className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2 bg-white">
                <span className="text-sm font-semibold text-gray-900">
                  0 Coin
                </span>

                <img
                  src={dollerImg}
                  alt="Coin"
                  className="w-5 h-5 object-contain"
                />
              </div>
            </div>

            {/* Mobile Coin */}
            <div className="md:hidden flex items-center gap-2 border border-gray-200 rounded-xl px-3 py-2">
              <span className="text-sm font-semibold text-gray-900">
                0 Coin
              </span>

              <img
                src={dollerImg}
                alt="Coin"
                className="w-5 h-5 object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section className="px-4 md:px-8 lg:px-16 mt-4">
        <div
          className="relative min-h-[420px] md:min-h-[500px] rounded-2xl overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroBg})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Hero Content */}
          <div className="relative z-10 min-h-[420px] md:min-h-[500px] flex items-center justify-center text-center">
            <div className="flex flex-col items-center max-w-4xl px-4">
              {/* Cricket Logo */}
              <img
                src={cricLogo}
                alt="Cricket"
                className="w-40 md:w-52 lg:w-60 mb-4 object-contain"
              />

              {/* Heading */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>

              {/* Subtitle */}
              <p className="mt-4 text-base md:text-lg text-gray-300">
                Beyond Boundaries Beyond Limits
              </p>

              {/* Button */}
              <button className="mt-5 btn bg-[#E7FE29] text-black border-none hover:bg-[#d4eb1f] font-bold rounded-xl">
                Claim Free Credit
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
