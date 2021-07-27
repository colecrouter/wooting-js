var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const vendorIdList = [0x03eb, 0x31e3]; // Wooting vendor ID
const filters = vendorIdList.map(e => ({ vendorId: e }));
const usagePage = 0xff54; // This is the usage page value reported bt the HID device we want, rather than the controller, or regular keyboard, etc...
// Copied from https://github.com/WootingKb/wooting-analog-sdk/
// IMPORTANT: you can comment out keys you won't be using in your script; this can save lots of performance
var keys;
(function (keys) {
    keys[keys["A"] = 4] = "A";
    keys[keys["B"] = 5] = "B";
    keys[keys["C"] = 6] = "C";
    keys[keys["D"] = 7] = "D";
    keys[keys["E"] = 8] = "E";
    keys[keys["F"] = 9] = "F";
    keys[keys["G"] = 10] = "G";
    keys[keys["H"] = 11] = "H";
    keys[keys["I"] = 12] = "I";
    keys[keys["J"] = 13] = "J";
    keys[keys["K"] = 14] = "K";
    keys[keys["L"] = 15] = "L";
    keys[keys["M"] = 16] = "M";
    keys[keys["N"] = 17] = "N";
    keys[keys["O"] = 18] = "O";
    keys[keys["P"] = 19] = "P";
    keys[keys["Q"] = 20] = "Q";
    keys[keys["R"] = 21] = "R";
    keys[keys["S"] = 22] = "S";
    keys[keys["T"] = 23] = "T";
    keys[keys["U"] = 24] = "U";
    keys[keys["V"] = 25] = "V";
    keys[keys["W"] = 26] = "W";
    keys[keys["X"] = 27] = "X";
    keys[keys["Y"] = 28] = "Y";
    keys[keys["Z"] = 29] = "Z";
    keys[keys["N1"] = 30] = "N1";
    keys[keys["N2"] = 31] = "N2";
    keys[keys["N3"] = 32] = "N3";
    keys[keys["N4"] = 33] = "N4";
    keys[keys["N5"] = 34] = "N5";
    keys[keys["N6"] = 35] = "N6";
    keys[keys["N7"] = 36] = "N7";
    keys[keys["N8"] = 37] = "N8";
    keys[keys["N9"] = 38] = "N9";
    keys[keys["N0"] = 39] = "N0";
    keys[keys["Enter"] = 40] = "Enter";
    keys[keys["Escape"] = 41] = "Escape";
    keys[keys["Backspace"] = 42] = "Backspace";
    keys[keys["Tab"] = 43] = "Tab";
    keys[keys["Space"] = 44] = "Space";
    keys[keys["Minus"] = 45] = "Minus";
    keys[keys["Equal"] = 46] = "Equal";
    keys[keys["BracketLeft"] = 47] = "BracketLeft";
    keys[keys["BracketRight"] = 48] = "BracketRight";
    keys[keys["Backslash"] = 49] = "Backslash";
    // = 0x32, //INTL_HASH
    keys[keys["Semicolon"] = 51] = "Semicolon";
    keys[keys["Quote"] = 52] = "Quote";
    keys[keys["Backquote"] = 53] = "Backquote";
    keys[keys["Comma"] = 54] = "Comma";
    keys[keys["Period"] = 55] = "Period";
    keys[keys["Slash"] = 56] = "Slash";
    keys[keys["CapsLock"] = 57] = "CapsLock";
    keys[keys["F1"] = 58] = "F1";
    keys[keys["F2"] = 59] = "F2";
    keys[keys["F3"] = 60] = "F3";
    keys[keys["F4"] = 61] = "F4";
    keys[keys["F5"] = 62] = "F5";
    keys[keys["F6"] = 63] = "F6";
    keys[keys["F7"] = 64] = "F7";
    keys[keys["F8"] = 65] = "F8";
    keys[keys["F9"] = 66] = "F9";
    keys[keys["F10"] = 67] = "F10";
    keys[keys["F11"] = 68] = "F11";
    keys[keys["F12"] = 69] = "F12";
    keys[keys["PrintScreen"] = 70] = "PrintScreen";
    keys[keys["ScrollLock"] = 71] = "ScrollLock";
    keys[keys["PauseBreak"] = 72] = "PauseBreak";
    keys[keys["Insert"] = 73] = "Insert";
    keys[keys["Home"] = 74] = "Home";
    keys[keys["PageUp"] = 75] = "PageUp";
    keys[keys["Delete"] = 76] = "Delete";
    keys[keys["End"] = 77] = "End";
    keys[keys["PageDown"] = 78] = "PageDown";
    keys[keys["ArrowRight"] = 79] = "ArrowRight";
    keys[keys["ArrowLeft"] = 80] = "ArrowLeft";
    keys[keys["ArrowDown"] = 81] = "ArrowDown";
    keys[keys["ArrowUp"] = 82] = "ArrowUp";
    keys[keys["NumLock"] = 83] = "NumLock";
    keys[keys["NumpadDivide"] = 84] = "NumpadDivide";
    keys[keys["NumpadMultiply"] = 85] = "NumpadMultiply";
    keys[keys["NumpadSubtract"] = 86] = "NumpadSubtract";
    keys[keys["NumpadAdd"] = 87] = "NumpadAdd";
    /*
        NumpadEnter = 0x58, //NUMPAD_ENTER
        Numpad1 = 0x59,     //NUMPAD1
        Numpad2 = 0x5a,     //NUMPAD2
        Numpad3 = 0x5b,     //NUMPAD3
        Numpad4 = 0x5c,     //NUMPAD4
        Numpad5 = 0x5d,     //NUMPAD5
        Numpad6 = 0x5e,     //NUMPAD6
        Numpad7 = 0x5f,     //NUMPAD7
    
        Numpad8 = 0x60,                //NUMPAD8
        Numpad9 = 0x61,                //NUMPAD9
        Numpad0 = 0x62,                //NUMPAD0
        NumpadDecimal = 0x63,          //NUMPAD_DECIMAL
        InternationalBackslash = 0x64, //INTL_BACKSLASH
        ContextMenu = 0x65,            //CONTEXT_MENU
        Power = 0x66,                  //POWER
        NumpadEqual = 0x67,            //NUMPAD_EQUAL
    
        F13 = 0x68, //F13
        F14 = 0x69, //F14
        F15 = 0x6a, //F15
        F16 = 0x6b, //F16
        F17 = 0x6c, //F17
        F18 = 0x6d, //F18
        F19 = 0x6e, //F19
        F20 = 0x6f, //F20
    
        F21 = 0x70, //F21
        F22 = 0x71, //F22
        F23 = 0x72, //F23
    
        F24 = 0x73,  //F24
        Open = 0x74, //OPEN
    
        Help = 0x75, //HELP
    
        // = 0x77, //SELECT
        Again = 0x79,      //AGAIN
        Undo = 0x7a,       //UNDO
        Cut = 0x7b,        //CUT
        Copy = 0x7c,       //COPY
        Paste = 0x7d,      //PASTE
        Find = 0x7e,       //FIND
        VolumeMute = 0x7f, //VOLUME_MUTE
    
        VolumeUp = 0x80,    //VOLUME_UP
        VolumeDown = 0x81,  //VOLUME_DOWN
        NumpadComma = 0x85, //NUMPAD_COMMA
    
        InternationalRO = 0x87,  //INTL_RO
        KanaMode = 0x88,         //KANA_MODE
        InternationalYen = 0x89, //INTL_YEN
        Convert = 0x8a,          //CONVERT
        NonConvert = 0x8b,       //NON_CONVERT
        Lang1 = 0x90,            //LANG1
        Lang2 = 0x91,            //LANG2
        Lang3 = 0x92,            //LANG3
        Lang4 = 0x93,            //LANG4
    */
    keys[keys["LeftCtrl"] = 224] = "LeftCtrl";
    keys[keys["LeftShift"] = 225] = "LeftShift";
    keys[keys["LeftAlt"] = 226] = "LeftAlt";
    keys[keys["LeftMeta"] = 227] = "LeftMeta";
    keys[keys["RightCtrl"] = 228] = "RightCtrl";
    keys[keys["RightShift"] = 229] = "RightShift";
    keys[keys["RightAlt"] = 230] = "RightAlt";
    keys[keys["RightMeta"] = 231] = "RightMeta";
})(keys || (keys = {}));
/*
    On of Chrome 91, Chrome only seems to "remember" the gamepad of the Wooting keyboard,
    and not the Keyboard itself, so wootingConnectPrev() doesn't work. This function
    should work otherwise, but I can't test it if it doesn't work :P
    I'll leave it in here for the future.
*/
function wootingConnectPrev() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            // Refresh list
            let devices = yield navigator.hid.getDevices();
            // Find matching device
            let newDevices = [];
            devices.forEach(device => {
                if (!vendorIdList.includes(device.vendorId) || device.collections[0].usagePage !== usagePage || !device.productName.includes('Wooting')) {
                    return;
                }
                switch (device) {
                    case undefined:
                        break;
                    default:
                        console.log(device);
                        // Assign new keyboard object
                        let kb = new WootingKeyboard(device);
                        newDevices.push(kb);
                        break;
                }
            });
            resolve(newDevices);
        }));
    });
}
function wootingConnectNew() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            // Refresh list
            let devices = yield navigator.hid.requestDevice({ filters });
            let newDevices = [];
            devices.forEach(device => {
                if (!vendorIdList.includes(device.vendorId) || device.collections[0].usagePage !== usagePage || !device.productName.includes('Wooting')) {
                    return;
                }
                switch (device) {
                    case undefined:
                        break;
                    default:
                        // Assign new keyboard object
                        let kb = new WootingKeyboard(device);
                        newDevices.push(kb);
                        break;
                }
            });
            resolve(newDevices);
        }));
    });
}
class WootingKeyboard {
    constructor(device) {
        // Assign name
        this.deviceName = device.productName || "unknown device";
        // Assign device
        this.device = device;
        if (!this.device.opened) {
            this.device.open();
        }
        // Create map
        this.buffer = new Map();
        // Add listener
        this.device.addEventListener("inputreport", event => {
            const { data, device } = event;
            // Temp buffer, we keep the old one to check for changed values
            let newBuffer = new Map();
            // Iterate through packet
            let i = 0;
            do {
                // let unknown = data.getUint8(i) // First 8-bit value, not sure what this represents
                let key = data.getUint8(i + 1); // Second 8-bit value
                let value = data.getUint8(i + 2); // Third 8-bit value
                i = i + 3;
                // Update temp buffer
                newBuffer[key] = value;
                // Check if we hit the end of useful data, skip
                if (key == 0) {
                    break;
                }
            } while (i < data.byteLength); // Should be 48, incrementing by 3 means 16 loops per packet
            // Iterate through each key once more, check for changed values
            // Only real reason for this block is because the keyboard doesn't send a '0' packet when key is unpressed,
            // otherwise the dispatchEvent() could be put in the do-while above
            for (let key in keys) {
                if (newBuffer[key] != this.buffer[key]) {
                    // Throw event
                    window.dispatchEvent(new CustomEvent("KeyboardAnalog", { detail: { key: key, value: newBuffer[key] || 0 } }));
                }
            }
            // Swap buffers
            this.buffer = newBuffer;
        });
    }
    // Add a listener, specifying which key you want and the function to run
    addKeyListener(key, f) {
        window.addEventListener("KeyboardAnalog", function (event) {
            if (key == event.detail.key) { // TODO multi keyboard support
                f(key, event.detail.value);
            }
        });
    }
}
//# sourceMappingURL=wooting.js.map