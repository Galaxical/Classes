class descriptiveStatistics{
    
    //mean data
    static mean(data) {
    const sum = data.reduce((acc, value) => acc + value, 0);
    return sum / data.length;
  }

    //Median
    static median (data){
        const sortedData = data.sort((a, b) => a -b);
        const middle = Math.floor(sortedData.length/2)

        if(sortedData.length % 2 === 0){
            return (sortedData[middle - 1] + sortedData[middle])/2;
        }

        else{
            return sortedData[middle]
        }
    }

    //Mode
    static mode(data){
        const highFrequency = {}
        data.foreach(value => {
            highFrequency[value] = (highFrequency[value] || 0) + 1;
        });

        let mode;
        let maxFrequency = 0;

        for(const key in highFrequency){
            if(highFrequency[key] > maxFrequency){
                mode = key;
                maxFrequency = highFrequency[key];
            }
        }

        return mode;
    }

}

const data = [12, 5, 17, 22, 13, 19, 10, 32, 27]
console.log(descriptiveStatistics.mean())
console.log(descriptiveStatistics.median())
console.log(descriptiveStatistics.mode())