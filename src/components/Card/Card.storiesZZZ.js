import Card from './Card'
import cardimg from '../../Images/article.png'
import List from '../List'
import Rmicon from '../Rmicon'
import Tag from '../Tag'

export default {
    title: "Blocks/Card",
    component: Card
}

const Template = args => <Card {...args}>
    <Card.Title>
        {/* <Rmicon icon='house' md /> */}
        Conveyancing advice
    </Card.Title>
    {/* <Card.Img src={cardimg} /> */}
    <Card.Body>
        {/* <h3>Does my conveyancing solicitor need to be local?</h3> */}
        <p>The Bank of England recently removed a required test for those looking to get a mortgage. So what does this mean for the future of the process?</p>
    </Card.Body>
    <Card.Footer>
        <a href='#'>Read more</a>
    </Card.Footer>
</Card>

export const Basic = Template.bind({});
Basic.parameters = {
    docs: {
        // source: {
        //     code: '<Card><Card.title></Card.title></Card>',
        //     language: "jsx",
        //     type: "auto",
        //     format: true
        // },
    },
};

export const Article = Template.bind({})
Article.args = {}