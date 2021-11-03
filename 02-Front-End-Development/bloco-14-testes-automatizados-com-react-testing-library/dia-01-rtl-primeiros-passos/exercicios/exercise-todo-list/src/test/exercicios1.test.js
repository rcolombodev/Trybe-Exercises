import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';


describe('Testing the button', () => {
  it('should button is on the screen with the text "Adicionar"', () => {
    render(<App />);
    
    const addBtn = screen.getByText('Adicionar');
    expect(addBtn).toBeInTheDocument();
    expect(addBtn.type).toBe('button')
  });
  
  it('should be clicked and add the user text', () => {
    render(<App />);
    const USER_TEXT = 'Estudar';
    
    const addBtn = screen.queryByText('Adicionar');
    const inputTask = screen.getByLabelText('Tarefa:');
    userEvent.type(inputTask, USER_TEXT);
    expect(screen.queryByText(USER_TEXT)).not.toBeInTheDocument();
    userEvent.click(addBtn);
    expect(screen.queryByText(USER_TEXT)).toBeInTheDocument();
  });
});