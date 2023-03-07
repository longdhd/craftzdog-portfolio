import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
    return (
        <Layout title="UniVR">
            <Container>
                <Title>Univr.vn - Unicloud Group Hochiminh City<Badge ml={2}>2021</Badge></Title>
                <P>
                    A real estate VR-tour website with several projects all over Vietnam.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://univr.vn/">https://univr.vn/ <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Browser</Meta>
                        <span>Chrome - Safari - Microsoft Egde</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NextJS, ThreeJS, Antdesign, Unity WebGL</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/univr.jpg" alt="UniVR"/>
            </Container>
        </Layout>
    )
}

export default Work