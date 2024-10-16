import {UsageDie} from "./UsageDie.js";

export class UsageDiceSettingData {

    static module =  "udm1e";

    constructor(parsedJson) {
        //parsedJson is an array of objects
        if (parsedJson == null || !Array.isArray(parsedJson)) {
            throw new Error("parsedJson must be an array");
        }

        this.usageDice = this._parse(parsedJson);
        console.log("UsageDiceSettingData | this.usageDice: ", this.usageDice);
    }

    static readDice() {
        return  game.settings.get(UsageDiceSettingData.module, "usage-die-live-dice");
    }

    static async  writeDice(dice) {
        if (dice == null || !Array.isArray(dice)) {
            throw new Error("dice must be an array");
        }
        await game.settings.set(UsageDiceSettingData.module, "usage-die-live-dice", dice);
    }

    _parse(jsonArray) {
        return jsonArray.map((usageDie) => {
            return new UsageDie(usageDie);
        });
    }
}