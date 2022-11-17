export const makeShortName = (fullname: string | undefined) => {
  if (fullname) {
    const namesArr = fullname.split(' ');
    namesArr[1] = `${namesArr[1].slice(0, 1)}.`;
    return namesArr.join(' ');
  }

  return fullname;
};
