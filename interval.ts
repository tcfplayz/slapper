import { events } from 'bdsx/event';
import { actorList } from './recordentity';
import { parseJSON } from './util';
// set interval

var interval: NodeJS.Timeout;
var savedPos = parseJSON("../scriptData/pos.json");

events.serverOpen.on(() => {
        interval = setInterval((() => {
                actorList.forEach((actor) => {
                        if (actor.hasTag("noai")) {
                                actor.teleport(savedPos[actor.getUniqueIdPointer().getBin64()]);
                                // finished
                        }
                });
        }), 1);
});