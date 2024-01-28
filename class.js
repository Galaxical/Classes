class DescriptiveStatistics {
  // Measures of Central Tendency

  // Mean
  static mean(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  }

  // Median
  static median(data) {
    const sortedData = data.sort((a, b) => a - b);
    const middle = Math.floor(sortedData.length / 2);
    if (sortedData.length % 2 === 0) {
      return (sortedData[middle - 1] + sortedData[middle]) / 2;
    } else {
      return sortedData[middle];
    }
  }

  // Mode
  static mode(data) {
    const frequencyMap = {};
    data.forEach((value) => {
      frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    let mode;
    let maxFrequency = 0;

    for (const key in frequencyMap) {
      if (frequencyMap[key] > maxFrequency) {
        mode = key;
        maxFrequency = frequencyMap[key];
      }
    }

    return mode;
  }

  // Measures of Dispersion

  // Range
  static range(data) {
    const sortedData = data.sort((a, b) => a - b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }

  static range(data){
    const sortedData = data.sort((a, b) => a -b);
    return sortedData[sortedData.length - 1] - sortedData[0];
  }
}

// Example usage
const data = [4, 7, 1, 9, 6, 7, 2, 8, 3, 5];

console.log("Mean:", DescriptiveStatistics.mean(data));
console.log("Median:", DescriptiveStatistics.median(data));
console.log("Mode:", DescriptiveStatistics.mode(data));

console.log("Range:", DescriptiveStatistics.range(data));
console.log("Variance:", DescriptiveStatistics.variance(data));
console.log(
  "Standard Deviation:",
  DescriptiveStatistics.standardDeviation(data)
);
console.log(
  "Interquartile Range:",
  DescriptiveStatistics.interquartileRange(data)
);
console.log(
  "Mean Absolute Deviation:",
  DescriptiveStatistics.meanAbsoluteDeviation(data)
);
