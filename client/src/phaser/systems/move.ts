import { Has, defineEnterSystem, defineSystem, getComponentValueStrict, EntityIndex } from "@latticexyz/recs";
import { PhaserLayer } from "..";
import { tileCoordToPixelCoord } from "@latticexyz/phaserx";
import { Animations, POSITION_OFFSET, TILE_HEIGHT, TILE_WIDTH } from "../constants";

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

    defineEnterSystem(world, [Has(Position)], ({ entity }: any) => {
        const playerObj = objectPool.get(entity.toString(), "Sprite");

        playerObj.setComponent({
            id: 'animation',
            once: (sprite: any) => {
                sprite.play(Animations.SwordsmanIdle);
            }
        });
    });

    defineSystem(world, [Has(Position)], ({ entity }: any) => {

        const position = getComponentValueStrict(Position, entity.toString());

        const offsetPosition = { x: position.x, y: position.y };

        const pixelPosition = tileCoordToPixelCoord(offsetPosition, TILE_WIDTH, TILE_HEIGHT);

        const player = objectPool.get(entity.toString(), "Sprite")

        player.setComponent({
            id: 'position',
            once: (sprite: any) => {

                console.log("sprite", sprite)
                sprite.setPosition(pixelPosition?.x, pixelPosition?.y);

                camera.centerOn(pixelPosition?.x, pixelPosition?.y);
            }
        })

    });
};