import { serverInstance } from 'bdsx/bds/server';
import { Player } from 'bdsx/bds/player';
import { events } from "bdsx/event";
import { command } from 'bdsx/command'
import { addNewPlayer, addNewPlayerSecondWay } from './proc';
import { NetworkIdentifier, ServerNetworkHandler } from 'bdsx/bds/networkidentifier';
import { ConnectionRequest } from 'bdsx/bds/connreq';

events.serverOpen.on(() => {
        command.register('slappera', 'Slapper Test A').overload((p, o) => {
                var test = addNewPlayer(new ServerNetworkHandler(), new NetworkIdentifier(), new ConnectionRequest());
                var plr = o.getEntity() as Player;
                test.teleport(plr.getPosition());
        }, {});

        command.register('slapperb', 'Slapper Test B').overload((p, o) => {
                var plr = o.getEntity() as Player;
                var testplr = new Player();
                addNewPlayerSecondWay(serverInstance.minecraft.getLevel(), testplr);
                testplr.teleport(plr.getPosition());
        }, {});
});