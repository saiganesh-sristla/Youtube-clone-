import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
  return (
    <div className="w-full ml-5 p-2">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;