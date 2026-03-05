const SelectedPlayer = ({ player, handleRemoveFromSelectPlayer }) => {
    return (
        <>
            <div className="p-3 rounded-md shadow-sm flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                    <div>
                        <img className="w-16 rounded-md" src={player.player_image} />
                    </div>
                    <div>
                        <h3    className="text-xl font-bold">{player.player_name}</h3>
                        <p>{player.batting_hand}</p>
                    </div>
                </div> 
                <div className="cursor-pointer"   onClick={() => handleRemoveFromSelectPlayer(player.id)}>X</div> 
            </div>
            
        </>
    )
}

export default SelectedPlayer;