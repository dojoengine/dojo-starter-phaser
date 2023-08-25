import styled from "styled-components";
import { store } from "../store/store";
import { PositionDisplay } from "./PositionDisplay";
import { SpawnBtn } from "./SpawnBtn";
// import { Controls } from "./Controls";
// import { LoadingScreen } from "./LoadingScreen";
import { Controls } from "./Controls";
import { Wrapper } from "./Wrapper";
// import { Title } from "./Title";

export const UI = () => {
    const layers = store((state) => {
        return {
            networkLayer: state.networkLayer,
            phaserLayer: state.phaserLayer,
        };
    });

    if (!layers.networkLayer || !layers.phaserLayer) return <></>;

    return (
        <Wrapper>
            {/* <LoadingScreen />
      <Controls />

      <Title /> */}
            <Controls />
            <HeaderContainer>
                <SpawnBtn />
                <PositionDisplay />
            </HeaderContainer>
        </Wrapper>
    );
};

const HeaderContainer = styled.div`
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    flex-direaction: row;
    gap: 20px;
`;
