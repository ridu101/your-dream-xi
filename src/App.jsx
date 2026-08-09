import "./App.css";


import { Suspense, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers";
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers";
import NewsLatter from "./Components/NewsLatter";
import Footer from "./Components/Footer";



const fetchPlayers= async ()  =>{
const res = await fetch("/players.json")
return res.json()
}

function App() {
 const [toggle, setToggle] = useState()
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
    {/* Toggling section */}
    <div className=" max-w-300  mx-auto flex items-center justify-between mt-10">
      <h1 className="text-xl font-bold">Available Players</h1>
      <div>
        <button onClick={()=> setToggle(true)} className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0  font-medium  ${ toggle === true? "bg-[#E7FE29]":"" }`} >Available</button>
        <button onClick={()=> setToggle(false)} className={`py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0  font-medium ${ toggle === false ? "bg-[#E7FE29]": ""}`}>Selected <span>(0)</span></button>
      </div>
    </div>
    {
      toggle === true ? <Suspense fallback={<h2>Loading Data..........</h2>}>
      <AvailablePlayers playerPromise={playerPromise}>
       
      </AvailablePlayers>
    </Suspense> :  <Suspense>
      <SelectedPlayers></SelectedPlayers>
    </Suspense>
    }
    
   

    {/* news latter */}
    <Suspense>
      <NewsLatter></NewsLatter>
    </Suspense>
    {/* footer */}
    <Suspense>
      <Footer></Footer>
    </Suspense>
  
  
    </>
  );
}

export default App;
