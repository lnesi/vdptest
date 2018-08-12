# Vodafone Technical Test FE

## Demo

https://lnesi.github.io/vdptest/index.html

### Install

```
git clone https://github.com/lnesi/vdptest.git
```

#### Requirements
Node +9
```
npm install
```

### Development
Start local devleopment server
```
npm run start
```
### Build
Build compile version for host
```
npm run build
```
### Deploy

Deploy to Github Pages

```
npm run deploy
```
### Unit Testing

```
npm run test
```

#### Results
```
 PASS  src/App.test.js
  ✓ it renders (25ms)
  ✓ allows us to read and set props (1ms)
  ✓ calls componentDidMount (21ms)
  ✓ it renders hero_phone (21ms)
 
 PASS  src/components/HeroPhone.test.js
  ✓ it renders (23ms)
  ✓ allows us to read and set props (20ms)
  ✓ renders the title (21ms)
  ✓ renders the image (17ms)
  ✓ renders the rate component (18ms)
  ✓ renders color selector (16ms)
  ✓ renders capacity selector (17ms)
  ✓ renders price details (15ms)
  ✓ renders the correct initial color image  (21ms)
  ✓ renders the correct initial color label  (25ms)
  ✓ renders the correct initial memory  (20ms)
  ✓ does it change the image on mouseover (25ms)
  ✓ does it change the color label on mouseover (22ms)
  ✓ does it change the capacity label on mouseover (31ms)
```

