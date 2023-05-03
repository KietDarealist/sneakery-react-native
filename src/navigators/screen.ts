export enum Screens {
  //auth
  LOGIN = 'LOGIN',

  //main
  MAIN = 'MAIN',

  WELCOME = 'WELCOME',
}

export interface RootStackParamList {
  LOGIN: string;
  WELCOME: string;
  MAIN: string;
}
