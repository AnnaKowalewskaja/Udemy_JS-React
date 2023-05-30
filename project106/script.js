'use strict';
try{
    console.log('Normal');
    console.log(a);
    // console.log('result');
}catch(error){
    console.log(error.name);
    console.log(error.message);
}finally{
    console.log('after error');
}