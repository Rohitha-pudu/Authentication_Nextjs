// const promise=new Promise(function(resolve,reject){
//     //async operation
//     const error=true;
//     if(!error){
//         setTimeout(function(){
//             resolve({username:'pudu',age:16});
//        },1000);
//     }
//     else{
//         reject('error:error occured')
//     }

// })

// async function sample(){
//     try{
//     const response=await promise;
//     console.log(response)
//     }
//     catch(e){
//         console.log(e)
//     }
// }

// sample();

// function set(name){
//     this.name=name;
//     console.log("called")
// }
// function add(email,password){
    
//     this.email=email;
//     this.password=password;
// }
// console.log(new add('pudu','p@gmail.com',56712));

// class set1{
//      constructor(email,password){
//     this.email=email;
//     this.password=password;
// }
// }
// console.log(new set1('p@gmail.com',56712));



function outerFunction() {
    const outerVariable = 'I am from outerFunction';
  
    function innerFunction() {
      console.log(outerVariable); // Access outerVariable from the lexical scope
    }
  
    return innerFunction; // Return innerFunction without invoking it
  }
  
  const closureFunc = outerFunction();
   closureFunc(); // Output: I am from outerFunction
  