import { Account, RpcProvider } from "starknet";
import { NetworkLayer } from "../dojo/createNetworkLayer";
import { PhaserLayer } from "../phaser";
import { store } from "../store/store";
import { useBurner } from "@dojoengine/create-burner";

export type UIStore = {
    networkLayer: NetworkLayer;
    phaserLayer: PhaserLayer;
    devMode: boolean;
};

export const useDojo = () => {
    const { networkLayer, phaserLayer, devMode } = store();

    const provider = new RpcProvider({
        nodeUrl: "http://localhost:5050",
    });

    const masterAccount = new Account(provider, import.meta.env.VITE_PUBLIC_MASTER_ADDRESS!, import.meta.env.VITE_PUBLIC_MASTER_PRIVATE_KEY!)

    const { account } = useBurner(
        {
            masterAccount: masterAccount,
            accountClassHash: import.meta.env.VITE_PUBLIC_ACCOUNT_CLASS_HASH!,
            provider: provider
        }
    );

    if (phaserLayer === null) {
        throw new Error("Store not initialized");
    }

    return {
        networkLayer,
        phaserLayer,
        devMode,
    } as UIStore;
};