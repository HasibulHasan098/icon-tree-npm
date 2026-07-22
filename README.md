# icon-tree-animate

React component for rendering Lottie icons from the [IconTree](https://icontree.cosmoscope.workers.dev) API, with runtime color control, size control, and 4 playback modes.

No icon files bundled — icons are fetched from the API at runtime. The registry contains only API links, keeping the package lightweight.

## Install

```bash
npm install icon-tree-animate
```

Requires `react` and `react-dom` (>=18) and `lottie-react` as dependencies.

## Component

```tsx
import Icon from "icon-tree-animate";
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `IconId` | required | Icon identifier (e.g. `"heart"`, `"arrow-right"`) |
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

## Usage

### Component

```tsx
import Icon from "icon-tree-animate";

<Icon id="heart" size={48} color="#ff0000" mode="static" />
<Icon id="heart" size={48} color="#00ff00" mode="loop" />
<Icon id="heart" size={48} color="#0000ff" mode="onClick" onClick={() => console.log("clicked")} />
<Icon id="heart" size={48} color="#ffaa00" mode="hover" />
```

### Search icons

Find icon IDs by name using the CLI:

```bash
npx icontree search "arrow"
# → {arrow-2, icon}
# → {arrow-3, icon}
# → {arrow-circle-down, icon}
# → {arrow-circle-left, icon}
# → {arrow-right, icon}

npx icontree search "arrow right"
# → {arrow-right, icon}
# → {arrow-right2, icon}
# → {arrow-right3, icon}
# → {arrow-right4, icon}

npx icontree search "heart add"
# → {heart-add, icon}
```

Multi-word queries work — "arrow right" matches `arrow-right`, `arrow-right2`, etc.

## How it works

**Runtime:** The icon JSON is fetched from the IconTree API (lazy, one request per icon), recolored in-memory using the `color` prop, and rendered via Lottie. Results are memoized by icon + color.

**Recolor:** The `recolorLottie()` function deep-clones the JSON, converts hex to Lottie RGBA float format, and walks the layer tree to update fill and stroke colors.

**Registry:** `src/registry.ts` maps icon IDs to API fetch URLs. No icon data is shipped with the package.

## Regenerating the registry

When you add new icon files to your source folder, regenerate the registry:

```bash
npm run generate-registry
```

This reads the `.json` filenames from the configured source folder and writes `src/registry.ts` with fetch entries pointing to the API.

## Build

```bash
npm run build        # Compile dist/index.js + dist/index.mjs
```

## Project structure

```
├── scripts/
│   └── generate-registry.js   # Generate registry.ts from a folder of icon names
├── src/
│   ├── Icon.tsx               # React component
│   ├── recolor.ts             # Recolor function + memo cache
│   ├── registry.ts            # Auto-generated icon → API URL map
│   └── types.ts               # Lottie type definitions
└── dist/                      # Built output (no icon data)
```
