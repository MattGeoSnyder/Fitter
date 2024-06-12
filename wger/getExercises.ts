export default async function getExercises(params: URLSearchParams): Promise<any[]> {
  let checkParams = (toCheck: IterableIterator<string>, params:URLSearchParams) => {
    let has = Array.from(toCheck).every((param: string) => params.has(param));

    if (!has) {
      throw new Error("Missing parameters");
    }
  };

  let res = await fetch("https://wger.de/api/v2/exercise/");
  let exercises = await res.json();
  console.log(exercises);

  return exercises;
}
