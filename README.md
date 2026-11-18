# icon-tree-animate

An offline-ready React library of **946 animated Lottie icons**. Each icon is bundled with the package and lazy-loaded locally. After installation, rendering and icon search make no requests to an external icon API or host.

Use the component to render an icon at a chosen size and color, with static, loop, click, or hover playback. The package supports React 18 and later and includes ESM, CommonJS, and TypeScript declaration outputs.

## Install

```bash
npm install icon-tree-animate
```

`react` and `react-dom` version 18 or later are peer dependencies. `lottie-react` is installed as a package dependency.

## Quick start

```tsx
import Icon from "icon-tree-animate";

export function SaveAction() {
  return (
    <button type="button" onClick={() => save()}>
      <Icon id="heart" size={24} color="#e5484d" mode="onClick" />
      Save
    </button>
  );
}
```

The library also has named exports:

```tsx
import { Icon, recolorLottie, getRecoloredLottie } from "icon-tree-animate";
import type { IconId, IconProps, LottieJSON } from "icon-tree-animate";
```

## Tree-shakeable per-icon imports

For icons known at build time, import each icon from its own ESM subpath. The bundle then includes only the icon modules imported by your app, instead of the full dynamic registry.

```tsx
import HeartIcon from "icon-tree-animate/icons/heart";
import CopyIcon from "icon-tree-animate/icons/copy";

<HeartIcon size={24} color="#e5484d" mode="onClick" />
<CopyIcon size={16} color="#2477d4" mode="hover" />
```

These per-icon components accept the same props as the generic `Icon`, except that the icon ID is fixed by the import path. Continue using the generic `Icon` with `id` when the icon name is selected dynamically at runtime; that API includes the registry so it can resolve any ID.

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `id` | `IconId` | required | Icon name, such as `"heart"` or `"arrow-right"` |
| `size` | `number \| string` | `24` | Width and height of the wrapper |
| `color` | `string` | `"currentColor"` | Hex color such as `"#ff0000"`; `"currentColor"` follows the wrapper's computed text color |
| `mode` | `"static" \| "loop" \| "onClick" \| "hover"` | `"static"` | Playback behavior |
| `onClick` | `() => void` | — | Callback for click playback |
| `bindId` | `string` | — | DOM `id` of an external element whose click triggers click playback |
| `resetAfterPlay` | `boolean` | `true` | Return to frame zero after playback completes |
| `className` | `string` | — | Class applied to the icon wrapper |
| `style` | `React.CSSProperties` | — | Inline styles applied to the icon wrapper |

## Playback modes

- `static` displays the first frame.
- `loop` plays continuously.
- `onClick` plays once when the icon is clicked. It also calls `onClick` when provided.
- `hover` plays once when a pointer enters the icon.

```tsx
<Icon id="heart" mode="static" />
<Icon id="arrow-right" mode="loop" color="#2477d4" />
<Icon id="tick-circle" mode="onClick" onClick={() => save()} />
<Icon id="star" mode="hover" />
```

### Trigger playback from another element

Set `bindId` to the DOM `id` of an existing element. The icon must use `mode="onClick"`. Clicking the matching element starts the icon animation and calls `onClick` when provided.

```tsx
<button id="like-button" type="button">Like</button>
<Icon id="heart" mode="onClick" bindId="like-button" onClick={() => like()} />
```

The target must be present when the effect runs. Prefer a real button or link so the trigger remains keyboard accessible.

## Find an icon

Search the bundled icon index from the command line:

```bash
npx icontree search "arrow right"
npx icontree search "heart,star"
```

Search matches icon IDs containing any query term. Commas and spaces both separate terms. Results come from the package's local icon index; the command does not make network requests.

## Recoloring

The `color` prop updates Lottie solid fill and stroke colors in memory. `currentColor` uses the wrapper's computed CSS text color. The exported `recolorLottie(json, color)` function returns a recolored copy of the supplied animation data; `getRecoloredLottie(iconId, json, color)` also memoizes results by icon and color.

## Offline behavior and package contents

The package includes all 946 icon animations as local modules. Neither API fetches icon data from a remote URL. The CLI searches the included local index. Per-icon ESM subpaths let bundlers emit only the selected animations; the generic `Icon` entry is intended for runtime-selected IDs and includes the registry.

## Build and update the icon registry

The repository keeps source animation JSON files in `src/icons/`. After adding or removing source icons, regenerate the typed registry and CLI index, then build:

```bash
npm run generate-registry
npm run build
```

The build writes the generic ESM/CommonJS entries, tree-shakeable per-icon ESM entries and declarations, and CommonJS compatibility entries to `dist/`. Only the built files and CLI files are included in the npm package.

Before publishing a release, inspect the package contents and compressed size:

```bash
npm pack --dry-run
```
