import { void_t } from 'bdsx/nativetype';
import { ServerNetworkHandler, NetworkIdentifier } from 'bdsx/bds/networkidentifier';
import { Player, ServerPlayer } from 'bdsx/bds/player';
import { ActorUniqueID } from 'bdsx/bds/actor';
import { pdb } from 'bdsx/core';
import { UNDNAME_NAME_ONLY } from 'bdsx/dbghelp';
import { ProcHacker } from "bdsx/prochacker";
import { Level } from 'bdsx/bds/level';
import { ConnectionRequest } from 'bdsx/bds/connreq';

const hacker = ProcHacker.load("../pdbcache.ini", ["Level::addPlayer", "Level::getNewUniqueID", "ServerNetworkHandler::createNewPlayer"], UNDNAME_NAME_ONLY);
pdb.close();

var newauid = hacker.hooking("Level::getNewUniqueID", ActorUniqueID, null, Level)(generateUniqueID);
var newplr = hacker.hooking("ServerNetworkHandler::createNewPlayer", ServerPlayer, null, ServerNetworkHandler, NetworkIdentifier, ConnectionRequest)(addNewPlayer);
var newplrsec = hacker.hooking("Level::addPlayer", void_t, null, Level, Player)(addNewPlayerSecondWay);

export function generateUniqueID(level: Level): ActorUniqueID {
        return newauid(level);
}

export function addNewPlayer(servernetworkhandler: ServerNetworkHandler, netid: NetworkIdentifier, connreq: ConnectionRequest): ServerPlayer {
        return newplr(servernetworkhandler, netid, connreq);
}

export function addNewPlayerSecondWay(lvl: Level, plr: Player) {
       newplrsec(lvl, plr);
}
