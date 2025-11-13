function initializeNames(fullName){
  const names = fullName.split(' ');
  if (names.length <= 2) return fullName;

  const firstName = names[0];
  const lastName = names[names.length - 1];
  const middleNames = names.slice(1, names.length - 1);

  const initializedMiddles = middleNames.map(name => `${name[0]}.`);

  return [firstName, ...initializedMiddles, lastName].join(' ');
}
