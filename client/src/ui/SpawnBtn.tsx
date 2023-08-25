import { useDojo } from "../hooks/useDojo";
import { spawn as spawnPhaser } from "../phaser/systems/spawn";
import { ClickWrapper } from "./ClickWrapper";

export const SpawnBtn = () => {
    const {
        networkLayer: {
            account: account,
            systemCalls: { spawn },
        },
        phaserLayer,
    } = useDojo();

    return (
        <ClickWrapper>
            <button
                onClick={() => {
                    spawn(account);
                    spawnPhaser(phaserLayer);
                }}
            >
                Spawn
            </button>
        </ClickWrapper>
    );
};
