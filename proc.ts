import { BlockSource } from 'bdsx/bds/block';
import { Actor, ActorDefinitionIdentifier, ActorUniqueID } from 'bdsx/bds/actor';
import { pdb } from 'bdsx/core';
import { UNDNAME_NAME_ONLY } from 'bdsx/dbghelp';
import { ProcHacker } from "bdsx/prochacker";
import { Vec3 } from 'bdsx/bds/blockpos';
import { Level } from 'bdsx/bds/level';

const hacker = ProcHacker.load("../pdbcache.ini", ["CommandUtils::spawnEntityAt", "Level::getNewUniqueID"], UNDNAME_NAME_ONLY);
pdb.close();

var spawnEntity2 = hacker.hooking("CommandUtils::spawnEntityAt", Actor, null, BlockSource, Vec3, ActorDefinitionIdentifier, ActorUniqueID, Actor)(spawnEntity);

export function spawnEntity(bs: BlockSource, vec: Vec3, adi: ActorDefinitionIdentifier, auid: ActorUniqueID, a: Actor) {
        return spawnEntity2(bs, vec, adi, auid, a);
}

var newauid = hacker.hooking("Level::getNewUniqueID", ActorUniqueID, null, Level)(generateUniqueID);

export function generateUniqueID(level: Level) {
        return newauid(level);
}
