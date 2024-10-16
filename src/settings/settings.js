import {UsageDiceSettingData} from "./UsageDiceSettingData.js";

export const registerModuleSettings = function () {

    const module = UsageDiceSettingData.module;
    console.log("UDM1E | settings for module: ", module);

    /**
     * Track the system version upon which point a migration was last applied
     */
    game.settings.register(module, "usage-die-live-dice", {
        name: "Usage Die Live Dice",
        scope: "world",
        config: false,
        type: UsageDiceSettingData,
        default: "[]"
    });

}