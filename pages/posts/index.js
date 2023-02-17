import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { PostGridItem } from '../../components/grid-item'

import mekongRiver from '../../public/images/contents/mekong-rivers.jpg'
import { getBlogs } from '../api/blogs'
import Link from 'next/link'

const Posts = props => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h4" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 3]} gap={6}>
            <PostGridItem
              title="Tản mạn sông Tiền [Vietnamese]"
              id="mekong"
              thumbnail={mekongRiver}
            ></PostGridItem>
            {/* {props?.res?.data
              ? props?.res?.data.map(blog => (
                  <Link href={'/posts/' + blog._id} key={blog._id}>
                    <a>
                      <p>{blog._id}</p>
                      <p>{blog.title}</p>
                    </a>
                  </Link>
                ))
              : []} */}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  let res = await getBlogs()
  return {
    props: { res }
  }
}

export default Posts
