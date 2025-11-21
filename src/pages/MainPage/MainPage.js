import { MainContainer } from "./MainPage.style.js";
import ElevatorInside from "../../components/ElevatorInside/ElevatorInside.js";
import WaitingScreen from "../../components/WaitingScreen/WaitingScreen.js";
import { useState } from "react";

const MainPage = () => {
    const [targetFloor, setTargetFloor] = useState(null);
    return (
        <MainContainer>
            <ElevatorInside onSelectFloor={setTargetFloor} />
            <WaitingScreen floor={targetFloor} />
        </MainContainer>
    );
};

export default MainPage;
