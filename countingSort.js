
a = {
    '0':0,
    '1':2,
    '2':1,
    '3':56,
    '4':3,
    '5':67,
    '6':3,
    'length':7
};
hash = {};
index = 0;
while(index < a['length']){
    if(hash[index] = undefined){
        hash[index] = 1;
    }else{
        hash[index] = hash[index] + 1;
    }
}
index2 = 0;
maxA = MAX(a);
resultArr = {};
while(index2 < maxA + 1){
    counter = hash[index2];
    if(counter != undefined){
        counterIndex = 0;
        while(counterIndex < counter){
            resultArr.push(index2);
            counterIndex = counterIndex + 1;
        }
    }
    index2 = index2 + 1;
}
print_r(resultArr)
