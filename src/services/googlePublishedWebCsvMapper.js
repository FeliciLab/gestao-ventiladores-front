function tratarChave(currentValue) {
  return currentValue.replace(/"/g, '')
    .replace(/,\s/g, '')
    .trim()
    .replace(/\s/g, '_')
    .replace(/:/g, '')
    .toLowerCase();
}

export default function (text) {
  const csvMap = text.split('\n')
    .map((row) => row.split(/(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/));

  const headerMap = csvMap[0].reduce((accumulator, currentValue, index) => {
    if (currentValue !== '' && currentValue !== '\r' && !accumulator.currentValue) {
      accumulator[tratarChave(currentValue)] = index;
    }

    return accumulator;
  }, {});

  const dataCsv = [];
  for (let rowNumber = 1; rowNumber < csvMap.length; rowNumber += 1) {
    const dataRow = {};
    Object.keys(headerMap).forEach((field) => {
      dataRow[field] = csvMap[rowNumber][headerMap[field]];
    });
    dataCsv.push(dataRow);
  }

  return dataCsv;
}
