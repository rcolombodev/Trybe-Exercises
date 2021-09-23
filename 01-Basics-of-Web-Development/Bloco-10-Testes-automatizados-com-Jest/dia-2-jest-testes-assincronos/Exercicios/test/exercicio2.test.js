const {findUserById, getUserName} = require('../src/exercicio2')

describe('when user exist', () =>{
  it('return username', () => {
    getUserName(1)
      .then((data) => expect(data).toEqual('Mark'))
  });
});

describe('when user not exists', () => {
  it('return error', () => {
    getUserName(3).catch((error) =>
    expect(error.message).toMatch('User with 3 not found.'));
  });
});


// describe('when user not exists', () => {
//   it('retorna um erro', () => {
//     expect(getUserName(3)).rejects.toThrow(Error)
//   })
// })
