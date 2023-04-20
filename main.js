// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (number, dna) => {
  // Create object property
  return {
    number,
    dna,

    // Search for a random base and replace by one of the other 3 bases
    mutate() {
      let dnaBases = ["A", "T", "C", "G"];

      let randomIndexNumber = Math.floor(Math.random() * 15);
      
      let randomDNABase = this.dna[randomIndexNumber];
      let randomNewDNABase = dnaBases.filter((base) => base !== randomDNABase)[
        Math.floor(Math.random() * 3)
      ];
      this.dna.splice(randomIndexNumber, 1, randomNewDNABase);
      
      return dna;
    },
  };
};


let candida = pAequorFactory(1, mockUpStrand());

console.log(candida.dna)
console.log(candida.mutate())