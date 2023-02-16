import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { PostGridItem } from '../components/grid-item'

import mekongRiver from '../public/images/contents/mekong-rivers.jpg'
import { useEffect } from 'react'

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
            {props?.allBlogs?.data.map(blog => (
              <div key={blog._id}>
                <p>{blog._id}</p>
                <p>{blog.title}</p>
              </div>
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getServerSideProps(context) {
  let res = await fetch('http://localhost:3000/api/blogs', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'User-Agent': '*',
    },
  })
  let allBlogs = await res.json()

  return {
    props: { allBlogs }
  }
}

export default Posts
