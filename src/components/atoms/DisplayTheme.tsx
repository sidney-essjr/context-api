import useTheme from "../../hooks/useTheme";

export default function DisplayTheme() {
  const { theme } = useTheme();
  return <p>Theme: {theme}</p>;
}
