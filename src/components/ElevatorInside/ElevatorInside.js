import { useState } from "react";
import { Container, Title, Panel, Display, ButtonGrid, FloorButton, ControlButton } from "./ElevatorInside.style.js";

function ElevatorInside({ onSelectFloor }) {
    const [activeFloor, setActiveFloor] = useState(null);

    const handleClick = (floor) => {
        setActiveFloor(floor);
        onSelectFloor(floor);
    };

    return (
        <Container>
            <Title>엘리베이터 내부</Title>

            <Panel>
                <Display>현재 위치 : 3층</Display>

                <ButtonGrid>
                    {[7, 6, 5, 4, 3, 2, 1, 0].map((floor) => (
                        <FloorButton key={floor} $active={activeFloor === floor} onClick={() => handleClick(floor)}>
                            {floor}
                        </FloorButton>
                    ))}

                    <ControlButton>◀ ▶</ControlButton>
                    <ControlButton>▶ ◀</ControlButton>
                </ButtonGrid>
            </Panel>
        </Container>
    );
}

export default ElevatorInside;
