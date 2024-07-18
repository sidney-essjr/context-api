import { memo } from "react";
import { PersonType } from "../../types/person-type";
import ListItemPerson from "../atoms/ListItemPerson";

export default memo(function PeopleList({
  people,
  isLoading,
}: {
  people: PersonType[] | null;
  isLoading: boolean;
}) {
  return (
    <ul className="border border-gray-500 m-3 h-80 overflow-auto rounded-sm bg-[#1a1a1a]">
      {isLoading && "Loading..."}
      {people &&
        people.map((person) => (
          <ListItemPerson key={person.phone} person={person} />
        ))}
    </ul>
  );
});
