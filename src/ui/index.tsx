import React from "react";
import { store } from "../store/store";
// import { Controls } from "./Controls";
// import { LoadingScreen } from "./LoadingScreen";
import { Wrapper } from "./wrapper";
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
        </Wrapper>
    );
};