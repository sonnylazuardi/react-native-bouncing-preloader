# React Native Bouncing Preloader

Bouncing Preloader Component with custom icons in React Native

![icon](example/assets/icon.png)

![demo](bouncingpreloader.gif)

Based on the dribbble shot by [Dany Rizky](https://dribbble.com/danyrizkyw):
https://dribbble.com/shots/4423936-Islands-Preloader-Animation

![dribbbleshot](https://cdn.dribbble.com/users/191647/screenshots/4423936/dribbble-shot.gif)

#### Demo

https://exp.host/@sonnylazuardi/react-native-bouncing-preloader

#### Background

When I saw the preloader animation, I think it would be great if we can use our own icon and give more control to the bouncing animation and rotation. So I tried to make this open source component.

#### Goals

* Animate our own custom icon
* Flexible to use remote image url or local image file
* Able to control distance, rotation angle etc

#### Usage

* `npm install --save react-native-bouncing-preloader`
* In your react native script add these lines

```jsx
import BouncingPreloader from 'react-native-bouncing-preloader';

<BouncingPreloader
  icons={[
    'https://www.shareicon.net/data/256x256/2016/05/04/759946_bar_512x512.png',
    require('./assets/image.png'),
  ]}
  leftRotation="-680deg",
  rightRotation="360deg",
  leftDistance={-180},
  rightDistance={-250},
  speed={1200} />

// or just give icons

<BouncingPreloader
  icons={[
    require('./assets/image1.png'),
    require('./assets/image2.png'),
  ]}/>
```

### Available props

* `icons`: PropTypes.array,
* `leftRotation`: PropTypes.string,
* `rightRotation`: PropTypes.string,
* `leftDistance`: PropTypes.number,
* `rightDistance`: PropTypes.number,
* `speed`: PropTypes.number

#### Contributing

* Feel free to open PR.

#### Examples

[Expo Example](example)

Most of the credit goes to [Dany Rizky](https://dribbble.com/danyrizkyw) for the design inspiration.

#### License

MIT Licensed
