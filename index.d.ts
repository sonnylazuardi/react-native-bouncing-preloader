declare module 'react-native-bouncing-preloader' {
  import React from 'react';

  interface BouncingPreloaderProps {
    icons: Array<any>;
    leftRotation?: string;
    rightRotation?: string;
    leftDistance?: number;
    rightDistance?: number;
    speed?: number;
    size?: number;
  }

  export default class BouncingPreloader extends React.Component<BouncingPreloaderProps> {}
}
