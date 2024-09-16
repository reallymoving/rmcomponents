import Stack from './Stack'

export default {
    title: "Components/Stack",
    component: Stack,
    argTypes: {
        numberOfChildren: { type: 'number', defaultValue: 4 }
    }
}

const Template = ({numberOfChildren, ...args}) => (
    <Stack {...args}>
        {[...Array(numberOfChildren).keys()].map(n => (
            <div style={{backgroundColor: 'red', width: '200px', height: '200px', margin: '10px'}}>{n}</div>
        ))}
    </Stack>
)

export const StackOne = Template.bind({})
StackOne.args = {
    display: 'flex'
}
