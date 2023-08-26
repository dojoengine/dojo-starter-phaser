// import { PhaserLayer } from "../createPhaserLayer";
import { PhaserLayer } from "..";
import { move } from "./move";
import { spawn } from "./spawn";

export const registerSystems = (layer: PhaserLayer) => {
    move(layer);
    spawn(layer);
};