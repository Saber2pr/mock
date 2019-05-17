# @saber2pr/mock

> mock server.

```bash
# from npm
npm install @saber2pr/mock -g

# from github
git clone https://github.com/Saber2pr/-saber2pr-mock.git
```

# Usage

```bash
# in you workspace root, execute:
smock # http://localhost:2333

# smock <port>, like:
smock 3000 # http://localhost:3000

```

### in you workspace root must has a mock.json file:

for example:

```json
{
  "/": "hello world!",
  "api": {
    "user": ["saber2pr", "nanasaki"],
    "com": "com"
  },
  "other": "233"
}
```

the json data will be parsed to an array:

```js
;[
  { key: '/', value: 'hello world!' },
  { key: '/api/user', value: ['saber2pr', 'nanasaki'] },
  { key: '/api/com', value: 'com' },
  { key: '/other', value: '233' }
]
```

then config to server :)

---

## start

```bash
npm install
```

```bash
npm start

npm test
```

> Author: saber2pr

---

## develope and test

> you should write ts in /src

> you should make test in /src/test

> export your core in /src/index.ts!
