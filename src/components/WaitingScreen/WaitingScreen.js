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
} from "./WaitingScreen.style";

function WaitingScreen({ floor }) {
    const [moveBack, setMoveBack] = useState(false);
    const [exitMove, setExitMove] = useState(false);
    const [cycle, setCycle] = useState(0);

    useEffect(() => {
        if (floor !== null) {
            // ✅ 초기화
            setMoveBack(false);
            setExitMove(false);

            const resetTimer = setTimeout(() => {
                setCycle((prev) => prev + 1);
                setMoveBack(true); // 문 열림
            }, 300);

            const exitTimer = setTimeout(() => {
                setExitMove(true); // 사람 내려감
            }, 1300);

            return () => {
                clearTimeout(resetTimer);
                clearTimeout(exitTimer);
            };
        }
    }, [floor]);

    return (
        <Container>
            <Title>{floor !== null ? `${floor}층 대기 화면` : "대기 화면"}</Title>

            <WaitingArea>
                <FloorDisplay>
                    <LedLeft>
                        <Arrow>↓</Arrow>
                        {floor !== null ? `${floor}F` : "--"}
                    </LedLeft>
                    <Divider />
                    {floor !== null && <LedRight>하차 예정</LedRight>}
                </FloorDisplay>

                <div style={{ position: "relative", width: "fit-content", margin: "0 auto" }}>
                    <ElevatorDoor>
                        <LeftDoor $open={moveBack} />
                        <RightDoor $open={moveBack} />
                    </ElevatorDoor>

                    <SidePanel>
                        <SideButton>▲</SideButton>
                        <SideButton>▼</SideButton>
                    </SidePanel>
                </div>

                {/* 내부 사람들 */}
                <InsidePeople $show={moveBack}>
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
                    {floor !== null && <SpeechBubble>곧 사람이 내리겠네! 조금 뒤로 가야겠다...</SpeechBubble>}
                </PersonGroup>
            </WaitingArea>
        </Container>
    );
}

export default WaitingScreen;
