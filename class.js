class descriptiveStatistics{
    //mean data

    static mean(data){
        const sum = data.reduce((acc, value) => acc + value, 0)
        return sum/data.length;
    }
}

const data = [12, 5, 17, 22, 13, 19, 10, 32, 27]
console.log(descriptiveStatistics.mean())