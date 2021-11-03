import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
describe('Exercicio 1', () => {
  it('Verifica se possui loading', () => {
    render(<App />);
    const loadingEl = screen.getByText(/carregando.../i);
    expect(loadingEl).toBeInTheDocument();
  });
})
describe('Ex. 2', () => {
  it('Verifica se depois do loading, há Minecraft', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.getByText(/carregando.../i));
    const mineEl = screen.getByText('Minecraft');
    expect(mineEl).toBeInTheDocument();
  });
})
describe('Ex. 3', () => {
  it('Verifica se depois e carregado, ao clicar no segundo jogo, exibe release year e sales do jogo correspondente', async () => {
    render(<App />);
    await waitForElementToBeRemoved(screen.getByText(/carregando.../i));
    const detailsBtns = screen.getAllByText(/ver detalhes/i);
    userEvent.click(detailsBtns[1]);
    await waitForElementToBeRemoved(screen.getByText(/carregando.../i));
    const sales = screen.getByText(/sales/i);
    const releaseYears = screen.getByText(/release year/i);
    expect(sales).toBeInTheDocument();
    expect(releaseYears).toBeInTheDocument();
  })
})
describe('bonus', () => {
  test('Exercicio Bonus' , async () => {
    render(<App />);

    await waitForElementToBeRemoved(screen.getByText(/carregando/i));
    const backButton = screen.getByText(/voltar/i);
    userEvent.click(backButton);
    await waitForElementToBeRemoved(screen.getByText(/carregando/i));
    const movieElement = screen.getByRole("heading", {name: /Os melhores jogos/i});
    expect(movieElement).toBeInTheDocument();
  })
})
