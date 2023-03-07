import {
  Container,
  Box,
  Heading,
  Image,
  Link,
  Button,
  List,
  ListItem,
  Icon,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { BioSection, BioYear } from '../components/bio'
import { GridItem} from '../components/grid-item'
import {
  IoLogoFacebook,
  IoLogoGithub,
  IoLogoInstagram
} from 'react-icons/io5'
const Page = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;m a front-end developer based in Saigon!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Long Dang
            </Heading>
            <p>Developer - Explorer - Dreamer</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="180px"
              borderRadius="full"
              display="inline-block"
              src="/images/portrait.jpg"
              alt="Profile image"
            />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            About
          </Heading>
          <Paragraph>
            Long is a ReactJS and Unity developer based in Hochiminh City with a
            passion for building digital services/products. He's currently
            working on{' '}
            <NextLink href="/works">
              <Link>3D & Virtual Reality</Link>
            </NextLink>{' '}
            projects. While not working, he's often caught running/jogging with his dog.
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1994</BioYear>
            Born in Saigon, Vietnam.
          </BioSection>
          <BioSection>
            <BioYear>2015</BioYear>
            Worked as English-speaking Tour guide.
          </BioSection>
          <BioSection>
            <BioYear>2021</BioYear>
            Working as Front-end & Unity developer.
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ❤
          </Heading>
          <Paragraph>Music, Meditation, Football, Running/Jogging</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/longdhd" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub} />}>longdhd</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
