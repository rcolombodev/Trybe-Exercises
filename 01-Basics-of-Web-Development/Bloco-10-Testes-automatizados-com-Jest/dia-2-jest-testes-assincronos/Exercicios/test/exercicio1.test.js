
const uppercase = require('../src/exercicio1')

test('convert a string to uppercase', (done) => {
  uppercase('rafa', (data) =>{
    expect(data).toEqual('RAFA')
    done();
  })
})