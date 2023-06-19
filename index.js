// code your solution here

function saturdayFun(plan = 'roller-skate'){
    return (`This Saturday, I want to ${plan}!`)
}
console.log()

function mondayWork (activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`)
}
console.log()

function wrapAdjective(wrapper = '*'){
    function message(string = 'a hard worker'){
        return `You are ${wrapper}${string}${wrapper}!`
    } 
    return message;
}

wrapAdjective('||');
console.log();
