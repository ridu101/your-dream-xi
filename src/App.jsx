import "./App.css";


import { Suspense } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";


const fetchPlayers= async ()  =>{
const res = await fetch("/players.json")
return res.json()
}

function App() {

  const playerPromise= fetchPlayers();
  return (
    <>
    {/* Navbar */}
    <Suspense>
      <Navbar></Navbar>
    </Suspense>

    {/* Hero */}
    <Suspense>
      <Hero></Hero>
    </Suspense>
    {/* Available Player */}
    <Suspense fallback={<h2>Loading Data..........</h2>}>
      <AvailablePlayers playerPromise={playerPromise}>
       
      </AvailablePlayers>
    </Suspense>
    {/* Selected Players */}
    <Suspense>
      <SelectedPlayers></SelectedPlayers>
    </Suspense>
  
  
    </>
  );
}

export default App;
