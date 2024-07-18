import { useQuery } from "@tanstack/react-query";
import { Reducer, useEffect, useReducer } from "react";
import {
  Action,
  peopleReducer,
} from "../../providers/store/reducer/people-reducer";
import { getPerson } from "../../services/people-query";
import { type PersonType } from "../../types/person-type";
import Button from "../atoms/Button";
import PeopleList from "../molecules/PeopleList";

export default function PeopleContainer() {
  const { data, isLoading, error, isError, refetch, isFetching } = useQuery({
    queryKey: ["person"],
    queryFn: getPerson,
    enabled: false,
  });

  const [state, dispatch] = useReducer<Reducer<PersonType[], Action>>(
    peopleReducer,
    []
  );

  function handleGetPerson() {
    refetch();
  }

  useEffect(() => {
    if (data) dispatch({ type: "ADD", payload: data });
  }, [data, dispatch]);

  if (isError) return <h1>{error.message}</h1>;

  return (
    <section className="m-7 flex flex-col w-[700px] p-3 border-2 border-gray-500 rounded-md bg-slate-800">
      <h1 className="text-2xl">Redux</h1>
      <PeopleList isLoading={isLoading} people={state} />
      <Button
        disabled={isFetching}
        className="ml-auto"
        type="button"
        onClick={handleGetPerson}
      >
        {isFetching ? "Loading..." : "Get Person"}
      </Button>
    </section>
  );
}
