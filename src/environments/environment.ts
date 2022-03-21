// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  animeAPI: 'https://api.jikan.moe/v3/search/anime?q=',
  animeQuotes: 'https://animechan.vercel.app/api/quotes/character?name=',
  firebase: {
    projectId: 'comm-animes-project',
    appId: '1:738770977898:web:90e595f43cfd2c9d047613',
    storageBucket: 'comm-animes-project.appspot.com',
    apiKey: 'AIzaSyBfmV18Hp1IiE42AFo0RoH_2z1_0kP2N3c',
    authDomain: 'comm-animes-project.firebaseapp.com',
    messagingSenderId: '738770977898',
  },
  production: false,
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
