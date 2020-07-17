export const fakeProgress = (progressLoading, setProgressLoading) => {
  let x = progressLoading;
  return setInterval(() => {
    x += 1;
    setProgressLoading(x);
  }, 100);
};

export default {
  fakeProgress,
};
