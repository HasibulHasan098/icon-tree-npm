# icon-tree-animate

React component for rendering Lottie icons from the [IconTree](https://icontree.cosmoscope.workers.dev) API, with runtime color control, size control, and 4 playback modes.

## Install

```bash
npm install icon-tree-animate
```

Requires `react` and `react-dom` (>=18) as peer dependencies.

## CLI — Add icons

Searches by icon name, downloads the JSON, and regenerates the registry.

```bash
npx icontree add --search "<query>"
```

```bash
# Quick pick — takes the first result
npx icontree add --search "heart"

# Interactive — browse and pick from results
npx icontree add --search "arrow" --interactive
```

The `--interactive` flag opens a picker where you can select **multiple icons** at once:

- `0` — single selection
- `0, 2, 4` — comma or space separated  
- `0-3` — range
- `all` — all results

The icon's display name is used as the file name (slugified).

## Component

```tsx
import { Icon } from "icon-tree-animate";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `IconId` | required | Icon identifier, must match a key in the registry |
| `size` | `number \| string` | `24` | Width and height of the icon |
| `color` | `string` | `"currentColor"` | Hex color string, e.g. `"#ff0000"` |
| `mode` | `"static" \| "loop" \| "onClick" \| "hover"` | `"static"` | Playback mode |
| `onClick` | `() => void` | — | Callback for `onClick` mode |
| `resetAfterPlay` | `boolean` | `true` | Reset to frame 0 after animation completes |
| `className` | `string` | — | CSS class |
| `style` | `React.CSSProperties` | — | Inline styles |

### Modes

- **static** — Renders frame 0 only. No animation.
- **loop** — Autoplays with infinite loop.
- **onClick** — Idle at frame 0. Plays once on click. Calls `onClick` if provided.
- **hover** — Idle at frame 0. Plays once on mouse enter. Lets animation finish on mouse leave.

### Examples

```tsx
<Icon id="heart" size={48} color="#ff0000" mode="static" />
<Icon id="heart" size={48} color="#00ff00" mode="loop" />
<Icon id="heart" size={48} color="#0000ff" mode="onClick" onClick={() => console.log("clicked")} />
<Icon id="heart" size={48} color="#ffaa00" mode="hover" />
```

## How it works

**Design-time (CLI):** `add-icon.js` fetches raw Lottie JSON from the IconTree API and saves it to `src/icons/`. No colors are applied.

**Runtime (Component):** The icon JSON is loaded via dynamic import (tree-shakeable), recolored in-memory using the `color` prop, and rendered via Lottie. No network requests.

**Recolor:** The `recolorLottie()` function deep-clones the JSON, converts hex to Lottie RGBA float format, and walks the layer tree to update fill and stroke colors. Results are memoized by icon + color.

## Build

```bash
npm run build        # Build dist/
npm run generate-registry  # Regenerate src/registry.ts from src/icons/
```

## Project structure

```
icontree/
├── scripts/
│   ├── add-icon.js           # CLI: add icons from the API
│   └── generate-registry.js  # Generate registry.ts from icon files
├── src/
│   ├── Icon.tsx              # React component
│   ├── recolor.ts            # Pure recolor function + memo cache
│   ├── registry.ts           # Auto-generated icon map
│   ├── types.ts              # Lottie type definitions
│   └── icons/                # Downloaded icon JSON files
├── dist/                     # Built output
└── example/App.tsx           # Usage example
```
