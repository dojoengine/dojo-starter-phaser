import { PhaserLayer } from "..";

export const move = (layer: PhaserLayer) => {
    const {
        game,
        world,
        scenes: {
            Main: { phaserScene, config },
        },
        networkLayer: {
            systemCalls: { spawn },
            account,
        },
    } = layer;
};
