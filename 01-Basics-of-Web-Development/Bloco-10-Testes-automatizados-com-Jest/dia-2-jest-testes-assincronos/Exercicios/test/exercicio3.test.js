// puxa função do exercicio 2.

const {findUserById, getUserName} = require('../src/exercicio2')

describe('when user exist', () =>{
  it('return username', async () => {
    const data = await getUserName(1)
    expect(data).toEqual('Mark')
  });
});

describe('when user not exists', () => {
  it('return error', async () => {
    try {
      await getUserName(3)
    } catch (error) {
      expect(error.message).toMatch('User with 3 not found.');
    }
  });
});