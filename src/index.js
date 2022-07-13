module.exports = function check(str, bracketsConfig) {
    
    const stack = [];
    const configObject = {};

    bracketsConfig.forEach((item) => (configObject[item[0]] = item[1]));
    
    for (let i = 0; i < str.length; i++) {
        if (configObject[stack[stack.length - 1]] === str[i]) {
            stack.pop();
        } else if (configObject.hasOwnProperty(str[i])) {
            stack.push(str[i]);
        } else {
            return false;
        }
    }

    return stack.length === 0;
   
}

