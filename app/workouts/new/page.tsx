import getExercises from "@/wger/getExercises";
import { ExerciseSearchBar } from "@/app/components/exerciseSearchBar";

export default async function Page(params: URLSearchParams) {
  return (
    <div>
      <div>
        <ExerciseSearchBar params={params} />
      </div>
    </div>
  );
}
