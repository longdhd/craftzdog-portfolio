import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { WorkGridItem } from '../components/grid-item'
import thumbUnivr from '../public/images/works/univr.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid colums={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem id="univr" title="UniVR" thumbnail={thumbUnivr}>
            A real estate VR-tour website with more than 100 projects all over Vietnam.
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
