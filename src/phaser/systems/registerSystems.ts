// import { PhaserLayer } from "../createPhaserLayer";
import { PhaserLayer } from "..";
import { move } from "./move";

export const registerSystems = (layer: PhaserLayer) => {
    move(layer);
};