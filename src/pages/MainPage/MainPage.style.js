import styled from "styled-components";

export const MainContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${(props) => (props.$switchState ? "#9bd1e5" : "#000000")};
`;
