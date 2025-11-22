import { useEffect, useState } from "react";
import {
    Container,
    Title,
    WaitingArea,
    PersonGroup,
    HumanImage,
    SpeechBubble,
    ElevatorDoor,
    LeftDoor,
    RightDoor,
    InsidePeople,
    InsideHuman,
    FloorDisplay,
    LedLeft,
    LedRight,
    Divider,
    Arrow,
    SidePanel,
    SideButton,
    LedSensor,
} from "./WaitingScreen.style";

function WaitingScreen({ floor }) {
    const [moveBack, setMoveBack] = useState(false);
    const [exitMove, setExitMove] = useState(false);
    const [cycle, setCycle] = useState(0);
    const [displayFloor, setDisplayFloor] = useState(null);
    const [ledOn, setLedOn] = useState(false);
    const [doorOpen, setDoorOpen] = useState(false);
    const [arrived, setArrived] = useState(false);

    useEffect(() => {
        if (floor !== null) {
            let start = floor + 2;
            setDisplayFloor(start);
            setArrived(false);
            setMoveBack(false);
            setLedOn(false);
            setExitMove(false);
            setDoorOpen(false);

            const interval = setInterval(() => {
                start -= 1;
                setDisplayFloor(start);

                if (start === floor + 1) {
                    setLedOn(true);
                    setMoveBack(true);
                }

                if (start === floor) {
                    clearInterval(interval);
                    setArrived(true); // ✅ 도착
                    setTimeout(() => {
                        setExitMove(true);
                    }, 900);
                }
            }, 900);

            return () => clearInterval(interval);
        }
    }, [floor]);

    useEffect(() => {
        if (arrived) {
            const timer = setTimeout(() => {
                setDoorOpen(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, [arrived]);

    return (
        <Container>
            <Title>{floor !== null ? `${floor}층 대기 화면` : "대기 화면"}</Title>

            <WaitingArea>
                <FloorDisplay>
                    <LedLeft>
                        <Arrow>↓</Arrow>
                        {displayFloor !== null ? `${displayFloor}F` : "--"}
                    </LedLeft>
                    <Divider />
                    {floor !== null && !arrived && <LedRight>하차 예정</LedRight>}
                </FloorDisplay>

                <div style={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
                    <ElevatorDoor>
                        <LeftDoor $open={doorOpen} />
                        <RightDoor $open={doorOpen} />
                    </ElevatorDoor>
                    <SidePanel>
                        <SideButton>▲</SideButton>
                        <SideButton>▼</SideButton>
                        <LedSensor $on={ledOn} />
                    </SidePanel>
                </div>

                {/* 내부 사람들 */}
                <InsidePeople $show={doorOpen}>
                    {[...Array(12)].map((_, i) => (
                        <InsideHuman
                            key={`${cycle}-${i}`}
                            src="/human.png"
                            alt="inside"
                            $exit={exitMove && i >= 8}
                            $delay={`${(i - 8) * 0.6}s`}
                        />
                    ))}
                </InsidePeople>

                {/* 바깥 대기자 */}
                <PersonGroup $moveBack={moveBack}>
                    <HumanImage src="/human.png" alt="person" />
                </PersonGroup>
            </WaitingArea>
        </Container>
    );
}

export default WaitingScreen;
