import React, { useState } from "react";

function App() {
  const PLAYERS = [
    "Ali",
    "Namık",
    "Eda",
    "Ebru",
    "Suzan",
    "Samet",
    "Engin",
    "Halit"
  ];

  return <FormTeams players={PLAYERS} />;
}

const FormTeams = ({ players }) => {
  const [remainingPlayers, setRemainingPlayers] = useState(players);
  const [team1, setTeam1] = useState([]); 
  const [team2, setTeam2] = useState([]); 
  const [currentTeam, setCurrentTeam] = useState("team1"); 


  const handlePlayerClick = (player) => {
    setRemainingPlayers((prev) => prev.filter((p) => p !== player));
    if (currentTeam === "team1") {
      setTeam1((prev) => [...prev, player]);
    } else {
      setTeam2((prev) => [...prev, player]);
    }
  };

  
  const handleShuffle = () => {
    const shuffledPlayers = [...remainingPlayers, ...team1, ...team2].sort(
      () => Math.random() - 0.5
    );
    setRemainingPlayers(shuffledPlayers);
    setTeam1([]);
    setTeam2([]);
  };

  
  const handleReset = () => {
    setRemainingPlayers(players);
    setTeam1([]);
    setTeam2([]);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4 bg-gray-100 min-h-screen">
      <div className="flex space-x-2">
        {remainingPlayers.map((player) => (
          <button
            key={player}
            onClick={() => handlePlayerClick(player)}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
          >
            {player}
          </button>
        ))}
      </div>

    
      <div className="space-x-2">
        <button
          onClick={() => setCurrentTeam("team1")}
          className={`px-4 py-2 rounded-md ${
            currentTeam === "team1"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Takım 1 Seç
        </button>
        <button
          onClick={() => setCurrentTeam("team2")}
          className={`px-4 py-2 rounded-md ${
            currentTeam === "team2"
              ? "bg-green-500 text-white"
              : "bg-gray-300 text-black"
          }`}
        >
          Takım 2 Seç
        </button>
      </div>

      
      <div className="space-x-2">
        <button
          onClick={handleShuffle}
          className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Karıştır
        </button>
        <button
          onClick={handleReset}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-700"
        >
          Sıfırla
        </button>
      </div>


      <div className="flex space-x-8">
        <div>
          <h2 className="text-lg font-bold">Takım 1</h2>
          <ul className="list-disc list-inside">
            {team1.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold">Takım 2</h2>
          <ul className="list-disc list-inside">
            {team2.map((player) => (
              <li key={player}>{player}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
