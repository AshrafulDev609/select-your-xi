import { Suspense, useState } from "react";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar/Navbar"
import Players from "./components/Players/Players";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import Footer from "./components/Footer/Footer";


const players  =  fetch(`players.json`).then(res => res.json())

function App() {
  const [totalCoin, setTotalCoin] = useState(60000);
  const [selectedPlayers, setSelectedPlayers]  = useState([]); 
  const [isSelected, setIsSelected] = useState(false);

  const handleClaimCoin = () => { 
    setTotalCoin(totalCoin * 5);
  }

  const handleSelectedPlayer = player => {
    const alreadyExist = selectedPlayers.find(pla => pla.id === player.id);
    if(alreadyExist) {
      alert("Already chose")
    } else {
      if(selectedPlayers.length === 6) {
        alert('Selected enough player')
      }
      const updateCoin = totalCoin - player.player_price
      setTotalCoin(updateCoin)
      setSelectedPlayers([...selectedPlayers, player])
    }
    
  }


  const handleRemoveFromSelectPlayer = id => {
    const remaining = selectedPlayers.filter(player => player.id !== id);
    setSelectedPlayers(remaining);
  }


  return (
    <>
      <Navbar totalCoin={totalCoin} />
      <Banner handleClaimCoin={handleClaimCoin} />

      <div className="w-full md:w-[1300px] mx-auto flex items-center justify-between py-4">
        <h2 className="text-2xl font-bold">Selected Players ({selectedPlayers.length}/6) </h2>
        <div>
          <button className={`btn ${!isSelected && 'bg-[#E7FE29] text-[#13131360]'}`} onClick={() => setIsSelected(false)}>Available</button>
          <button className={`btn ${isSelected && 'bg-[#E7FE29] text-[#13131360]'}`} onClick={() => setIsSelected(true)}>Selected ({selectedPlayers.length})</button>
        </div>
      </div>
      {
        isSelected ? <SelectedPlayers selectedPlayers={selectedPlayers} setIsSelected={setIsSelected} handleRemoveFromSelectPlayer={handleRemoveFromSelectPlayer}/> : (
          <Suspense fallback={<h2>Loading...</h2>}>
            <Players players={players} handleSelectedPlayer={handleSelectedPlayer}  />
          </Suspense>
        )
      }

      <Footer />
    </>
  )
}

export default App
