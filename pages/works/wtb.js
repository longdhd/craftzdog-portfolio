import { Container, Badge, List, Link, ListItem } from '@chakra-ui/react'
import {ExternalLinkIcon} from '@chakra-ui/icons'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { Meta, Title, WorkImage } from '../../components/work'

const Work = () => {
    return (
        <Layout title="UniVR">
            <Container>
                <Title>Water Buffalo Private Tours<Badge ml={2}>2015 - 2019</Badge></Title>
                <P>
                Based in Saigon, Water Buffalo Tours is the expert on Mekong Delta tours (one to four days), authentic Saigon day trip, day trip to Long Tan & Nui Dat, day trip to Can Gio Ecological & Biosphere Conservation, and half-day trip to Cu Chi Tunnels.
                </P>
                <List ml={4} my={4}>
                </List>
                <WorkImage src="/images/works/wtb.jpg" alt="Water Buffalo"/>
                <p style={{textAlign:"center", marginBottom: 16}}>A typical "bedroom-tonic" rice liquor in Mekong Delta.</p>
                <WorkImage src="/images/works/wtb1.jpg" alt="Water Buffalo"/>
                <p style={{textAlign:"center", marginBottom: 16}}>An early morning cruise on Lower Mekong River.</p>
                <WorkImage src="/images/works/wtb2.jpg" alt="Water Buffalo"/>
                <p style={{textAlign:"center", marginBottom: 16}}>Saigon beer and seafood lunch <br/> right next to breezy Tan Thanh beach.</p>
                <WorkImage src="/images/works/wtb3.jpg" alt="Water Buffalo"/>
                <p style={{textAlign:"center", marginBottom: 16}}>Scenic boat cruise on Tuyen Lam lake.</p>
            </Container>
        </Layout>
    )
}

export default Work