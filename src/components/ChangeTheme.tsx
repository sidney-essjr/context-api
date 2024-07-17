import useTheme from "../hooks/useTheme";

export default function ChangeTheme() {
  const { changeTheme } = useTheme();
  return <button onClick={changeTheme}>Change theme</button>;
}
