import { render, screen } from '@testing-library/react';
import App from './App';
import Recipe from './Recipe';

test('render submit button on screen', () => {
  render(<App />);
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});

test("render search box", () =>{
  render(<App />);
  const inputElement = screen.getByPlaceholderText("Enter recipe name")
  expect(inputElement).toBeInTheDocument();
})

test("render recipe child component", async() =>{
  render(<App/>)
  const recipeComp = await screen.findByText("Basic Homemade Harissa Recipe")
  expect(recipeComp).toBeInTheDocument();
})
