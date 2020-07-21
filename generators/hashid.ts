export const hashid = (size = 3) : string => {
  let uuid:string= "";
  const dictionary =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < size; i++) {
    uuid += dictionary.charAt(Math.floor(Math.random() * dictionary.length));
  }
  return uuid;
}
