import { Icon } from "icontree";

export function App() {
  return (
    <div>
      <Icon id="heart-fill" size={48} color="#ff0000" mode="static" />
      <Icon id="spinner" size={48} color="#00ff00" mode="loop" />
      <Icon id="play-button" size={48} color="#0000ff" mode="onClick" onClick={() => {}} />
      <Icon id="star" size={48} color="#ffaa00" mode="hover" />
    </div>
  );
}
