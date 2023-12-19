function evil(n) {
    return n.toString(2).match(/1/g).length % 2 === 0? "It's Evil!": "It's Odious!";
}
