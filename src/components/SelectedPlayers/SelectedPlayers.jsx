import SelectedPlayer from '../SelectedPlayer/SelectedPlayer.jsx'
const SelectedPlayers = ({ selectedPlayers, setIsSelected, handleRemoveFromSelectPlayer }) => {
    return (
        <div className="w-full px-4 md:px-0 md:w-[1300px] mx-auto pb-10">
            <div >
                {
                    selectedPlayers.map(player => <SelectedPlayer handleRemoveFromSelectPlayer={handleRemoveFromSelectPlayer} player={player}/>)
                }
            </div>
            <div className="border border-[#E7FE29] w-[170px] rounded-full p-2 text-center mt-10">
                <button onClick={() => setIsSelected(false)} className="btn bg-[#E7FE29] rounded-full border-0">Add More Player</button>
            </div>
        </div>
    )
}

export default SelectedPlayers;