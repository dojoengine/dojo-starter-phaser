import { PhaserLayer } from "..";
import { Animations, Sprites } from "../constants";

export const move = (layer: PhaserLayer) => {

    const {
        game,
        world,
        scenes: {
            Main: { phaserScene, config },
        },
        networkLayer: {
            systemCalls: { spawn },
            account
        },
    } = layer;

    const soldier = phaserScene.add
        .sprite(0, 0, "soldier")
        .play(Animations.SwordsmanIdle)
        .setPosition(5, 5)
        .setInteractive({
            useHandCursor: true,
        })
        .setOrigin(0, 0);

    let tween: Phaser.Tweens.Tween | undefined;

    phaserScene.input.on("pointerdown", () => {
        spawn(account);
        soldier.setPosition(phaserScene.input.mousePointer.worldX, phaserScene.input.mousePointer.worldY);
    });
};