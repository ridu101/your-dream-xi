import "./App.css";
import { ToastContainer } from 'react-toastify';
import { Suspense, useMemo, useState } from "react";
// import { Suspense, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import NewsLatter from "./Components/NewsLatter";
import Footer from "./Components/Footer";

const fetchPlayers = async () => {
  const res = await fetch("/players.json");
  return res.json();
};

function App() {
  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance] = useState(600000000);
  const playerPromise = useMemo(() => fetchPlayers(), []);
  const [purchasedPlayers, setPurchasePlayers] = useState([]);

  const removePlayer = (p) => {
    const filterPlayers = purchasedPlayers.filter((ply) => ply.id !== p.id);
    setPurchasePlayers(filterPlayers);
    setAvailableBalance(availableBalance+p.price)
  };

  return (
    <>
      {/* Navbar */}
      <Suspense>
        <Navbar availableBalance={availableBalance}></Navbar>
      </Suspense>

      {/* Hero */}
      <Suspense>
        <Hero></Hero>
      </Suspense>
      {/* Toggling section */}
      <div className=" max-w-300  mx-auto flex items-center justify-between mt-10">
        <h1 className="text-xl font-bold">
          {toggle === true
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/6)`}
        </h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0  font-medium  ${toggle === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0  font-medium ${toggle === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>
      {toggle === true ? (
        <Suspense fallback={<h2>Loading Data..........</h2>}>
          <AvailablePlayers
            playerPromise={playerPromise}
            setAvailableBalance={setAvailableBalance}
            availableBalance={availableBalance}
            purchasedPlayers={purchasedPlayers}
            setPurchasePlayers={setPurchasePlayers}
          ></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense>
          <SelectedPlayers
            purchasedPlayers={purchasedPlayers}
            removePlayer={removePlayer}
          ></SelectedPlayers>
        </Suspense>
      )}

      {/* news latter */}
      <Suspense>
        <NewsLatter></NewsLatter>
      </Suspense>
      {/* footer */}
      <Suspense>
        <Footer></Footer>
      </Suspense>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
