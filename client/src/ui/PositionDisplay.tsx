import { useComponentValue, useEntityQuery } from "@dojoengine/react";
import { Has } from "@latticexyz/recs";
import { useDojo } from "../hooks/useDojo";

export const PositionDisplay = () => {
    const {
        networkLayer: {
            components: { Position, Moves },
        },
    } = useDojo();

    const entity = useEntityQuery([Has(Position), Has(Moves)]);
    const position = useComponentValue(Position, entity[0]);

    return position && <div>{`(${position.x}, ${position.y})`}</div>;
};
