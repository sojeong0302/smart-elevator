import styled from "styled-components";

export const Container = styled.div`
    padding: 1%;
    background: linear-gradient(90deg, #999, #cfcfcf, #999);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`;

export const Panel = styled.div`
    background: repeating-linear-gradient(90deg, #8d8d8d 0px, #8d8d8d 2px, #9e9e9e 4px);
    padding: 30px 20px;
    border-radius: 8px;
    width: 300px;
`;
export const Title = styled.h2`
    text-align: center;
    margin-bottom: 15px;
`;

/* LCD 층 표시 */
export const Display = styled.div`
    background: #020202;
    color: #ff0000ff;
    text-align: center;
    padding: 14px;
    margin-bottom: 25px;
    font-size: 28px;
    letter-spacing: 4px;
    border-radius: 4px;

    font-family: "Orbitron", monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    box-shadow: inset 0 0 10px rgba(0, 255, 150, 0.4);

    .arrow {
        font-size: 20px;
        opacity: 0.8;
    }

    .floor {
        font-size: 32px;
        font-weight: bold;
    }
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
    position: relative;

    background: radial-gradient(circle at 30% 30%, #f2f2f2, #8e8e8e);
    color: #333;

    box-shadow: inset 0 0 6px rgba(255, 255, 255, 0.6), inset 0 -6px 10px rgba(0, 0, 0, 0.4),
        0 6px 6px rgba(0, 0, 0, 0.4);

    transition: all 0.15s ease;

    ${({ $active }) =>
        $active &&
        `
      background: radial-gradient(circle, #ff0000, #b00000);
      color: white;
      box-shadow:
        0 0 12px rgba(255,0,0,0.9),
        inset 0 0 10px rgba(0,0,0,0.8);
  `}

    &:active {
        transform: translateY(4px) scale(0.97);
        box-shadow: inset 0 4px 12px rgba(0, 0, 0, 0.8);
    }

    /* ✅ LED 링 */
    &::after {
        content: "";
        position: absolute;
        inset: 4px;
        border-radius: 50%;
        border: 2px solid transparent;
        transition: 0.2s;
    }

    ${({ $active }) =>
        $active &&
        `
      &::after {
        border-color: rgba(255,50,50,0.9);
        box-shadow: 0 0 8px rgba(255,0,0,0.8);
      }
  `}
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
