import {registerModuleSettings} from "./settings/settings.js";
import {UsageDiceSettingData} from "./settings/UsageDiceSettingData.js";

Hooks.once("init", async function () {
    console.log("UDM1e | Initializing The Usage Die Master module.");

    // Register Module Settings
    registerModuleSettings();
});

Hooks.once("ready", async function () {
    console.log("UDM1e | The Usage Die Master module is ready.");
    await UsageDiceSettingData.writeDice([
        {
            name: "d4",
            type: "d4",
            visibility: "GM",
            documentId: "1"
        }
    ]);
    console.log("UDM1e | usageDiceSettingData: ", UsageDiceSettingData.readDice());
    console.log("UDM1e | usage die d4: ", UsageDiceSettingData.readDieBy("d4"));
    console.log("UDM1e | invalid usage die d6: ", UsageDiceSettingData.readDieBy("d6"));
});