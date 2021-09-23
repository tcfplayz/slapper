import { events } from "bdsx/event";
import './cmds';


events.serverOpen.on(() => {
        console.log("[INFO] slapper.ts loaded")
});