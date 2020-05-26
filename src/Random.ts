export let getRandomIds = (list: number[], max: number) => {
  let ids = new Set<number>();
  while (ids.size < max) {
    const generatedIndex = Math.round(Math.random() * list.length - 1);
    if (list[generatedIndex]) {
      ids.add(list[generatedIndex]);
    }
  }
  return ids;
};
