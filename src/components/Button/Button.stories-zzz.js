import Button from './Button'

export default {
    title: "Components/Button",
    component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    label: 'See quotes',
    type: 'primary',
    //link: 'https://google.com',
    onClick: () => alert('hey, don\'t click')
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'Get quotes',
    type: 'secondary'
}
export const trans = Template.bind({})
trans.args = {
    label: 'Retrieve quotes',
    type: 'trans'
}
export const account = Template.bind({})
account.args = {
    label: 'Log in',
    type: 'account',
    sm: 'sm'
}
export const Large = Template.bind({})
Large.args = {
    label: 'Get conveyancing quotes',
    type: 'primary',
    lg: 'lg'
}
export const Small = Template.bind({})
Small.args = {
    label: 'Get conveyancing quotes',
    type: 'primary',
    sm: 'sm'
}
export const XSmall = Template.bind({})
XSmall.args = {
    label: 'Get conveyancing quotes',
    type: 'primary',
    xs: 'xs'
}