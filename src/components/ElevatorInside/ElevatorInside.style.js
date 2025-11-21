import styled from "styled-components";

export const Container = styled.div`
    width: 360px;
    padding: 25px;
    background: linear-gradient(90deg, #999, #cfcfcf, #999);
    border-radius: 10px;
`;

export const Title = styled.h2`
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
`;

export const Panel = styled.div`
    background: repeating-linear-gradient(90deg, #8d8d8d 0px, #8d8d8d 2px, #9e9e9e 4px);
    padding: 30px 20px;
    border-radius: 8px;
`;

/* LCD 층 표시 */
export const Display = styled.div`
    background: black;
    color: #00ff88;
    text-align: center;
    padding: 10px;
    margin-bottom: 25px;
    font-size: 18px;
    letter-spacing: 2px;
    border-radius: 4px;
    font-family: "Orbitron", monospace;
`;

/* 버튼 정렬 */
export const ButtonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 18px 30px;
    justify-items: center;
`;

/* 🔘 스테인리스 버튼 */
export const FloorButton = styled.button`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    font-size: 20px;
    font-weight: bold;
    border: 2px solid #bdbdbd;
    cursor: pointer;
    background: radial-gradient(circle at 30% 30%, #f2f2f2, #9e9e9e);
    color: #333;

    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.6), 0 4px 6px rgba(0, 0, 0, 0.5);

    transition: 0.2s;

    ${({ $active }) =>
        $active &&
        `
    background: radial-gradient(circle, #ffeb3b, #ff9800);
    box-shadow: 0 0 12px #ff9800;
  `}

    &:active {
        transform: translateY(2px);
        box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.6);
    }
`;

/* 🔓 열림 / 🔒 닫힘 버튼 */
export const ControlButton = styled.button`
    width: 72px;
    height: 72px;
    border-radius: 50%;
    border: 2px solid #bdbdbd;
    font-size: 16px;
    cursor: pointer;

    background: radial-gradient(circle at 30% 30%, #f2f2f2, #9e9e9e);
    color: #444;

    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.6), 0 4px 6px rgba(0, 0, 0, 0.5);

    &:active {
        transform: translateY(2px);
    }
`;
