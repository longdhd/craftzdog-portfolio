import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbVtl from '../public/images/works/vtl-solution.jpeg'
import thumbUnivr from '../public/images/works/univr.jpg'
import thumbUnivrSSC from '../public/images/works/univrssc.png'
import thumbWtb from '../public/images/works/wtb1.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid colums={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="vtl-solution"
              title="Taste Gourmet Group Loyalty Program"
              thumbnail={thumbVtl}
            >
              A landing page for Hongkong restaurants' loyalty program with modern and interactive animations.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="univr"
              title="Univr.vn - Unicloud Group Hochiminh City"
              thumbnail={thumbUnivr}
            >
              A real estate VR-tour website with several projects all over
              Vietnam.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="univrssc"
              title="UniVR - Sunshine Sky City"
              thumbnail={thumbUnivrSSC}
            >
              A real estate VR-tour application on iOS platform.
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="wtb"
              title="Water Buffalo Private Tours"
              thumbnail={thumbWtb}
            >
              Based in Saigon, Water Buffalo Tours is the expert on Mekong Delta tours, authentic Saigon day trip, day trip to Long Tan & Nui Dat, day trip to Can Gio Ecological & Biosphere Conservation, and half-day trip to Cu Chi Tunnels.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
