import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
    return (
        <Layout title="UniVR">
            <Container>
                <Title>UniVR - Sunshine Sky City<Badge ml={2}>2022</Badge></Title>
                <P>
                    A real estate VR-tour application on iOS platform.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Application</Meta>
                        <Link href="https://apps.apple.com/us/app/univr-sunshine-sky-city/id1623812218">https://apps.apple.com/us/app/univr-sunshine-sky-city/id1623812218 <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>Unity 2020.3.24f1</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/univrssc.png" alt="Sky City"/>
            </Container>
        </Layout>
    )
}

export default Work