import { useCallback, useMemo, useRef, useState } from "react";
import { createPhaserLayer } from "../phaser";
import { NetworkLayer } from "../dojo/createNetworkLayer";
import { phaserConfig } from "../phaser/configurePhaser";

type Props = {
    networkLayer: NetworkLayer | null;
};

const createContainer = () => {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "all";
    container.style.overflow = "hidden";
    return container;
};


export const usePhaserLayer = ({ networkLayer }: Props) => {
    const parentRef = useRef<HTMLElement | null>(null);
    const [{ width, height }, setSize] = useState({ width: 0, height: 0 });

    const { phaserLayer, container } = useMemo(() => {
        if (!networkLayer) return { container: null, phaserLayer: null };

        const container = createContainer();
        if (parentRef.current) {
            parentRef.current.appendChild(container);
        }

        return {
            container,
            phaserLayer: createPhaserLayer(networkLayer, {
                ...phaserConfig,
                scale: {
                    ...phaserConfig.scale,
                    parent: container,
                    mode: Phaser.Scale.NONE,
                    width,
                    height,
                },
            }),
        };

        // We don't want width/height to recreate phaser layer, so we ignore linter
    }, [networkLayer]);

    const ref = useCallback(
        (el: HTMLElement | null) => {
            parentRef.current = el;
            if (container) {
                if (parentRef.current) {
                    parentRef.current.appendChild(container);
                } else {
                    container.remove();
                }
            }
        },
        [container]
    );

    return useMemo(() => ({ ref, phaserLayer }), [ref, phaserLayer]);
}