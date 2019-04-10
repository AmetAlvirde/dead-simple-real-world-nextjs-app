# Dead simple real world Nextjs app

Tired of next.js toy examples that cannot be used in real, complex, business
projects? This is for you.

There's also an [advanced real world Nextjs app][14], which is a fairly more
complex version of this app. If you are looking for a starter kit that is not
just the barebones for a real world app, then I highly recommend you to check
it out.

## What's inside:

- A custom server with compression. After build, app scores on [lighthouse][1]:
  - Performance: 99
  - Accesibility: 100
  - Best Practices: 93
  - SEO: 90
- Cookie based authentication and authorization system with roles. Kept simple:
  - You can login using user: `admin` password: `password`
  - Local, hardcoded auth on `server/router/index.js`, not production
    ready, obviously. You get the flexibility to connect it to a database, SDK,
    2FA, or any authentication method you want. As simple as that
- Redux with [react-redux][2] and [redux-tunk][3] architecture
- A redux store with cleanup mechanism (All reducers reset to initial state
  after logout)
- Redux devtools are only enabled in dev mode
- [Material-ui][4] support with SSR (JSS)
- [Styled components][5] with SSR (yes, both css-in-js libraries together with
  SSR)
- [React hooks][6] including custom hooks demo (hooks/useForm)
- Airbnb based [javascript][7] and [react][8] styleguides enforced with VSCode
  integration (See Pre-requisites to ke it work)
- [Prettier][9] integration (See Pre-requisites to make it work)
- [Husky][10]/[lint-staged][11] configuration:
  - pre-commit hook configured so it lints and runs prettier (both fixing what
    they can automatically). If it passes, you can commit, if it doesn't, you
    can't (you can by `git commit -n` if needed) (See pre-requisites for
    instructions)
- A really, really simple component on top of the starter kit to teach you how
  to integrate your own components with the redux store. (Yet another counter)

## Let's code!

1. Clone this repository
2. `npm install`

#### For development

3. `npm run dev`

#### For production

3. `npm run build`
4. `npm run start`

## Pre-requisites:

### To integrate code styleguide and prettier with VSCode:

- Install [Eslint][12] and [Prettier][13] extensions
- Add to your VSCode configuration (Ctrl+,):

```javascript
  {
  "editor.formatOnPaste": true,
  "editor.formatOnSave": true,
  "editor.formatOnType": true,
  "prettier.eslintIntegration": true
  }
```

### To successfully integrate Husky and get pre-commit hooks working:

For Husky to run properly, a git repository must exists before running
dependencies installation, as git hooks are configured during this process
(no matter if you use npm or yarn). If it's not the case, just reinstall
Husky for it to set its git hooks.

[1]: https://developers.google.com/web/tools/lighthouse
[2]: https://redux.js.org/basics/usage-with-react
[3]: https://github.com/reduxjs/redux-thunk
[4]: https://material-ui.com
[5]: https://www.styled-components.com
[6]: https://reactjs.org/docs/hooks-reference.html
[7]: https://github.com/airbnb/javascript
[8]: https://github.com/airbnb/javascript/tree/master/react
[9]: https://prettier.io
[10]: https://github.com/typicode/husky
[11]: https://github.com/okonet/lint-staged
[12]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[13]: http://google.comhttps://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[14]: https://github.com/AmetAlvirde/advanced-real-world-nextjs-app
