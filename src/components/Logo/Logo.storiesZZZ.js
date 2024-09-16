import Logo from './Logo'

export default {
    title: "Components/Logo",
    component: Logo
}

const Template = args => <Logo {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
    type: 'horizontal',
}
export const Stacked = Template.bind({})
Stacked.args = {
    type: 'stacked',
}
export const Twenty = Template.bind({})
Twenty.args = {
    type: 'twenty',
}
export const Footer = Template.bind({})
Footer.args = {
    type: 'footer',
}