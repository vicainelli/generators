/**
 * @description Converts a kebab-case string into camel case
 * @param {String} string
 */
export const camelize = (string: String) : string => {
  return string.replace(/[.-](\w|$)/g, function (_, x) {
    return x.toUpperCase()
  })
}
