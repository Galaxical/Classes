class count{
    static counter = 0; //create static property for count

    //add a constructor that counts 
    constructor(){
        count.counter ++ //increment counter on instances
    }

    static greet(){
        console.log("Hello, good evening!") 
    }
}


console.log(count.counter) //output the counting
count.greet();//output the greet instance
