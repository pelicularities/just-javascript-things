// when the function keyword is useful,
// and the arrow function is to be avoided

const husky = {
  breed: 'husky',
  noise: 'awooooooo',
  makeNoise: function() {
    console.log(`a ${this.breed} goes ${this.noise}`);
  }
};

const retriever = {
  breed: 'golden retriever',
  noise: 'ruff ruff',
  makeNoise: () => {
    console.log(`a ${this.breed} goes ${this.noise}`);
  }
};

husky.makeNoise();
retriever.makeNoise();

// when the arrow function is preferred,
// and the function keyword is to be avoided

const dogBehaviour = {
  makeNoise: function() {
    console.log("Don't forget to step into the next function!");
    // uncomment the following blocks out
    // one at a time, to see the effect

    // ----- BLOCK ONE -----
    function contrivedExampleForDemoPurposes() {
      console.log(`a ${this.breed} goes ${this.noise}`);
    }
    // ----- END BLOCK ONE -----

    // ----- BLOCK TWO -----
    // const that = this;
    // function contrivedExampleForDemoPurposes() {
    //   console.log(`a ${that.breed} goes ${that.noise}`);
    // }
    // ----- END BLOCK TWO -----

    // ----- BLOCK THREE -----
    // const contrivedExampleForDemoPurposes = () => {
    //   console.log(`a ${this.breed} goes ${this.noise}`);
    // }
    // ----- END BLOCK THREE -----
    
    contrivedExampleForDemoPurposes();
  }
};

function dogFactory(breed, noise) {
  const newDog = Object.create(dogBehaviour);
  newDog.breed = breed;
  newDog.noise = noise;
  return newDog;
}

const chihuahua = dogFactory('chihuahua', 'yipyipyip');
chihuahua.makeNoise();
