import { PhaserLayer } from "..";
import { Animations } from "../constants";

export const spawn = (layer: PhaserLayer) => {

    const {
        game,
        world,
        scenes: {
            Main: { phaserScene, input },
        },
        networkLayer: {
            systemCalls: { spawn, move },
            components: { Position },
            account
        },
    } = layer;

    input.onKeyPress(
        keys => keys.has("SPACE"),
        () => {
            spawn(account);
            phaserScene.add
                .sprite(0, 0, "soldier")
                .play(Animations.SwordsmanIdle)
                .setPosition(10, 10)
                .setInteractive({
                    useHandCursor: true,
                })
                .setOrigin(0, 0).setScale(10);
        });
};