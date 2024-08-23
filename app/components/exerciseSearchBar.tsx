import getExercises from "@/wger/getExercises";
import { SearchBar } from "@/app/components/searchBar";
import { URLSearchParams } from "url";

interface ExerciseSearchBar extends HTMLInputElement {
	params: URLSearchParams;
}

export const ExerciseSearchBar = async ({ params, ...rest }: ExerciseSearchBar) => {
  const exercises = await getExercises(params);
  if (exercises.length) { console.log("success"); }
  return (
    <div>
      <SearchBar searchItems={exercises} {...rest} />
    </div>
  );
};
