import { serverInstance } from 'bdsx/bds/server';
import { ServerPlayer } from 'bdsx/bds/player';
import { ActorDefinitionIdentifier, ActorType, Actor } from 'bdsx/bds/actor';
import { Vec3 } from 'bdsx/bds/blockpos';
import { spawnEntity, generateUniqueID } from './mobspawning';
// WIP

class SlapperNPCBase extends Actor {
        create() {
                const player = serverInstance.minecraft.getLevel().players.get(0);
                const adi = ActorDefinitionIdentifier.create(ActorType.NPC);
                const entity = spawnEntity(player.getRegion(), Vec3.create(200, 100, 200), adi, generateUniqueID(serverInstance.minecraft.getLevel()), new Actor());
        }
}

