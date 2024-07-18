import { PersonType } from "../types/person-type";

export async function getPerson() {
  const result = await fetch("https://randomuser.me/api/");
  const data = await result.json();
  return data.results[0] as PersonType;
}
