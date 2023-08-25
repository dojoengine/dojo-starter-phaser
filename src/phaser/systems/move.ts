import { PhaserLayer } from "..";
import { Animations, Sprites } from "../constants";

export const move = (layer: PhaserLayer) => {

    const {
        world,
        scenes: {
            Main: { phaserScene, config },
        },
        networkLayer: {
            systemCalls: { spawn },
            account
        },
    } = layer;
    const soliderSprite = config.sprites[Sprites.Soldier];
    const soldier = phaserScene.add
        .sprite(0, 0, "soldier")
        .play(Animations.SwordsmanIdle)
        .setPosition(5, 5)
        .setInteractive({
            useHandCursor: true,
        })
        .setOrigin(5, 5);

    let tween: Phaser.Tweens.Tween | undefined;

    const particles = phaserScene.add.particles(soliderSprite.assetKey);

    // const emitter = particles.createEmitter({
    //     x: soldier.x,
    //     y: soldier.y,
    //     speed: { min: -400, max: 400 },
    //     angle: { min: 0, max: 360 },
    //     scale: { start: 0.5, end: 0 },
    //     blendMode: "SCREEN",
    //     lifespan: 600,
    //     gravityY: 800,
    //     quantity: 20,
    // });

    soldier.on("pointerdown", async () => {
        if (tween) return;

        spawn(account);

        tween = phaserScene.add.tween({
            targets: soldier,
            duration: 250,
            alpha: 0.5,
            yoyo: true,
            repeat: -1,
            ease: "Sine.easeInOut",
        });
    });



};