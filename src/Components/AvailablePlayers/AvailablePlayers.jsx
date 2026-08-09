// import React from 'react';

import { use } from "react";
import userLogo from "../../assets/user 1.png";
import flag from "../../assets/report 1.png";



const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className=" max-w-300  mx-auto cardPlayer grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  gap-5 mt-10">
      {playerData.map((player) => (
        <div className="card shadow-sm p-6 bg-gray-200 rounded-xl">
          <figure>
            <img className="w-94 h-94 rounded-2xl object-cover"
              src={player.image}
              alt="player-image"
            />
          </figure>
          <div className="mt-4">
            <div className=" flex">
              <img src={userLogo} alt="" />{" "}
              <h2 className="card-title ml-2">{player.name}</h2>
            </div>
            <div className="flex justify-between items-center border-b-2 border-gray-400 pb-2">
              <div className="flex mt-3 gap-2">
                <img src={flag} alt="" /> <p>{player.country}</p>
              </div>
              <button class="btn">{player.role}</button>
            </div>
            <div className="flex mt-4 justify-between">
              <p className=" font-bold">Rating</p>
              <p>{player.rating}</p>
            </div>
            <div className="flex justify-between mt-4">
              <p>{player.batting}</p>
              <p className="text-gray-600">{player.bowling}</p>
            </div>
            <div className="flex justify-between mt-4 items-center">
              <p>
                Price: $ <span>{player.price}</span>
              </p>
              <button class="btn btn-outline btn-primary">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
