import Pagination from './Pagination'

export default {
    title: "Components/Pagination",
    component: Pagination
}

const Template = args => (
    <Pagination {...args}>
        {[...Array(5).keys()].map(item => <Pagination.Page>{item + 1}</Pagination.Page>)}
        <Pagination.Page>Next</Pagination.Page>
        <Pagination.Page>Last</Pagination.Page>
    </Pagination>
)


export const PaginationExample = Template.bind({})
PaginationExample.args = {
    
}