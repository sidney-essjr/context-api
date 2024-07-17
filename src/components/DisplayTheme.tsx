import useTheme from "../hooks/useTheme";

export default function DisplayTheme() {
  const { theme } = useTheme();
  return <div>Theme: {theme}</div>;
}
