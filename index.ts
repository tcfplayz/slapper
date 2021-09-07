import { events } from "bdsx/event";
import "./mobs";
import "./cmds";

events.serverOpen.on(() => {
        console.log("[INFO] slapper.ts loaded")
});
