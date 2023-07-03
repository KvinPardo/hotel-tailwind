import React, { useContext } from "react";
// components
import CheckIn from "./CheckIn";
import AdultsDropdown from "./AdultsDropdown";
import KidsDropdown from "./KidsDropdown";
import CheckOut from "./CheckOut";
import { RoomContext } from "../context/RoomContext";

const BookForm = () => {

  const { handleClick } = useContext(RoomContext)

  return (
    <form className="h-[300px] w-full lg:h-[70px]">
      <div className="flex flex-col w-full h-full lg:flex-row">
        <div className="flex-1 border">
          <CheckIn />
        </div>
        <div className="flex-1 border">
          <CheckOut />
        </div>
        <div className="flex-1 border">
          <AdultsDropdown />
        </div>
        <div className="flex-1 border">
          <KidsDropdown />
        </div>
        {/* button */}
        <button 
          onClick={(e) => handleClick(e)}
          type='submit' className="btn btn-primary">Check Now</button>
      </div>
    </form>
  );
};

export default BookForm;
