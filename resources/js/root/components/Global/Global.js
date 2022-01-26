export const sum = (input) => {
    if (toString.call(input) !== "[object Array]")
       return false;
         
    let total =  0;
    for(let i=0;i<input.length;i++){                  
            if(isNaN(input[i])){
                    continue;
            }
            total += Number(input[i]) ;
     }
    return total;
}
