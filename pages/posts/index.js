import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'
import { PostGridItem } from '../../components/grid-item'

import mekongRiver from '../../public/images/contents/mekong-rivers.jpg'
import Link from 'next/link'
import clientPromise from '../../libs/mongodb'

const Posts = props => {
  console.log(props.res)
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
            {/* {props?.res?.map(blog => (
              <Link href={'/posts/' + blog._id} key={blog._id}>
                <a>
                  <p>{blog._id}</p>
                  <p>{blog.title}</p>
                </a>
              </Link>
            ))} */}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const client = await clientPromise
  const db = client.db('node-tuts')
  const allBlogs = await db.collection('blogs').find({}).toArray();
  return {
    props: { res: JSON.parse(JSON.stringify(allBlogs)) }
  }
}

export default Posts
