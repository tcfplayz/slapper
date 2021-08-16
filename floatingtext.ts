import { events } from 'bdsx/event';
import { generateUniqueID, spawnEntity } from './mobspawning';
import { serverInstance } from 'bdsx/bds/server';
import { Vec3 } from 'bdsx/bds/blockpos';
import { Actor, ActorDefinitionIdentifier, ActorType } from 'bdsx/bds/actor';
import { MobEffectIds, MobEffectInstance } from 'bdsx/bds/effects';

export function floatingTextTest(text: string, x: number, y: number, z: number) {
        const player = serverInstance.minecraft.getLevel().players.get(0);
        const adi = ActorDefinitionIdentifier.create(ActorType.ArmorStand);
        const entity = spawnEntity(player.getRegion(), Vec3.create(x, y, z), adi, generateUniqueID(serverInstance.minecraft.getLevel()), new Actor());
        entity.addEffect(MobEffectInstance.create(MobEffectIds.Invisibility, 1, 1, false, true, false));
        entity.setName(text);
}
