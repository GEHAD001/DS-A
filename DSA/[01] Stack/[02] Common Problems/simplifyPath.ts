/**
 * Simplifies a given file system path by resolving '.', '..' and multiple slashes.
 *
 * @param {string} path - The file system path to simplify
 *                       Examples: "/home/", "/home//test/", "/a/./b/../../c/"
 * @returns {string} The simplified canonical path
 *
 * @example
 * simplifyPath("/home/") // returns "/home"
 * simplifyPath("/a/./b/../../c/") // returns "/c"
 * simplifyPath("/../") // returns "/"
 *
 * @description
 * - Handles multiple consecutive slashes ('//') as single slash
 * - Handles current directory ('.') references
 * - Handles parent directory ('..') references
 * - Always begins with a single forward slash
 * - Does not end with a trailing slash unless it's the root directory
 */
function simplifyPath(path: string) {
  const stack: string[] = [];
  const dirs = path.split("/");

  for (const dir of dirs) {
    // remove last dir
    if (dir === "..") {
      if (stack.length) stack.pop();
      continue;
    }

    // add dir to stack, but should not be empty or current dir
    if (dir !== "." && dir !== "") {
      stack.push(dir);
    }
  }

  return stack.length ? "/" + stack.join("/") : "/";
}

console.log(simplifyPath("/ home/../../tmp//./"));
export { simplifyPath };
