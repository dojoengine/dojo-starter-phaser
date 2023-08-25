import { useEffect } from "react";
import { Direction } from "../dojo/createSystemCalls";
import { useDojo } from "../hooks/useDojo";

export const Controls = () => {
    const {
        networkLayer: {
            account: account,
            systemCalls: { move },
        },
    } = useDojo();

    useEffect(() => {
        const sub = (e: KeyboardEvent) => {
            if (e.key === "a") {
                // left
                move(account, Direction.Left);
            } else if (e.key === "s") {
                move(account, Direction.Down);
            } else if (e.key === "d") {
                move(account, Direction.Right);
            } else if (e.key === "w") {
                move(account, Direction.Up);
            }
        };

        document.addEventListener("keydown", sub);
        return () => {
            document.removeEventListener("keydown", sub);
        };
    }, []);

    return <></>;
};
