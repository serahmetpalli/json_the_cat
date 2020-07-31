const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

//can we use variables that are used in the original function file?

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('siberian', (err, desc) => {
      // we expect no error for this scenario

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });

  it('returns an error message when an invalid breed name is entered or no breed name is entered', (done) => {
    fetchBreedDescription('', (err, desc) => {
      // we expect no error for this scenario

      const expectedErr = "Requested breed not found!";

      // compare returned description
      assert.equal(expectedErr, err);

      done();

    });
  });

  // it('returns an error message when an invalid breed name is entered or no breed name is entered', (done) => {
  //   fetchBreedDescription('abc', (err, desc) => {
  //     // we expect no error for this scenario

  //     const expectedErr = "Requested breed not found!"

  //     // compare returned description
  //     assert.equal(expectedErr, err);

  //     done();

  //   });
  // });

});
