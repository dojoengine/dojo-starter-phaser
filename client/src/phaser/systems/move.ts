import { Has, defineEnterSystem, defineSystem, getComponentValueStrict } from "@latticexyz/recs";
import { PhaserLayer } from "..";
import { tileCoordToPixelCoord } from "@latticexyz/phaserx";
import { Animations, TILE_HEIGHT, TILE_WIDTH } from "../constants";

export const move = (layer: PhaserLayer) => {

    const {
        world,
        scenes: {
            Main: { objectPool, camera },
        },
        networkLayer: {
            components: { Position }
        },
    } = layer;

    defineEnterSystem(world, [Has(Position)], ({ entity }) => {
        const playerObj = objectPool.get(entity, "Sprite");

        playerObj.setComponent({
            id: 'animation',
            once: (sprite) => {
                sprite.play(Animations.SwordsmanIdle);
            }
        });
    });

    defineSystem(world, [Has(Position)], ({ entity }) => {
        const position = getComponentValueStrict(Position, entity);
        const pixelPosition = tileCoordToPixelCoord(position, TILE_WIDTH, TILE_HEIGHT);
        console.log(entity.toString())
        console.log(pixelPosition?.x, pixelPosition?.y)

        const player = objectPool.get(entity, "Sprite")

        player.setComponent({
            id: 'position',
            once: (sprite) => {
                sprite.setPosition(pixelPosition?.x, pixelPosition?.y);

                camera.centerOn(pixelPosition?.x!, pixelPosition?.y!);
            }
        })

    });
};