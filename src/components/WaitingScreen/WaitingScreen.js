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
    LedRightWrapper,
} from "./WaitingScreen.style";

function WaitingScreen({ floor }) {
    const [moveBack, setMoveBack] = useState(false);
    const [exitMove, setExitMove] = useState(false);
    const [cycle, setCycle] = useState(0);
    const [displayFloor, setDisplayFloor] = useState(null);
    const [ledOn, setLedOn] = useState(false);
    const [doorOpen, setDoorOpen] = useState(false);
    const [arrived, setArrived] = useState(false);
    const [waitingCount, setWaitingCount] = useState(0);

    useEffect(() => {
        if (floor !== null) {
            let start = floor + 5;
            setDisplayFloor(start);
            setArrived(false);
            setMoveBack(false);
            setLedOn(false);
            setExitMove(false);
            setDoorOpen(false);

            const interval = setInterval(() => {
                start -= 1;
                setDisplayFloor(start);

                setWaitingCount(Math.floor(Math.random() * 6) + 10);

                if (start === floor + 1) {
                    setLedOn(true);
                }

                if (start === floor) {
                    clearInterval(interval);
                    setArrived(true);
                    setWaitingCount(12);
                }
            }, 900);

            return () => clearInterval(interval);
        }
    }, [floor]);

    useEffect(() => {
        if (doorOpen) {
            const timer = setTimeout(() => {
                setExitMove(true);
            }, 400);

            return () => clearTimeout(timer);
        }
    }, [doorOpen]);

    const speak = (text) => {
        const msg = new SpeechSynthesisUtterance(text);
        msg.lang = "ko-KR";
        msg.rate = 1;
        msg.pitch = 1;

        // ✅ 음성 시작할 때 뒤로 물러나게
        // ✅ 음성 시작할 때 뒤로 물러나게 + LED 깜빡
        msg.onstart = () => {
            setMoveBack(true);

            setLedOn(true); // 켜짐
            setTimeout(() => {
                setLedOn(false); // 꺼짐
            }, 300);

            setTimeout(() => {
                setLedOn(true); // 다시 켜짐 (유지)
            }, 600);
        };

        // ✅ 음성 끝난 후 문 열기
        msg.onend = () => {
            setDoorOpen(true);
        };

        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(msg);
    };

    useEffect(() => {
        if (arrived) {
            speak("내리실 승객이 먼저 하차합니다. 뒤로 물러나 주세요.");
        }
    }, [arrived]);

    return (
        <Container>
            <Title>{floor !== null ? `${floor}층 대기 화면` : "대기 화면"}</Title>

            <WaitingArea>
                <FloorDisplay>
                    <LedLeft>
                        <span style={{ fontSize: "13px", marginRight: "6px" }}>15/{waitingCount}</span>
                        {displayFloor !== null ? `${displayFloor}F` : "--"}
                    </LedLeft>

                    <Divider />

                    <LedRightWrapper>
                        {floor !== null && <LedRight>하차 예정</LedRight>}
                        <LedSensor $on={ledOn} />
                    </LedRightWrapper>
                </FloorDisplay>

                <div style={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
                    <ElevatorDoor>
                        <LeftDoor $open={doorOpen} />
                        <RightDoor $open={doorOpen} />
                    </ElevatorDoor>
                    <SidePanel>
                        <SideButton>▲</SideButton>
                        <SideButton>▼</SideButton>
                        {/* <LedSensor $on={ledOn} /> */}
                    </SidePanel>
                </div>

                {/* 내부 사람들 */}
                <InsidePeople $visible={doorOpen}>
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
