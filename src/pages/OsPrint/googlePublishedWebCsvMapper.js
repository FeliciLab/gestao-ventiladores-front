export default function (text) {
  const csvMap = text.split("\n")
    .map(row => row.split(/(?:,|\n|^)("(?:(?:"")*[^"]*)*"|[^",\n]*|(?:\n|$))/));


  const headerMap = csvMap[0].reduce((accumulator, currentValue, index) => {
    if (currentValue !== "" && currentValue !== "\r" && !accumulator.hasOwnProperty(currentValue)) {
      accumulator[currentValue.replace(/"/g, '').replace(/,\s/g, '').trim().replace(/\s/g, '_').replace(/:/g, '').toLowerCase()] = index
    }

    return accumulator
  }, {});

  const dataCsv = [];
  for (let rowNumber = 1; rowNumber < csvMap.length; rowNumber++) {
    const dataRow = {};
    for (let field in headerMap) {
      dataRow[field] = csvMap[rowNumber][headerMap[field]];
    }
    dataCsv.push(dataRow);
  }

  return dataCsv
}