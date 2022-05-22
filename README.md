# wooting-js
Lightweight JavaScript (TypeScript) library using WebHID. Just for reading analog values, not for RGB.

## Demo
[Click here](https://mexican-man.github.io/wooting-js/)

## How to use
First you have to make sure the client's [browser supports WebHID](https://caniuse.com/webhid). You can check this like so:
```js
if ("hid" in navigator) {
  // Good 👍
} else {
  // Bad 💀
}
```

Install the script:
```bash
npm i wooting-js
```

Import, then trigger the prompt to get a keyboard (has to be user triggered):
```js
const keyboards = await ConnectNew();
```

Set up a promise waiting for the user to pick their Wooting keyboard:
```js
k.then((res) => {
  const kb = res[0]
  // kb is our keyboard!!!
}).catch((err) => {
  // catch error
});
```

And you're all set! There are two ways to capture user input:
1. Through a listener
2. Through the buffer

#### Listener:
```ts
kb.device.addEventListener('akeydown', (event) => {
  const { key, value } = event.detail;
  console.log(`${key} key value: ${value}`);
})
```

#### Buffer:
```ts
import { AnalogKeyCode } from 'wooting-js';

const p = kb.buffer[AnalogKeyCode.A];
console.log(`A key value: ${p}`);
```

Using a listener gives a smaller footprint, while reading the buffer is a lot more efficient for reading lots of keys. Pick whichever works best for you. In both cases, the value returned is from 0-255. Use `AnalogKeyCode.<insert-key-name>` to get the id for each key.