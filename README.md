# wooting-js
Lightweight JavaScript (TypeScript) library using WebHID.

## Demo
[Click here](https://mexican-man.github.io/wooting-js/)

## How to install
Download the compiled `.js` files in `/bin`, and download the source and build it for yourself; no requirements other than `npm` and `typescript`.

## How to use
First you have to make sure the client's [browser supports WebHID](https://caniuse.com/webhid). You can check this like so:
```js
if ("hid" in navigator) {
  // Good 👍
} else {
  // Bad 💀
}
```

Make sure to include the script:
```html
<script src="wooting.js"></script>
```

Trigger the prompt to get a keyboard (has to be user triggered):
```js
keyboards = wootingConnectNew();
```

Set up a promise waiting for the user to pick their Wooting keyboard:
```js
k.then((res) => {
  kb = res[0]
  // kb is our keyboard!!!
}).catch((err) => {
  // catch error
});
```

And you're all set! There are two ways to capture user input:
1. Through a listener
2. Through the buffer

#### Listener:
```js
kb.addKeyListener(keys.A, (key, value) => {
  console.log(value || 0)
});
```

#### Buffer:
```js
setInterval(() => {
    for (let key in keys) {
      try {
        console.log(`${key} key value: ${kb.buffer[keys] || 0}`)
      } catch (err) {
        // catch error
      }
    }
}, 1000) // Increase and decrease 
```

> NOTE: It's important to have the `|| 0` because `0` will return `undefined`, as we don't know if a key is unpressed, or just doesn't exists on that keyboard.

Using a listener gives a smaller footprint, while reading the buffer is a lot more efficient for reading lots of keys. Pick whichever works best for you.

## Performance
If you're looking for increase performance, you can comment out *any* keys you're not using in the enum at the top of `/src/wooting.ts` for a significant performance improvement. I've gone ahead and commented out all keys not available on the Wooting One.
