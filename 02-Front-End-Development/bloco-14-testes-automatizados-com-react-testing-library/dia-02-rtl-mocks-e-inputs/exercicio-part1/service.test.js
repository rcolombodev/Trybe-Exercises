const service = require("./service");
const {it, expect } = require('@jest/globals')

describe('testando a função randomNumber', () => {
  it('deve ser chamada, quantas vezes foi chamada e qual o retorno', () => {
    service.randomNumber = jest.fn().mockReturnValue(10)
    
    expect(service.randomNumber()).toBe(10);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe('testando a função randomNumber', () => {
  it("testando se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros", () => {
    service.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b)
    
    expect(service.randomNumber(15, 3)).toBe(5);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenCalledWith(15, 3);
  });
});

describe("testando implementações", () => {
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