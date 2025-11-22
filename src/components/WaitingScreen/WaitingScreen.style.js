import styled, { keyframes, css } from "styled-components";

const exitLeft = keyframes`
  0% {
    transform: translate(0, 0) scale(0.9);
    opacity: 1;
  }

  25% {
    transform: translate(0, 70px) scale(2); /* 앞으로 오며 살짝 커짐 */
  }

  45% {
    transform: translate(-20px, 75px) scale(2);
  }

  70% {
    transform: translate(-80px, 55px) scale(1.7);
  }

  100% {
    transform: translate(-150px, 50px) scale(1.5);
    opacity: 0;
  }
`;

const glow = keyframes`
  0% {
    box-shadow:
      0 0 30px rgba(255, 60, 60, 0.8),
      0 0 80px rgba(255, 40, 40, 0.7),
      0 0 160px rgba(255, 30, 30, 0.6),
      0 0 260px rgba(255, 20, 20, 0.4);
  }

  50% {
    box-shadow:
      0 0 70px rgba(255, 0, 0, 1),
      0 0 180px rgba(255, 0, 0, 1),
      0 0 360px rgba(255, 0, 0, 0.9),
      0 0 550px rgba(255, 0, 0, 0.85);
  }

  100% {
    box-shadow:
      0 0 40px rgba(255, 50, 50, 0.8),
      0 0 130px rgba(255, 30, 30, 0.7),
      0 0 260px rgba(255, 20, 20, 0.6),
      0 0 420px rgba(255, 10, 10, 0.5);
  }
`;

export const Container = styled.div`
    margin-top: 20px;
    padding: 20px;
    background: #f2f2f2;
    border-radius: 12px;
    width: 100%;
    height: 100vh;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

export const HumanImage = styled.img`
    width: 110px;
`;

export const SpeechBubble = styled.div`
    position: absolute;
    top: -55px; /* ✅ 위로 조금 더 */
    left: 80px;
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
    height: 320px; /* ✅ 260 → 320 */
    background: #dcdcdc;
    border-radius: 14px;
    overflow: hidden;
`;

/* 엘리베이터 문 */
export const ElevatorDoor = styled.div`
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    width: 240px; /* ✅ 180 → 240 */
    height: 190px; /* ✅ 150 → 190 */
    display: flex;
    overflow: hidden;
    border: 5px solid #555;
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
    top: 65px;
    left: 50%;
    transform: translateX(-50%);
    width: 190px;
    height: 140px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 6px;
    z-index: 10;
    overflow: visible;

    opacity: ${({ $visible }) => ($visible ? 1 : 0)};
    transform: ${({ $visible }) => ($visible ? "translateX(-50%) scale(1)" : "translateX(-50%) scale(0.95)")};

    pointer-events: none;
    transition: opacity 0.6s ease, transform 0.6s ease;
`;

export const InsideHuman = styled.img`
    width: 40px;

    ${({ $exit, $delay }) =>
        $exit &&
        css`
            animation: ${exitLeft} 3.5s ease-in-out forwards;
            animation-delay: ${$delay};
        `}
`;

export const FloorDisplay = styled.div`
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
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
    top: 90px; /* ✅ 문 중간 기준으로 내려줌 */
    left: calc(50% + 140px); /* ✅ 문 오른쪽에 붙게 */

    background: #555;
    border-radius: 14px;
    padding: 18px 12px;
    display: flex;
    flex-direction: column;
    gap: 14px;

    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.6), 0 4px 8px rgba(0, 0, 0, 0.4);
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

export const LedSensor = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    position: absolute;
    bottom: -25px;
    left: 50%;
    transform: translateX(-50%);

    background: ${({ $on }) => ($on ? "#ff1c1c" : "#330000")};

    opacity: ${({ $on }) => ($on ? 1 : 0.2)};
    filter: ${({ $on }) => ($on ? "blur(1px)" : "none")};

    box-shadow: ${({ $on }) =>
        $on
            ? `
      0 0 40px rgba(255, 0, 0, 0.9),
      0 0 120px rgba(255, 0, 0, 0.8),
      0 0 260px rgba(255, 0, 0, 0.7),
      0 0 420px rgba(255, 0, 0, 0.6)
    `
            : "none"};

    transition: all 0.8s ease;
    animation: ${({ $on }) => ($on ? glow : "none")} 1.3s ease-in-out infinite;

    &::before {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 240px;
        height: 240px;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(255, 0, 0, 0.5), transparent 70%);
        opacity: ${({ $on }) => ($on ? 1 : 0)};
        transition: opacity 0.8s ease;
        pointer-events: none;
    }
`;

export const LedRightWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;
