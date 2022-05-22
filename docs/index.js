var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt (value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled (value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected (value) { try { step(generator[ "throw" ](value)); } catch (e) { reject(e); } }
        function step (result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const vendorIdList = [ 0x03eb, 0x31e3 ];
const filters = vendorIdList.map(e => ({ vendorId: e }));
const usagePage = 0xff54;
var AnalogKeyCode;
(function (AnalogKeyCode) {
    AnalogKeyCode[ AnalogKeyCode[ "A" ] = 4 ] = "A";
    AnalogKeyCode[ AnalogKeyCode[ "B" ] = 5 ] = "B";
    AnalogKeyCode[ AnalogKeyCode[ "C" ] = 6 ] = "C";
    AnalogKeyCode[ AnalogKeyCode[ "D" ] = 7 ] = "D";
    AnalogKeyCode[ AnalogKeyCode[ "E" ] = 8 ] = "E";
    AnalogKeyCode[ AnalogKeyCode[ "F" ] = 9 ] = "F";
    AnalogKeyCode[ AnalogKeyCode[ "G" ] = 10 ] = "G";
    AnalogKeyCode[ AnalogKeyCode[ "H" ] = 11 ] = "H";
    AnalogKeyCode[ AnalogKeyCode[ "I" ] = 12 ] = "I";
    AnalogKeyCode[ AnalogKeyCode[ "J" ] = 13 ] = "J";
    AnalogKeyCode[ AnalogKeyCode[ "K" ] = 14 ] = "K";
    AnalogKeyCode[ AnalogKeyCode[ "L" ] = 15 ] = "L";
    AnalogKeyCode[ AnalogKeyCode[ "M" ] = 16 ] = "M";
    AnalogKeyCode[ AnalogKeyCode[ "N" ] = 17 ] = "N";
    AnalogKeyCode[ AnalogKeyCode[ "O" ] = 18 ] = "O";
    AnalogKeyCode[ AnalogKeyCode[ "P" ] = 19 ] = "P";
    AnalogKeyCode[ AnalogKeyCode[ "Q" ] = 20 ] = "Q";
    AnalogKeyCode[ AnalogKeyCode[ "R" ] = 21 ] = "R";
    AnalogKeyCode[ AnalogKeyCode[ "S" ] = 22 ] = "S";
    AnalogKeyCode[ AnalogKeyCode[ "T" ] = 23 ] = "T";
    AnalogKeyCode[ AnalogKeyCode[ "U" ] = 24 ] = "U";
    AnalogKeyCode[ AnalogKeyCode[ "V" ] = 25 ] = "V";
    AnalogKeyCode[ AnalogKeyCode[ "W" ] = 26 ] = "W";
    AnalogKeyCode[ AnalogKeyCode[ "X" ] = 27 ] = "X";
    AnalogKeyCode[ AnalogKeyCode[ "Y" ] = 28 ] = "Y";
    AnalogKeyCode[ AnalogKeyCode[ "Z" ] = 29 ] = "Z";
    AnalogKeyCode[ AnalogKeyCode[ "N1" ] = 30 ] = "N1";
    AnalogKeyCode[ AnalogKeyCode[ "N2" ] = 31 ] = "N2";
    AnalogKeyCode[ AnalogKeyCode[ "N3" ] = 32 ] = "N3";
    AnalogKeyCode[ AnalogKeyCode[ "N4" ] = 33 ] = "N4";
    AnalogKeyCode[ AnalogKeyCode[ "N5" ] = 34 ] = "N5";
    AnalogKeyCode[ AnalogKeyCode[ "N6" ] = 35 ] = "N6";
    AnalogKeyCode[ AnalogKeyCode[ "N7" ] = 36 ] = "N7";
    AnalogKeyCode[ AnalogKeyCode[ "N8" ] = 37 ] = "N8";
    AnalogKeyCode[ AnalogKeyCode[ "N9" ] = 38 ] = "N9";
    AnalogKeyCode[ AnalogKeyCode[ "N0" ] = 39 ] = "N0";
    AnalogKeyCode[ AnalogKeyCode[ "Enter" ] = 40 ] = "Enter";
    AnalogKeyCode[ AnalogKeyCode[ "Escape" ] = 41 ] = "Escape";
    AnalogKeyCode[ AnalogKeyCode[ "Backspace" ] = 42 ] = "Backspace";
    AnalogKeyCode[ AnalogKeyCode[ "Tab" ] = 43 ] = "Tab";
    AnalogKeyCode[ AnalogKeyCode[ "Space" ] = 44 ] = "Space";
    AnalogKeyCode[ AnalogKeyCode[ "Minus" ] = 45 ] = "Minus";
    AnalogKeyCode[ AnalogKeyCode[ "Equal" ] = 46 ] = "Equal";
    AnalogKeyCode[ AnalogKeyCode[ "BracketLeft" ] = 47 ] = "BracketLeft";
    AnalogKeyCode[ AnalogKeyCode[ "BracketRight" ] = 48 ] = "BracketRight";
    AnalogKeyCode[ AnalogKeyCode[ "Backslash" ] = 49 ] = "Backslash";
    AnalogKeyCode[ AnalogKeyCode[ "Semicolon" ] = 51 ] = "Semicolon";
    AnalogKeyCode[ AnalogKeyCode[ "Quote" ] = 52 ] = "Quote";
    AnalogKeyCode[ AnalogKeyCode[ "Backquote" ] = 53 ] = "Backquote";
    AnalogKeyCode[ AnalogKeyCode[ "Comma" ] = 54 ] = "Comma";
    AnalogKeyCode[ AnalogKeyCode[ "Period" ] = 55 ] = "Period";
    AnalogKeyCode[ AnalogKeyCode[ "Slash" ] = 56 ] = "Slash";
    AnalogKeyCode[ AnalogKeyCode[ "CapsLock" ] = 57 ] = "CapsLock";
    AnalogKeyCode[ AnalogKeyCode[ "F1" ] = 58 ] = "F1";
    AnalogKeyCode[ AnalogKeyCode[ "F2" ] = 59 ] = "F2";
    AnalogKeyCode[ AnalogKeyCode[ "F3" ] = 60 ] = "F3";
    AnalogKeyCode[ AnalogKeyCode[ "F4" ] = 61 ] = "F4";
    AnalogKeyCode[ AnalogKeyCode[ "F5" ] = 62 ] = "F5";
    AnalogKeyCode[ AnalogKeyCode[ "F6" ] = 63 ] = "F6";
    AnalogKeyCode[ AnalogKeyCode[ "F7" ] = 64 ] = "F7";
    AnalogKeyCode[ AnalogKeyCode[ "F8" ] = 65 ] = "F8";
    AnalogKeyCode[ AnalogKeyCode[ "F9" ] = 66 ] = "F9";
    AnalogKeyCode[ AnalogKeyCode[ "F10" ] = 67 ] = "F10";
    AnalogKeyCode[ AnalogKeyCode[ "F11" ] = 68 ] = "F11";
    AnalogKeyCode[ AnalogKeyCode[ "F12" ] = 69 ] = "F12";
    AnalogKeyCode[ AnalogKeyCode[ "PrintScreen" ] = 70 ] = "PrintScreen";
    AnalogKeyCode[ AnalogKeyCode[ "ScrollLock" ] = 71 ] = "ScrollLock";
    AnalogKeyCode[ AnalogKeyCode[ "PauseBreak" ] = 72 ] = "PauseBreak";
    AnalogKeyCode[ AnalogKeyCode[ "Insert" ] = 73 ] = "Insert";
    AnalogKeyCode[ AnalogKeyCode[ "Home" ] = 74 ] = "Home";
    AnalogKeyCode[ AnalogKeyCode[ "PageUp" ] = 75 ] = "PageUp";
    AnalogKeyCode[ AnalogKeyCode[ "Delete" ] = 76 ] = "Delete";
    AnalogKeyCode[ AnalogKeyCode[ "End" ] = 77 ] = "End";
    AnalogKeyCode[ AnalogKeyCode[ "PageDown" ] = 78 ] = "PageDown";
    AnalogKeyCode[ AnalogKeyCode[ "ArrowRight" ] = 79 ] = "ArrowRight";
    AnalogKeyCode[ AnalogKeyCode[ "ArrowLeft" ] = 80 ] = "ArrowLeft";
    AnalogKeyCode[ AnalogKeyCode[ "ArrowDown" ] = 81 ] = "ArrowDown";
    AnalogKeyCode[ AnalogKeyCode[ "ArrowUp" ] = 82 ] = "ArrowUp";
    AnalogKeyCode[ AnalogKeyCode[ "LeftCtrl" ] = 224 ] = "LeftCtrl";
    AnalogKeyCode[ AnalogKeyCode[ "LeftShift" ] = 225 ] = "LeftShift";
    AnalogKeyCode[ AnalogKeyCode[ "LeftAlt" ] = 226 ] = "LeftAlt";
    AnalogKeyCode[ AnalogKeyCode[ "LeftMeta" ] = 227 ] = "LeftMeta";
    AnalogKeyCode[ AnalogKeyCode[ "RightCtrl" ] = 228 ] = "RightCtrl";
    AnalogKeyCode[ AnalogKeyCode[ "RightShift" ] = 229 ] = "RightShift";
    AnalogKeyCode[ AnalogKeyCode[ "RightAlt" ] = 230 ] = "RightAlt";
    AnalogKeyCode[ AnalogKeyCode[ "RightMeta" ] = 231 ] = "RightMeta";
})(AnalogKeyCode || (AnalogKeyCode = {}));
function ConnectPrev () {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let devices = yield navigator.hid.getDevices();
                let newDevices = [];
                devices.forEach(device => {
                    if (!vendorIdList.includes(device.vendorId) || device.collections[ 0 ].usagePage !== usagePage || !device.productName.includes('Wooting')) {
                        return;
                    }
                    switch (device) {
                        case undefined:
                            break;
                        default:
                            let kb = new WootingKeyboard(device);
                            newDevices.push(kb);
                            break;
                    }
                });
                resolve(newDevices);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
function ConnectNew () {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            try {
                let devices = yield navigator.hid.requestDevice({ filters });
                let newDevices = [];
                devices.forEach(device => {
                    if (!vendorIdList.includes(device.vendorId) || device.collections.length === 0 || device.collections[ 0 ].usagePage !== usagePage || !device.productName.includes('Wooting')) {
                        return;
                    }
                    switch (device) {
                        case undefined:
                            break;
                        default:
                            let kb = new WootingKeyboard(device);
                            newDevices.push(kb);
                            break;
                    }
                });
                resolve(newDevices);
            }
            catch (error) {
                reject(error);
            }
        }));
    });
}
class WootingKeyboard {
    constructor(device) {
        this.deviceName = device.productName || 'unknown device';
        this.device = device;
        if (!this.device.opened) {
            this.device.open();
        }
        this.buffer = new Uint8Array(AnalogKeyCode.RightMeta);
        this.device.addEventListener("inputreport", event => {
            const newBuffer = new Uint8Array(AnalogKeyCode.RightMeta);
            const { data } = event;
            let i = 0;
            for (let i = 0; i < data.byteLength; i += 3) {
                let key = data.getUint8(i + 1);
                let value = data.getUint8(i + 2);
                newBuffer[ key ] = value;
                if (key == 0) {
                    break;
                }
            }
            for (const key in AnalogKeyCode) {
                if (newBuffer[ key ] != this.buffer[ key ]) {
                    window.dispatchEvent(new CustomEvent(newBuffer[ key ] ? 'akeydown' : 'akeyup', { detail: { key: key, value: newBuffer[ key ] || 0 } }));
                }
            }
            this.buffer = newBuffer;
        });
    }
}
export { WootingKeyboard, ConnectNew, ConnectPrev, AnalogKeyCode };
