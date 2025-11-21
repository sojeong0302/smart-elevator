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

    useEffect(() => {
        if (floor !== null) {
            const timer = setTimeout(() => {
                setMoveBack(true);
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            setMoveBack(false);
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
                <SidePanel>
                    <SideButton>▲</SideButton>
                    <SideButton>▼</SideButton>
                </SidePanel>
                {/* 엘리베이터 문 */}
                <ElevatorDoor>
                    <LeftDoor $open={moveBack} />
                    <RightDoor $open={moveBack} />
                </ElevatorDoor>

                {/* 엘리베이터 내부 사람들 */}
                <InsidePeople $show={moveBack}>
                    {[...Array(12)].map((_, i) => (
                        <InsideHuman key={i} src="/human.png" alt="inside" />
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
