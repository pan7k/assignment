<br>
<img src="public/logo.png" width=30 height=30>

### Assignment

I’ve built a design system template based on this [Figma](https://www.figma.com/design/e5TtIt7EHS2vRHv8PZBgTv/Zadanie—React-developer?node-id=1-6&t=ekHAYAT8xMqOeI1n-0). The focus is on the <b>TextInput</b> component, and the design precisely matches the assignment 1:1.

When you open Storybook, you can find the TextInput variants from the assignment under Examples/TextInput. My solution also supports theme switching, which can be used to separate different branches (e.g., main / next).

This Storybook template comes from my own design system, which supports publishing the library to the npm registry via GitHub Actions. You can test the library by clicking on [Packages](https://github.com/pan7k/assignment/pkgs/npm/assignment), where you'll find detailed information.

Due to Server-Side Rendering and bundle size reduction, I opted for Tailwind instead of styled-components. Since Tailwind v4 introduced many changes, the theme declaration and styling are temporary.

---

#### Installation

```bash
$ bun install
# yarn install
```

For the development environment to work, you need to have [Node.JS](https://nodejs.org) and a [package manager](https://bun.sh) installed. This project is optimised for [Visual Studio Code](https://code.visualstudio.com).

#### Running Storybook

```bash
$ bun start
# yarn start
```

#### Stack

[Storybook](https://storybook.js.org)<br>
[React](https://react.dev)<br>
[TypeScript](https://typescriptlang.org)<br>
[Tailwind](https://tailwindcss.com)

#### License

UNLICENSED
