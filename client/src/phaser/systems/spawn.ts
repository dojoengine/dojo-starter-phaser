import { defineComponentSystem } from "@latticexyz/recs";
import { PhaserLayer } from "..";
import { Animations } from "../constants";

export const spawn = (layer: PhaserLayer) => {
    const {
        game,
        world,
        scenes: {
            Main: { phaserScene, config },
        },
        networkLayer: {
            systemCalls: { spawn },
            components: { Moves, Position },
            account,
        },
    } = layer;

    const soldier = phaserScene.add
        .sprite(0, 0, "soldier")
        .play(Animations.SwordsmanIdle)
        .setPosition(0, 0)
        .setOrigin(0, 0);

    soldier.setPosition(0, 0);

    // Every time the counter changes, update the soldier
    defineComponentSystem(world, Position, ({ value }) => {
        const [currentValue] = value;

        if (currentValue) {
            soldier.setPosition(currentValue.x, currentValue.y);
        }
    });
};
