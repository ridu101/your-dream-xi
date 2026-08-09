
import dltLogo from "../../assets/Frame.png";

const SelectedCard = ({ player ,removePlayer}) => {
  const handleRemove = () =>{
    removePlayer(
        player
    )
  }


  return (
    <div className="flex items-center justify-between border-2 border-gray-300 p-2 rounded-2xl mt-2">
      <div className="flex items-center">
        <img
          className="w-16 h-16 object-cover rounded-xl"
          src={player.image}
          alt={player.name}
        />

        <div className="ml-3">
          <p className="font-bold">{player.name}</p>
          <p>{player.batting}</p>
        </div>
      </div>

      <div>
        <button onClick={handleRemove} className="btn border-0">
          <img src={dltLogo} alt="Delete" />
        </button>
      </div>
    </div>
  );
};

export default SelectedCard;