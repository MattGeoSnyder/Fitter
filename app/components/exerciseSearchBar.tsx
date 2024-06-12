import getExercises from "@/wger/getExercises";
import { SearchBar } from "@/app/components/searchBar";
import { URLSearchParams } from "url";

export const ExerciseSearchBar = async (params: URLSearchParams) => {
  const exercises = await getExercises(params);
  if (exercises.length) { console.log("success"); }
  return (
    <div>
      <SearchBar searchItems={exercises} />
    </div>
  );
};
