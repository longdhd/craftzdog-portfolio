import { Container, Badge, Text } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { PostTitle, WorkImage } from '../../components/work'

const Mekong = () => {
    return (
        <Layout title="Mekong 2015">
            <Container>
                <PostTitle>Mekong river<Badge ml={2}>2015</Badge></PostTitle>
                <WorkImage src="/images/contents/mekong-rivers.jpg" alt="Mekong"/>
                <P>
                    Con thuyền dần trôi về làng bè Thới Sơn. Những căn nhà nổi trên sống nuôi cá và nuôi cả những con người sinh sống trên đó. Dăm chú chó tò mò chạy ra xem vì tiếng máy thuyền.
                </P>
                <P>
                    Đó là một chiều sông Tiền đẹp và yên bình đến lạ. Mặt Trời ngả bóng, dệt nên những dải bạc trên mặt nước. Gió như cho đi tát cả những nó có, hào sảng và phóng khoáng như con người và thiên nhiên nơi đây. Tôi trở người nhìn hai vị khách của mình, Till và Stephanie. Họ có vẻ như không đáp lại ánh mắt ấy, vẫn đang bận rộn với sự tự do giữa biển nước. Suy nghĩ của tôi bây giờ là không cắt mạch suy nghĩ của họ. Một bức ảnh đẹp đôi khi không cần tên tựa hay lời chú thích.
                </P>
                <P>
                    Chiều hôm đó, lần đầu tôi mới thực sự hiểu và yêu miền Tây đến vậy. Yêu cả con người và thiên nhiên nơi đây.
                </P>
                <Text fontWeight={'bold'} mt={6} align="right">3<sup>rd</sup> March 2015</Text>
            </Container>
        </Layout>
    )
}

export default Mekong