export default function mount(sketchFns = {}) {
  return function sketch(p) {
    const boundFns = Object.fromEntries(
      Object.entries(sketchFns).map(([name, fn]) => [
        name,
        (...args) => fn(p, ...args),
      ])
    );

    Object.assign(p, boundFns);
  };
}
