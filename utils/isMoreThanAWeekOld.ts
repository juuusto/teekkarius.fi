const millisecondsInAWeek = 1000 * 60 * 60 * 24 * 7;

export const isMoreThanAWeekOld = (date: string) => {
  const currentTime = new Date();
  const weekAgo = new Date(+currentTime - millisecondsInAWeek);
  return +new Date(date) < +weekAgo;
};
