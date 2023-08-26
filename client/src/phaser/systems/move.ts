import { Has, defineComponentSystem, defineSystem, getComponentValueStrict } from "@latticexyz/recs";
import { PhaserLayer } from "..";
import { Direction } from "../../dojo/createSystemCalls";

export const move = (layer: PhaserLayer) => {

    const {
        world,
        scenes: {
            Main: { objectPool, phaserScene, input },
        },
        networkLayer: {
            systemCalls: { move },
            components: { Position },
            account
        },
    } = layer;

    input.onKeyPress(
        keys => keys.has("W"),
        () => {
            move(account, Direction.Up);
        });

    input.onKeyPress(
        keys => keys.has("A"),
        () => {
            move(account, Direction.Left);
        }
    );

    input.onKeyPress(
        keys => keys.has("S"),
        () => {
            move(account, Direction.Down);
        }
    );

    input.onKeyPress(
        keys => keys.has("D"),
        () => {
            move(account, Direction.Right);
        }
    );

    defineSystem(world, [Has(Position)], ({ entity }) => {
        const position = getComponentValueStrict(Position, entity);

        console.log(entity.toString())

        const player = objectPool.get(entity, "Sprite")

        player.setComponent({
            id: 'position',
            once: (sprite) => {
                sprite.setPosition(position?.x, position?.y);
                // camera.centerOn(currentValue?.x!, currentValue?.y!);
            }
        })

    });
};