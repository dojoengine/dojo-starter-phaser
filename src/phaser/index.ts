import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'
import { NetworkLayer } from '../dojo/createNetworkLayer';
import { registerSystems } from './systems/registerSystems';

export type PhaserLayer = Awaited<ReturnType<typeof createPhaserLayer>>;

type Props = {
    networkLayer: NetworkLayer;
};

export const createPhaserLayer = ({ networkLayer }: Props) => {

    const config: Phaser.Types.Core.GameConfig = {
        type: Phaser.AUTO,
        parent: 'game',
        backgroundColor: '#282c34',
        scale: {
            mode: Phaser.Scale.ScaleModes.RESIZE,
            width: window.innerWidth,
            height: window.innerHeight,
        },
        physics: {
            default: 'arcade',
            arcade: {
                gravity: { y: 200 },
            },
        },
        scene: [HelloWorldScene],
    }

    const components = {};

    const layer = {
        game: new Phaser.Game(config),
        networkLayer,
        components
    }

    registerSystems(layer);

    return layer
}