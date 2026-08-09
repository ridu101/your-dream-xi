// import React from 'react';

import { use } from "react";
import userLogo from "../../assets/user 1.png";
import flag from "../../assets/report 1.png";
import "./AvilablePlayer.css"


const AvailablePlayers = ({ playerPromise }) => {
  const playerData = use(playerPromise);
  console.log(playerData);

  return (
    <div className=" max-w-300  mx-auto cardPlayer">
      {playerData.map((player) => (
        <div className="card bg-base-100 w-96 shadow-sm p-5">
          <figure>
            <img className="w-94 h-94 rounded-2xl"
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
              <button class="btn">All Rounder</button>
            </div>
            <div className="flex mt-4 justify-between">
              <p className=" font-bold">Rating</p>
              <p>{player.rating}</p>
            </div>
            <div className="flex justify-between mt-4">
              <p>Left-Handed-Bat</p>
              <p className="text-gray-600">Left-Handed-Bowl</p>
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
