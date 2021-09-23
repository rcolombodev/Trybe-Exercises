const myRemove = require('../src/myRemove')

describe('myRemove', () => {
  it('Check if myRemove() returns the expected array', () => {
    expect([1, 2 , 4]).toEqual(myRemove([1, 2, 3, 4], 3))
  });

  it('Check if myRemove() not returns the expected array', () => {
    expect([1, 2, 3, 4]).not.toEqual(myRemove([1, 2, 3, 4], 3))
  });

  it('Check that the array passed by parameter has not changed', () => {
    const newArray = [5, 6, 7 ,8]
    myRemove(newArray, 5)
    expect([5, 6, 7 ,8]).toEqual(myRemove(newArray))
  });

  it('Check if myRemove() returns the expected array', () => {
    expect([1, 2, 3, 4]).toEqual(myRemove([1, 2, 3, 4], 5))
  });
})