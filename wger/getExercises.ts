type Exercise = {
	id: number;
	uuid: string;
	name: string;
	exercise_base: number;
	description: string;
	category: number;
	muscles: number[];
	muscles_secondary: number[];
	equipment: number[];
	language: number;
	variations: number[];
};

export default async function getExercises(
  params: URLSearchParams,
): Promise<Exercise[]> {

  type myReq = RequestInit;
  let res = await fetch("https://wger.de/api/v2/exercise/?language=2&limit=20&offset=20", {
    headers: { Accept: "application/json", "Content-Type": "application/json" },
  });
  let exercises = await res.json();

  return exercises.results;
}
