import { BlockSource } from 'bdsx/bds/block';
import { Actor, ActorDefinitionIdentifier, ActorUniqueID } from 'bdsx/bds/actor';
import { pdb } from 'bdsx/core';
import { UNDNAME_NAME_ONLY } from 'bdsx/dbghelp';
import { ProcHacker } from "bdsx/prochacker";
import { Vec3 } from 'bdsx/bds/blockpos';
import { Level } from 'bdsx/bds/level';

const hacker = ProcHacker.load("../pdbcache.ini", ["Level::getNewUniqueID"], UNDNAME_NAME_ONLY);
pdb.close();

var newauid = hacker.hooking("Level::getNewUniqueID", ActorUniqueID, null, Level)(generateUniqueID);

export function generateUniqueID(level: Level) {
        return newauid(level);
}
