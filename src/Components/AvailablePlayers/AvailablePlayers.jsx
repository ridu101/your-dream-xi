// import React from 'react';

import { use } from "react";

import PlayerCard from "../PlayerCard/PlayerCard";



const AvailablePlayers = ({ playerPromise, setAvailableBalance,availableBalance }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className="max-w-300 mx-auto cardPlayer grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
      {playerData.map((player) => (
        <PlayerCard 
        player={player} 
        setAvailableBalance={setAvailableBalance}
        availableBalance={availableBalance}
        ></PlayerCard>
      ))}
    </div>
  );
};

export default AvailablePlayers;
