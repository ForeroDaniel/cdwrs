var GeneticAlgorithm = function () {};

function sum( array ){
  return array.reduce(function(result, number ){ return result + number;}, 0);
}
GeneticAlgorithm.prototype.generatePopulation = function(population, length ){
  var array = [];
  for( var x = 0; x < population; x++ ){
    array.push( this.generate(length));
  }
  return array;
}
GeneticAlgorithm.prototype.generate = function(length) {
  var result = [];
  for( var i = 0; i < length; i++ ){
    result.push(Math.round(Math.random()));
  }
  return result.join('');
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  var max =  sum(fitnesses)
  var random = Math.random() * max;
  var total = 0;
  var index = 0;
  while( total < random ){
    total += fitnesses[index++];    
  }
  return population[index-1];
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  return chromosome.split('').map(function( bit ){
    return (Math.random() <= p) ? ((bit - 1) * - 1) : bit;
  }).join('');
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
 var index = Math.ceil(Math.random()*(chromosome1.length-2));
 return chromosome1.substr(0, index) +  chromosome2.substr(index);
};



GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  var population = this.generatePopulation( 10, length );

  while( population.map(fitness).indexOf(1) === -1 ){
    var nextPopulation = [];
    while( nextPopulation.length < population.length ){
      var chromosome1 = this.select(population, population.map(fitness));
      var chromosome2 = this.select(population, population.map(fitness));
      if( Math.random() < p_c ){
        var temp = this.crossover( chromosome1 ,  chromosome2 );
        chromosome1 = this.crossover( chromosome2 ,  chromosome1 );
        chromosome2 = temp;
      }
  
      chromosome1 = this.mutate(chromosome1, p_m);
      chromosome2 = this.mutate(chromosome2, p_m);
      
      nextPopulation.push( chromosome1 );
      nextPopulation.push( chromosome2 );
    }

    population = nextPopulation;
  }

  return population[population.map(fitness).indexOf(1)];



};
