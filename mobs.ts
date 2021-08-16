import { Actor, ActorDefinitionIdentifier, ActorType } from 'bdsx/bds/actor';
import { serverInstance } from 'bdsx/bds/server';
import { Vec3 } from 'bdsx/bds/blockpos';
import { generateUniqueID, spawnEntity } from './mobspawning';
import { parseJSON, writeJSON } from './util';
// wip

var savedPos = parseJSON("../scriptData/pos.json");

class SlapperBase extends Actor {
        static create(type: ActorType): Actor {
                return spawnEntity(serverInstance.minecraft.getLevel().players.get(0).getRegion(), Vec3.create(100, 100, 100), ActorDefinitionIdentifier.create(type), generateUniqueID(serverInstance.minecraft.getLevel()), new Actor());
        }
}

export class NoAIMob extends SlapperBase {
        create(type: ActorType): Actor {
                var entity = SlapperBase.create(type);
                var pos = entity.getPosition();
                entity.addTag("noai");
                savedPos[entity.getUniqueIdPointer().getBin64()] = pos;
                writeJSON("../scriptData/pos.json", savedPos);
                return entity;
        }
}