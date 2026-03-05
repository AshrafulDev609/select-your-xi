import personImg  from '../../assets/person.png';
import flagImg from '../../assets/flag.png'
const Player = ({ player, handleSelectedPlayer }) => {
    return (
        <div class="card bg-base-100 shadow-sm p-4 rounded-2xl">
            <figure className="p-4">
                <img
                className="w-full h-[250px] rounded-2xl"
                src={player.player_image}
                alt={player.player_name} />
            </figure>
            <div className="card-body">
                <h2 className="card-title flex items-center gap-2"><img src={personImg} alt="" />{player.player_name}</h2>
                 <div className='flex items-center justify-between'>
                    <h4 className='flex items-center text-md gap-2 text-gray-500'><img src={flagImg} alt="" />{player.player_country}</h4>
                    <button className='btn text-black text-md'>{player.player_type}</button>
                 </div>
                 <div className="w-full h-[2px] bg-gray-500 rounded-full"></div>
                 <div className='flex items-center justify-between'>
                    <h4 className='flex items-center text-md gap-2 text-black font-bold'>Rating</h4>
                    <h4 className='text-black text-md'>⭐⭐⭐⭐⭐({player.rating})</h4>
                 </div>
                 <div className='flex items-center justify-between'>
                    <h4 className='text-black text-md'>Left Hand Bat</h4>
                    <h4 className='flex items-center text-md gap-2 text-gray-500'>{player.batting_hand}</h4>
                 </div>
                 <div className='flex items-center justify-between'>
                    <h4 className='text-black text-md font-bold '>Price ${player.player_price}</h4>
                    <button className='flex items-center text-md gap-2 btn text-black' onClick={() => handleSelectedPlayer(player)}>Choose Player</button>
                 </div>
            </div>
        </div>
    )
}

export default Player;