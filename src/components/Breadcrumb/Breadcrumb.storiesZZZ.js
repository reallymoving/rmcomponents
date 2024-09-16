import Breadcrumb from './Breadcrumb'

export default {
    title: "Components/Breadcrumb",
    component: Breadcrumb
}

const Template = args => (
    <Breadcrumb {...args}>
        <Breadcrumb.Crumb>Home</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Conveyancing</Breadcrumb.Crumb>
        <Breadcrumb.Crumb>Partners</Breadcrumb.Crumb>
    </Breadcrumb>
)
    

export const Location = Template.bind({})
Location.args = {

}