const vendorIdList = [0x03eb, 0x31e3]; // Wooting vendor ID
const filters = vendorIdList.map(e => ({ vendorId: e }));
const usagePage = 0xff54; // This is the usage page value reported bt the HID device we want, rather than the controller, or regular keyboard, etc...

// Copied from https://github.com/WootingKb/wooting-analog-sdk/
// IMPORTANT: you can comment out keys you won't be using in your script; this can save lots of performance
enum AnalogKeyCode {
    A = 0x04,
    B = 0x05, //US_B
    C = 0x06, //US_C
    D = 0x07, //US_D

    E = 0x08, //US_E
    F = 0x09, //US_F
    G = 0x0a, //US_G
    H = 0x0b, //US_H
    I = 0x0c, //US_I
    J = 0x0d, //US_J
    K = 0x0e, //US_K
    L = 0x0f, //US_L

    M = 0x10, //US_M
    N = 0x11, //US_N
    O = 0x12, //US_O
    P = 0x13, //US_P
    Q = 0x14, //US_Q
    R = 0x15, //US_R
    S = 0x16, //US_S
    T = 0x17, //US_T

    U = 0x18,  //US_U
    V = 0x19,  //US_V
    W = 0x1a,  //US_W
    X = 0x1b,  //US_X
    Y = 0x1c,  //US_Y
    Z = 0x1d,  //US_Z
    N1 = 0x1e, //DIGIT1
    N2 = 0x1f, //DIGIT2

    N3 = 0x20, //DIGIT3
    N4 = 0x21, //DIGIT4
    N5 = 0x22, //DIGIT5
    N6 = 0x23, //DIGIT6
    N7 = 0x24, //DIGIT7
    N8 = 0x25, //DIGIT8
    N9 = 0x26, //DIGIT9
    N0 = 0x27, //DIGIT0

    Enter = 0x28,       //ENTER
    Escape = 0x29,      //ESCAPE
    Backspace = 0x2a,   //BACKSPACE
    Tab = 0x2b,         //TAB
    Space = 0x2c,       //SPACE
    Minus = 0x2d,       //MINUS
    Equal = 0x2e,       //EQUAL
    BracketLeft = 0x2f, //BRACKET_LEFT

    BracketRight = 0x30, //BRACKET_RIGHT
    Backslash = 0x31,    //BACKSLASH

    // = 0x32, //INTL_HASH
    Semicolon = 0x33, //SEMICOLON
    Quote = 0x34,     //QUOTE
    Backquote = 0x35, //BACKQUOTE
    Comma = 0x36,     //COMMA
    Period = 0x37,    //PERIOD

    Slash = 0x38,    //SLASH
    CapsLock = 0x39, //CAPS_LOCK
    F1 = 0x3a,       //F1
    F2 = 0x3b,       //F2
    F3 = 0x3c,       //F3
    F4 = 0x3d,       //F4
    F5 = 0x3e,       //F5
    F6 = 0x3f,       //F6

    F7 = 0x40,          //F7
    F8 = 0x41,          //F8
    F9 = 0x42,          //F9
    F10 = 0x43,         //F10
    F11 = 0x44,         //F11
    F12 = 0x45,         //F12
    PrintScreen = 0x46, //PRINT_SCREEN
    ScrollLock = 0x47,  //SCROLL_LOCK

    PauseBreak = 0x48, //PAUSE
    Insert = 0x49,     //INSERT
    Home = 0x4a,       //HOME
    PageUp = 0x4b,     //PAGE_UP
    Delete = 0x4c,     //DEL
    End = 0x4d,        //END
    PageDown = 0x4e,   //PAGE_DOWN
    ArrowRight = 0x4f, //ARROW_RIGHT

    ArrowLeft = 0x50,      //ARROW_LEFT
    ArrowDown = 0x51,      //ARROW_DOWN
    ArrowUp = 0x52,        //ARROW_UP
    // NumLock = 0x53,        //NUM_LOCK
    // NumpadDivide = 0x54,   //NUMPAD_DIVIDE
    // NumpadMultiply = 0x55, //NUMPAD_MULTIPLY
    // NumpadSubtract = 0x56, //NUMPAD_SUBTRACT
    // NumpadAdd = 0x57,      //NUMPAD_ADD
    // NumpadEnter = 0x58, //NUMPAD_ENTER
    // Numpad1 = 0x59,     //NUMPAD1
    // Numpad2 = 0x5a,     //NUMPAD2
    // Numpad3 = 0x5b,     //NUMPAD3
    // Numpad4 = 0x5c,     //NUMPAD4
    // Numpad5 = 0x5d,     //NUMPAD5
    // Numpad6 = 0x5e,     //NUMPAD6
    // Numpad7 = 0x5f,     //NUMPAD7
    // Numpad8 = 0x60,                //NUMPAD8
    // Numpad9 = 0x61,                //NUMPAD9
    // Numpad0 = 0x62,                //NUMPAD0
    // NumpadDecimal = 0x63,          //NUMPAD_DECIMAL
    // InternationalBackslash = 0x64, //INTL_BACKSLASH
    // ContextMenu = 0x65,            //CONTEXT_MENU
    // Power = 0x66,                  //POWER
    // NumpadEqual = 0x67,            //NUMPAD_EQUAL

    // F13 = 0x68, //F13
    // F14 = 0x69, //F14
    // F15 = 0x6a, //F15
    // F16 = 0x6b, //F16
    // F17 = 0x6c, //F17
    // F18 = 0x6d, //F18
    // F19 = 0x6e, //F19
    // F20 = 0x6f, //F20

    // F21 = 0x70, //F21
    // F22 = 0x71, //F22
    // F23 = 0x72, //F23

    // F24 = 0x73,  //F24
    // Open = 0x74, //OPEN

    // Help = 0x75, //HELP

    // // = 0x77, //SELECT
    // Again = 0x79,      //AGAIN
    // Undo = 0x7a,       //UNDO
    // Cut = 0x7b,        //CUT
    // Copy = 0x7c,       //COPY
    // Paste = 0x7d,      //PASTE
    // Find = 0x7e,       //FIND
    // VolumeMute = 0x7f, //VOLUME_MUTE

    // VolumeUp = 0x80,    //VOLUME_UP
    // VolumeDown = 0x81,  //VOLUME_DOWN
    // NumpadComma = 0x85, //NUMPAD_COMMA

    // InternationalRO = 0x87,  //INTL_RO
    // KanaMode = 0x88,         //KANA_MODE
    // InternationalYen = 0x89, //INTL_YEN
    // Convert = 0x8a,          //CONVERT
    // NonConvert = 0x8b,       //NON_CONVERT
    // Lang1 = 0x90,            //LANG1
    // Lang2 = 0x91,            //LANG2
    // Lang3 = 0x92,            //LANG3
    // Lang4 = 0x93,            //LANG4

    LeftCtrl = 0xe0,   //CONTROL_LEFT
    LeftShift = 0xe1,  //SHIFT_LEFT
    LeftAlt = 0xe2,    //ALT_LEFT
    LeftMeta = 0xe3,   //META_LEFT
    RightCtrl = 0xe4,  //CONTROL_RIGHT
    RightShift = 0xe5, //SHIFT_RIGHT
    RightAlt = 0xe6,   //ALT_RIGHT
    RightMeta = 0xe7,  //META_RIGHT
}

/*
    On Chrome 91, Chrome only seems to "remember" the gamepad of the Wooting keyboard,
    and not the Keyboard itself, so wootingConnectPrev() doesn't work. This function
    should work otherwise, but I can't test it if it doesn't work :P
    I'll leave it in here for the future.
*/
async function ConnectPrev(): Promise<Array<WootingKeyboard>> {
    return new Promise(async (resolve, reject) => {
        try {
            // Refresh list
            let devices = await navigator.hid.getDevices();

            // Find matching device
            let newDevices: Array<WootingKeyboard> = [];
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
        } catch (error) {
            reject(error);
        }
    });
}

async function ConnectNew(): Promise<Array<WootingKeyboard>> {
    return new Promise(async (resolve, reject) => {
        try {
            // Refresh list
            let devices = await navigator.hid.requestDevice({ filters });

            let newDevices: Array<WootingKeyboard> = [];
            devices.forEach(device => {
                if (!vendorIdList.includes(device.vendorId) || device.collections.length === 0 || device.collections[0].usagePage !== usagePage || !device.productName.includes('Wooting')) {
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
        } catch (error) {
            reject(error);
        }
    });
}

class WootingKeyboard {
    device: HIDDevice;
    deviceName: string;
    buffer: Uint8Array;

    constructor(device: HIDDevice) {
        // Assign name
        this.deviceName = device.productName || 'unknown device';

        // Assign device
        this.device = device;
        if (!this.device.opened) {
            this.device.open();
        }

        // Create map
        this.buffer = new Uint8Array(AnalogKeyCode.RightMeta);

        // Add listener
        this.device.addEventListener("inputreport", event => {
            const newBuffer = new Uint8Array(AnalogKeyCode.RightMeta);
            const { data } = event;

            // Iterate through packet
            let i = 0;
            for (let i = 0; i < data.byteLength; i += 3) {
                // let unknown = data.getUint8(i) // First 8-bit value, not sure what this represents
                let key = data.getUint8(i + 1); // Second 8-bit value
                let value = data.getUint8(i + 2); // Third 8-bit value

                // Update temp buffer
                newBuffer[key] = value;

                // Check if we hit the end of useful data, skip
                if (key == 0) {
                    break;
                }
            }

            // Should be 48, incrementing by 3 means 16 loops per packet
            // Iterate through each key once more, check for changed values
            // Only real reason for this block is because the keyboard doesn't send a '0' packet when key is unpressed,
            // otherwise the dispatchEvent() could be put in the do-while above
            for (const key in AnalogKeyCode) {
                // If value is different, dispatch event
                if (newBuffer[key] != this.buffer[key]) {
                    window.dispatchEvent(new CustomEvent(newBuffer[key] ? 'akeydown' : 'akeyup', { detail: { key: key, value: newBuffer[key] || 0 } }));
                }
            }

            // Swap buffers
            this.buffer = newBuffer;
        });
    }
}

export { WootingKeyboard, ConnectNew, ConnectPrev, AnalogKeyCode };