import useTheme from "../../hooks/useTheme";
import ChangeTheme from "../atoms/ChangeTheme";
import DisplayTheme from "../atoms/DisplayTheme";

export default function ContextContainer() {
  const { theme } = useTheme();

  return (
    <section
      className={`m-7 p-3 flex flex-col gap-y-3 w-40 border-2 border-stone-500 rounded-md ${
        theme === "White"
          ? "bg-slate-100 text-slate-700"
          : "bg-slate-800 text-slate-50"
      }`}
    >
      <h1 className="text-2xl">Context API</h1>
      <DisplayTheme />
      <ChangeTheme />
    </section>
  );
}
