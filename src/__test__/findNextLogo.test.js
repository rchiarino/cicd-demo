import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
describe('Home', () => {
  it('renders the NextJS logo', () => {
    render(<Home />)
 
    const logo = screen.getByAltText('Next.js Logo')
 
    expect(logo).toBeInTheDocument()
  })
})