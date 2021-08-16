function fakeNews(arg) {
    let fake = 0;
        for (let i = 0; i < arg.length; i++) {
            if (arg[i] === false) {
            fake ++;
            }  
        }
    return fake;
}
    
const news = [true, false, false, true, false, false, false, true, true, true]; 
console.log(fakeNews(news))