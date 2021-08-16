import { CxxString } from 'bdsx/nativetype';
import { CommandPermissionLevel } from 'bdsx/bds/command';
import { events } from "bdsx/event";
import { command } from 'bdsx/command';
import { floatingTextTest } from './floatingtext';

events.serverOpen.on(() => {
        command.register("floatingtext", "Floating text", CommandPermissionLevel.Operator).overload((p, o) => {
                var e = o.getEntity();
                if (e?.isPlayer()) {
                        floatingTextTest(p.text, e.getPosition().x, e.getPosition().y, e.getPosition().z);
                }
        }, {
               text: CxxString
        });
});