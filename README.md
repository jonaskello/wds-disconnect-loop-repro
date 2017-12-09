# Repro of WDS disconnected! Infinate Loop

```
yarn install
yarn start
```

May have to manually reload a couple of times to trigger the issue.

# What happens:

The page loads and then there is a console message:

```
client?cd17:164 [WDS] Disconnected!
msgClose @ client?cd17:164
onclose @ socket.js:16
EventTarget.dispatchEvent @ sockjs.js:170
(anonymous) @ sockjs.js:965
setTimeout (async)
SockJS._close @ sockjs.js:953
SockJS._transportMessage @ sockjs.js:893
EventEmitter.emit @ sockjs.js:86
WebSocketTransport.ws.onmessage @ sockjs.js:2957
```

The page re-loads and then the same massage comes again, and then the page
reloads and so on...

# Versions

```
$ node --version
v8.9.1

$ yarn --version
1.2.1

Windows 10:
Version	10.0.16299 Build 16299

Chrome:
Version 62.0.3202.94 (Official Build) (64-bit)
```

# Info

The problem goes away if I do one of the following:

* Remove `babel-polyfill` from the entrypoint.
* Set `devServer.https` to `false`
