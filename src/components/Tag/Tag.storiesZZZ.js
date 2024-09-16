import Tag from './Tag'

export default {
    title: "Components/Tag",
    component: Tag
}

const Template = args => <Tag {...args} />

export const TagExample = Template.bind({})
TagExample.args = {
    tag: 'Buying a house, Finding a house, Moving home, General Moving Advice'
}