import { PersonType } from "../../types/person-type";

export default function ListItemPerson({ person }: { person: PersonType }) {
  return (
    <li className="m-2 p-1 rounded-sm bg-slate-500 flex gap-x-5">
      <div className="rounded-sm bg-slate-800 p-2 w-full flex gap-x-4 items-center overflow-auto">
        <img
          className=" ml-1 rounded-full"
          src={person.picture.medium}
          alt=""
        />
        <div className="flex flex-col gap-x-4 min-w-56">
          <h1 className="text-lg">{`${person.name.title} ${person.name.first} ${person.name.last}`}</h1>
          <p>{person.gender}</p>
        </div>
        <div className="flex flex-col gap-x-4 ">
          <p>{person.phone}</p>
          <p>{person.email}</p>
        </div>
      </div>
    </li>
  );
}
