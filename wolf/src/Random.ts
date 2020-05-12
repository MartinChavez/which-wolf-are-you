export let getRandomIds = (list: number[], max: number) => {
  let ids = new Set<number>();
  while (ids.size < max) {
    const generatedId = Math.round(Math.random() * list.length);
    if (list.some((num) => num === generatedId)) {
      ids.add(generatedId);
    }
  }
  return ids;
};
