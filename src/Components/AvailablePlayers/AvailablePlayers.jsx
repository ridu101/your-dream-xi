// import React from 'react';

import { use } from "react";

const AvailablePlayers = ({playerPromise}) => {
    const playerData= use(playerPromise)
    console.log(playerData)

    return (
        <div>
            <h1>Available Players</h1>
        </div>
    );
};

export default AvailablePlayers;