const service = require("./service");
const {it, expect} = require('@jest/globals')

// jest.mock('./service')


describe('Testando a função randomNumber', () => {
  it('deve ser chamada, quantas vezes foi chamada e qual o retorno', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)
    
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('Testando a função randomNumber', () => {
  it("Testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
    
    expect(service.randomNumber(15, 3)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(15, 3);
  });
});

describe("Testando implementações", () => {
  it("mockando função para receber 3 parâmetros e retornar sua multiplicação", () => {
    service.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(service.randomNumber(1, 5, 10)).toBe(50);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(1, 5, 10);
  });

  it("mockando função que recebe um parâmetro e retorna seu dobro", () => {
    service.randomNumber = jest.fn().mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);

    service.randomNumber = jest.fn().mockImplementation(a => a * 2);

    expect(service.randomNumber(5)).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(5);
  });
});

describe('Testando funções - exercicio 4', () => {
  it('Testando implementação da função upperString', () => {
    const upperStringMocked = jest.spyOn(service, 'upperString') 
    
    upperStringMocked.mockImplementation(string => string.toLowerCase());

    expect(service.upperString('RAFAEL')).toBe('rafael')
    expect(service.upperString).toHaveBeenCalled();
    expect(service.upperString).toHaveBeenCalledTimes(1);

    upperStringMocked.mockRestore();

    expect(service.upperString('rafael')).toBe('RAFAEL')
  });

  it('Testando implementação da função firstLetter', () => {
    service.firstLetter = jest.fn().mockImplementation(string => string[string.length - 1]);

    expect(service.firstLetter('RAFAEL')).toBe('L')
    expect(service.firstLetter).toHaveBeenCalled();
    expect(service.firstLetter).toHaveBeenCalledTimes(1);

  });

  it('Testando implementação da função concatString', () => {
    service.concatString = jest.fn().mockImplementation((string1, string2, string3) => string1.concat(string2, string3));

    expect(service.concatString('RAFAEL', ' HENRIQUE', ' COLOMBO')).toBe('RAFAEL HENRIQUE COLOMBO')
    expect(service.concatString).toHaveBeenCalled();
    expect(service.concatString).toHaveBeenCalledTimes(1);

  });
});