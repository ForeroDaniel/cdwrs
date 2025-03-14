const getFirstPython = (developers) => {
  const pythonDev = developers.find(({ language }) => language === 'Python');
  return pythonDev ? `${pythonDev.firstName}, ${pythonDev.country}` : 'There will be no Python developers';
};
