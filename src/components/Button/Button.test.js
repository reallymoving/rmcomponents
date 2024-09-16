import Button from "./index"
import { Primary } from "./Button.stories"
import { render, screen } from "@testing-library/react"

test('should render', () => {
    render(<Button label='click me' />)
    expect.stringContaining('click')
    expect(screen.getByRole('button')).toHaveTextContent('click')
})

test('should render primary', () => {
    render(<Primary {...Primary.args} />)
    expect(screen.getByRole('button')).toHaveTextContent('See quotes')
})