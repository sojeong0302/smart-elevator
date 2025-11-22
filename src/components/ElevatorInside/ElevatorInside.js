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
            <Title>엘레베이터 내부</Title>
            <Panel>
                <Display>
                    <span className="arrow">▼</span>
                    <span className="floor">8</span>
                </Display>

                <ButtonGrid>
                    {[7, 8, 5, 6, 3, 4, 1, 2].map((floor) => (
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
