# @jinpill/react-libs

My personal react libraries.

## Installation

```bash
# npm
npm i -D @jinpill/react-libs

# yarn
yarn add -D @jinpill/react-libs

# pnpm
pnpm add -D @jinpill/react-libs
```

## Usage

Import and use the components or hooks in your project.

## Components

### Basic Components

| Name               | Usage                                                                                |
| :----------------- | :----------------------------------------------------------------------------------- |
| **Card**           | This component is a simple card UI.                                                  |
| **Label**          | This component is a simple label UI.                                                 |
| **Tooltip**        | This component displays a tooltip when hovering over the child element.              |
| **Scrim**          | This component is a simple scrim UI.                                                 |
| **Skeleton**       | This component is a simple and customisable skeleton UI.                             |
| **Icon**           | This component displays SVG icons based on the inputted source or preset name.       |
| **TextNormalizer** | This component splits the text by breaking lines and normalizes the text alignment.  |
| **Ellipsis**       | This component truncates and displays content based on the length of the child text. |
| **BottomSheet**    | The mobile-style popup UI that comes up from the bottom of the screen.               |
| **Panel**          | This component is a panel UI for options.                                            |

### Interactive Components

| Name             | Usage                                                                                      |
| :--------------- | :----------------------------------------------------------------------------------------- |
| **Chip**         | This component is a simple chip UI.                                                        |
| **Button**       | This component is a simple button UI.                                                      |
| **IconButton**   | This component is a simple icon button UI.                                                 |
| **Input**        | This component is a simple input UI.                                                       |
| **Dropdown**     | This component is a simple dropdown UI.                                                    |
| **Checkbox**     | This component is a simple checkbox UI.                                                    |
| **Radio**        | This component is a simple radio UI.                                                       |
| **ToggleButton** | This component is a simple toggle button UI.                                               |
| **ToggleSwitch** | This component is a simple toggle switch UI.                                               |
| **Options**      | This component displays a selectable options list at the top of the screen.                |
| **Scrollbar**    | This component displays the same appearance of scrollbar regardless of the browser and OS. |

## Hooks

| Name               | Usage                                                                                  |
| :----------------- | :------------------------------------------------------------------------------------- |
| **useStateRef**    | This hook returns a ref object refering to the state.                                  |
| **useTimeout**     | This hook helps manage setTimeout easily in React.                                     |
| **useInterval**    | This hook helps manage setInterval easily in React.                                    |
| **useMountEffect** | This hook helps animate components on mount and unmount.                               |
| **useCloneEffect** | This hook duplicates component when changing states and helps animate cloned elements. |
