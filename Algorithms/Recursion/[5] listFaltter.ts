export function listFlatter(list: any[]): any[] {
  let flatter: any[] = [];

  function flatterHandler(element: any[] | any) {
    // Base-Case [Solution ??] : Push non-object values to falter
    if (typeof element !== "object") {
      flatter.push(element);
      return;
    }

    // Start Solution of the Problem because it's an Object
    for (let i = 0; i < element.length; i++) {
      flatterHandler(element[i]);
    }
  }

  flatterHandler(list);

  return flatter;
}
