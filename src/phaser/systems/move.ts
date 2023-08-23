import { PhaserLayer } from "..";

export const move = (layer: PhaserLayer) => {

    const {
        game,
        networkLayer: { systemCalls: { spawn }, account },

    } = layer;

    spawn(account);

};