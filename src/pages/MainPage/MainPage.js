import { MainContainer } from "./MainPage.style.js";
import ElevatorInside from "../../components/ElevatorInside/ElevatorInside.js";
import WaitingScreen from "../../components/WaitingScreen/WaitingScreen.js";
import { useState } from "react";

const MainPage = () => {
    const [targetFloor, setTargetFloor] = useState(null);
    return (
        <>
            <ElevatorInside onSelectFloor={setTargetFloor} />
            {targetFloor} 대기 화면
            <WaitingScreen floor={targetFloor} />
        </>
    );
};

export default MainPage;
