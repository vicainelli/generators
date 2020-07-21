/**
 * @description Transforms a string to Kebab case
 * @param {String} text String to transform to kebab case
 */
export const kebabify = (text: string) : string => {
  return (
    text &&
    text
      .match(
        /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
      )
      .map((x) => x.toLowerCase())
      .join("-")
  );
}
