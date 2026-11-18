import IconRenderer from "./IconRenderer";
import { registry, type IconId } from "./registry";
import type { IconRendererProps } from "./IconRenderer";

export type IconProps = Omit<IconRendererProps, "id" | "loadAnimation"> & {
  id: IconId;
};

export default function Icon({ id, ...props }: IconProps) {
  const loadAnimation = registry[id];
  return <IconRenderer id={id} loadAnimation={loadAnimation} {...props} />;
}
