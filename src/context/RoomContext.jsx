import React, { createContext, useEffect, useState } from "react";
// data
import { roomData } from "../data";
//  create context
export const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  // console.log(rooms);
  const [adults, setAdults] = useState("1 Adult");
  const [kids, setKids] = useState("0 Kids");
  const [total, setTotal] = useState(0);
  // console.log(Number(adults[0]));
  // console.log(Number(kids[0]));

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  });
  // console.log(total);

  const handleClick = (e) => {
    e.preventDefault();
    // console.log(total);
    // console.log(rooms);

    // filter rooms based on total (persons)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });
    setRooms(newRooms);
  };

  console.log(rooms);

  return (
    <RoomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
        handleClick,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};

export default RoomProvider;
