function stockList(listOfArt, listOfCat){
  if (listOfArt.length === 0 || listOfCat.length === 0) {
        return "";
    }
    
    let categorySums = {};
    
    // Initialize category sums with 0 for each category in listOfCat
    listOfCat.forEach(category => {
        categorySums[category] = 0;
    });
    
    // Process each item in the listOfArt
    listOfArt.forEach(item => {
        let [code, quantity] = item.split(' ');
        let category = code[0]; // First character of code is the category
        
        if (category in categorySums) {
            categorySums[category] += parseInt(quantity);
        }
    });
    
    // Construct the result string based on the order of listOfCat
    let result = listOfCat.map(category => `(${category} : ${categorySums[category] || 0})`).join(' - ');
    
    return result;
}
