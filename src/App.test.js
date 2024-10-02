import {render, screen} from '@testing-library/react'
import App from './App'

describe("Testing App component", () => {
  beforeAll(() => {
    render(<App />);
  })
  describe("Testing presence of components", () => {
    test("check if input is present", () => {
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    })
  })
})