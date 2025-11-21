import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 12px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

export const HumanImage = styled.img`
    width: 80px;
`;

export const SpeechBubble = styled.div`
    position: absolute;
    top: -40px;
    left: 60px;
    background: white;
    padding: 10px 14px;
    border-radius: 12px;
    font-size: 13px;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
    width: 140px;
    &::after {
        content: "";
        position: absolute;
        bottom: -10px;
        left: 10px;
        border-width: 10px 10px 0;
        border-style: solid;
        border-color: white transparent transparent;
    }
`;

export const WaitingArea = styled.div`
    position: relative;
    height: 260px;
    background: #dcdcdc;
    border-radius: 10px;
    overflow: hidden;
`;

/* 엘리베이터 문 */
export const ElevatorDoor = styled.div`
    position: absolute;
    top: 40px;
    left: 50%;
    transform: translateX(-50%);
    width: 180px;
    height: 150px;
    display: flex;
    overflow: hidden;
    border: 4px solid #555;
    background: #777;
`;

export const DoorPanel = styled.div`
    flex: 1;
    background: linear-gradient(to right, #888, #aaa);
    transition: transform 1s ease;
`;

export const LeftDoor = styled(DoorPanel)`
    transform: ${({ $open }) => ($open ? "translateX(-100%)" : "translateX(0)")};
`;

export const RightDoor = styled(DoorPanel)`
    transform: ${({ $open }) => ($open ? "translateX(100%)" : "translateX(0)")};
`;

/* 사람 위치 */
export const PersonGroup = styled.div`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: ${({ $moveBack }) => ($moveBack ? "translate(-50%, 40px) scale(0.95)" : "translate(-50%, 0) scale(1)")};
    transition: all 0.8s ease;
`;
export const InsidePeople = styled.div`
    position: absolute;
    top: 55px;
    left: 50%;
    transform: translateX(-50%);
    width: 140px;
    height: 110px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 4px;
    opacity: ${({ $show }) => ($show ? 1 : 0)};
    transition: opacity 0.8s ease;
    z-index: 1;
`;

export const InsideHuman = styled.img`
    width: 30px;
`;

export const FloorDisplay = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 160px;
    height: 40px;
    background: #0f0f0f;
    color: #ff3b3b;
    font-weight: bold;
    font-family: "Orbitron", monospace;
    display: flex;
    align-items: center;
    padding: 0 14px;
    border-radius: 6px;
    letter-spacing: 2px;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.8);
`;

/* 왼쪽 : 층 정보 */
export const LedLeft = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
`;

/* 구분선 */
export const Divider = styled.div`
    width: 2px;
    height: 24px;
    background: #444;
    margin: 0 12px;
`;

/* 오른쪽 : 상태 메시지 */
export const LedRight = styled.div`
    font-size: 13px;
    color: #ff4d4f;
`;

/* 방향 화살표 */
export const Arrow = styled.span`
    font-size: 18px;
    animation: blink 1s infinite;

    @keyframes blink {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.3;
        }
        100% {
            opacity: 1;
        }
    }
`;

export const SidePanel = styled.div`
    position: absolute;
    left: calc(50% + 110px); /* 엘리베이터 바로 옆 */
    top: 70px;
    background: #555;
    border-radius: 10px;
    padding: 15px 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6);
`;

/* 버튼 */
export const SideButton = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: radial-gradient(circle at top, #d9d9d9, #8a8a8a);
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 12px; /* ✅ 아이콘 크기만 살짝 축소 */
    font-weight: bold;
    line-height: 1; /* ✅ 핵심: 세로 밀림 방지 */

    cursor: default;
    color: #222;

    box-shadow: inset 2px 2px 4px rgba(255, 255, 255, 0.6), inset -2px -2px 4px rgba(0, 0, 0, 0.6),
        0 3px 6px rgba(0, 0, 0, 0.4);

    &:active {
        transform: scale(0.95);
        box-shadow: inset 1px 1px 2px rgba(0, 0, 0, 0.6);
    }
`;
