import React from 'react';

function Card({ values, handleClick, index }) {
  const { name, image, profession, friends } = values;

  const handleButtonClick = () => {
    handleClick(index);
    if (friends) {
      alert(`${name} has been removed from friends.`);
    } else {
      alert(`${name} has been added as a friend.`);
    }
  };

  return (
    <div className="w-52 bg-white p-3 rounded-md shadow-md overflow-hidden">
      <div className="w-full h-32 bg-sky-300 rounded-md">
        <img className="w-full h-full object-cover" src={image} alt={name} />
      </div>
      <div className="w-full p-3 bg-zinc-200">
        <h3 className="text-xl font-semibold">{name}</h3>
        <h5 className="text-xs text-gray-500">{profession}</h5>
        <button 
          onClick={handleButtonClick} 
          className="px-3 py-1 text-sm text-zinc-200 bg-blue-500 rounded-md mt-3 hover:bg-blue-400 transition-all"
        >
          {friends ? "Remove friend" : "Add friend"}
        </button>
      </div>
    </div>
  );
}

export default Card;
