function join(array: any[], separator = ",") {
  return array.reduce((acc, cur, i) => {
    return (
      acc +
      (i + 1 === array.length ? cur.toString() : cur.toString() + separator)
    );
  }, "");
}

export default join;
