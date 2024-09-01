function calculate(arr) {
    if(arr.length === 3) {
        
        for(var i = 0; i < arr.length; i++) {
            if(arr[i] instanceof(Array)) {
                arr[i] = calculate(arr[i]);
            }
        }

        if(typeof(arr[0]) === 'number' && typeof(arr[1]) === 'number' && typeof(arr[2]) === 'number') {
            switch(arr[2]) {
                case 1: return arr[0] + arr[1];
                case 2: return arr[0] - arr[1];
                case 3: return arr[0] * arr[1];
                case 4: return arr[0] / arr[1];
            }
        }
    }
    return -1;
}

console.log(calculate([[3,4,[3,2,2]],3,[5,2,2]]))