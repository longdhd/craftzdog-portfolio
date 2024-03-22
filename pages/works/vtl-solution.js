import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
    return (
        <Layout title="UniVR">
            <Container>
                <Title>Taste Gourmet Group Loyalty Program<Badge ml={2}>2023</Badge></Title>
                <P>
                    A landing page for Hongkong restaurants' loyalty program with modern and interactive animations.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.vtl-vtl.com/showcase/taste-gourmet-group-loyalty-program-case-study">https://www.vtl-vtl.com/showcase/taste-gourmet-group-loyalty-program-case-study<ExternalLinkIcon mx="2px" /></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Browser</Meta>
                        <span>Chrome - Safari</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>HTML, CSS, Javascript, GSAP</span>
                    </ListItem>
                </List>
                <WorkImage src="/images/works/vtl-solution.jpeg" alt="VTL Solution Ltd." />
            </Container>
        </Layout>
    )
}

export default Work