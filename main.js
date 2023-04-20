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
    // Take species to compare and print percentage of common DNA
    compareDNA(species) {
      let counter = 0;
      species.dna.forEach((base, index) => {
        if (base === this.dna[index]) {
          counter++;
        }
      });
      let elementCommon = (counter / this.dna.length) * 100;
      return `specimen #${this.number} and specimen #${
        species.number
      } have ${elementCommon.toFixed(2)}% DNA in common`;
    },
  };
};

let candida = pAequorFactory(1, mockUpStrand());
let bums = pAequorFactory(2, mockUpStrand());

console.log(candida.dna);
console.log(candida.mutate());
console.log(bums.dna);
console.log(candida.compareDNA(bums));
