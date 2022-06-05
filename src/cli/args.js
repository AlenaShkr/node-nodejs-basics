export const parseArgs = () => {
    let string ='';
    process.argv.filter((el, index) => index >= 2).forEach((el, index) => { 
       if (index % 2 == 0) {
           string += el.slice(2) + ' is ';
       } else string += `${el} `;
    });
    console.log(string);
};
parseArgs();