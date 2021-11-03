import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import mocks from './mocks'


describe('Test Rick & Morty API', () => {

  beforeEach( () => {
    global.fetch = jest.fn(async() => ({
      json: async () => mocks,
    }));
    
    render(<App/>)
  });
  
  test('Verifica se aparece o card com titulo de "Rick Sanchez"', async () => {
    const cardTitle = await screen.findByRole("heading", {
      level: 3,
      name: "Rick Sanchez",
    });
    expect(cardTitle).toBeInTheDocument();
  });

  test('Verifica se existem o input de texto e o botão "Buscar"', () => {
    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeInTheDocument();

    const searchBtn = screen.getByRole("button", {name: "Buscar"})
    expect(searchBtn).toBeInTheDocument();
  });

  test('Verifica se ao buscar por "Smith" aparecem 4 cards', () => {
    const textInput = screen.getByRole("textbox");
    userEvent.type(textInput, "Smith");

    const searchBtn = screen.getByRole("button", {name: "Buscar"});
    userEvent.click(searchBtn);

    expect(screen.getAllByRole("article")).toHaveLength(4);
  });
});
