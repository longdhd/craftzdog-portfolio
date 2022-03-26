import Head from 'next/head'
import Navbar from '../navbar'
import NoSSR from '../no-ssr'
import { Box, Container } from '@chakra-ui/react'
import VoxelDog from '../voxel-dog'
import Footer from '../footer'

const Main = ({children, router}) => {
    return(
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Long's homepage" />
                <link rel="apple-touch-icon" href="apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                <meta property="og:image" content="https://longdang.vercel.app/card.png"/>
                <meta property="og:image" content="https://cdn.dribbble.com/users/316787/screenshots/14452801/media/823f9d8cf10efeaad82760d2b757c9f4.png?compress=1&resize=400x300"/>
                <title>Long Dang - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            
            <Container maxW="container.md" pt={14}>
                <NoSSR>
                    <VoxelDog />
                </NoSSR>
                {children}

                <Footer />
            </Container>
        </Box>
    )
}
export default Main