#Event Page assignment

### Stack

The solution is built on:
* [WebPack] - v4
* [ReactJS] - v16.5.2, Babel, ES6+
* [Redux] - + redux-saga
* [json-server] - standalone micro json server, https://github.com/typicode/json-server
* [sass-loader] - scss support for webpack
* [ESlint] - js syntax law enforcement
* [Express] - fast node.js network app framework
* [Yarn] - a wrapper around npm

### Installation
Install the dependencies and devDependencies and start the server.

#### dev mode
```sh
$ yarn install
$ yarn start:mockapi
$ yarn start
```

#### production mode
```sh
$ yarn install --production
$ yarn start:prod
```
App started on localhost:3000

#### in separate Terminal
Starts mock Api on localhost:3001
```sh
$ yarn start:mockapi
```

### Folder structure
```
 app/
    app.js  - entry point react
    components/  - lower order components, loaded from h.o.c's
        EventsLoader/
        EventsSlider/
        Header/
        LoadingIndicator/
        NewsLetterSubscriber/
    configureStore.js
    containers/  - higher order components
        App/
        HomePage/
        NotFoundPage/
    fonts/
    images/
    index.html
    reducers.js
    styles/
    utils/ - various utils
 config/ - webpack configs
 jest.config.js - tests, not implemented
 mock-api/ - mock API, db.json is the seeding database for events
 node_modules/
 package.json
 package-lock.json
 README.md
 server/ - express server
 yarn.lock
 yarn-error.log
 ```

 ###Implementations

 HEADER - implemented
 EVENTS SLIDER - implemented, not redux but data hardcoded in h.o.c.
 SHOW MORE EVENTS - implemented, redux and json endpoint
 SUBSCRIPTIONS - implemented, only UI
 RESPONSIVE DESIGN - implemented, not optimized for different devices, just viewport size
 BEM NAMING - not entirely but close
 NO CSS FRAMEWORK - done, maybe could be beter
 SASS SUPPORT - done
