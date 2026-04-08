chain = (input, fs) => fs.reduce((acc,x) => x(acc), input);
