import React, { useState } from "react";
import Card from "./components/Card";

function Abcd() {
  const data = [
    // {name: "Riya", profession: "Coder", image: "https://unsplash.com/photos/a-woman-with-long-hair-and-a-black-shirt-Ud4bLEy4gC0" ,friends:false},
    // {name: "Piya", profession: "Painter", image: "https://unsplash.com/photos/woman-raising-her-hand-holding-pHpwxToAl1c" ,friends:false},
    {name: "Siya", profession: "Reader", image: "https://images.unsplash.com/photo-1614743911790-86087e88763c?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: "Tiya", profession: "Coder", image: "https://images.unsplash.com/photo-1614743911790-86087e88763c?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: "piya", profession: "Cook", image: "https://images.unsplash.com/photo-1514498985748-90e19faa521d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: "Riya", profession: "Writer", image: "https://images.unsplash.com/photo-1514498985748-90e19faa521d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: "Diya", profession: "Painter", image: "https://images.unsplash.com/photo-1514498985748-90e19faa521d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
    {name: "Fiya", profession: "Content writer", image: "https://images.unsplash.com/photo-1514498985748-90e19faa521d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",friends:false},
  ];

  const [realdata,setRealData] =useState(data);
  const handleFriendsButton = (cardindex) =>{
    setRealData((pervious)=>{
return pervious.map((item,index) =>{
  if(index === cardindex){
    return {...item, friends:!item.friends}
  }
  return item;
})
    })
  }

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-3 items-center justify-center">
        {realdata.map((item, index) => (
          <Card key={index} index={index} handleClick={handleFriendsButton} values={item} />
        ))}
      </div>
    </>
  );
}

export default Abcd;
