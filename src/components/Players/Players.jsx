import { use } from "react";
import Player from "../Player/Player";

const Players = ({ players, handleSelectedPlayer }) => {
    const playersData = use(players);
    console.log(playersData);
    return (
        <div className="w-[1300px] mx-auto">
            <div className="grid grid-cols-1  md:grid-cols-3 gap-5">
                {
                    playersData.map(player => <Player key={player.id} player={player} handleSelectedPlayer={handleSelectedPlayer} />)
                }
            </div>
        </div>
    )
}

export default Players;