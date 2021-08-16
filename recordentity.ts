import { MinecraftPacketIds } from 'bdsx/bds/packetids';
import { events } from "bdsx/event";
import { Actor } from 'bdsx/bds/actor';

export let actorList: Actor[] = [];

events.packetBefore(MinecraftPacketIds.AddActor).on((p, netId) => {
        var actor = netId.getActor();
        if (actor != null) {
                actorList.push(actor);
        }
});