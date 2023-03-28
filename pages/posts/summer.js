import { Container, Badge, Text, flexbox, Flex } from '@chakra-ui/react'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import { PostTitle, WorkImage } from '../../components/work'

const Summer = () => {
  return (
    <Layout title="Summer is coming 2023">
      <Container pb={8}>
        <PostTitle>
          Tản mạn những ngày nóng<Badge ml={2}>2023</Badge>
        </PostTitle>
        <WorkImage src="/images/contents/fightclub.jpg" alt="Fightclub" />
        <P>
          Có những ngày đi tour giữa cái nắng cháy da, cái nóng 34 độ, tôi mới
          thấy trân trọng cái máy lạnh …
        </P>
        <P>
          Càng lớn tôi càng ít chủ động tìm kiếm những niềm vui dễ dãi, thứ
          khiến tôi lười nhác và buồn chán sau đó. Tôi nhận ra sự không thoải
          mái, bước ra vùng an toàn mới mang lại sự bình yên đích thực trong tâm
          hồn mình. Chợt nhận ra thử thách không là bất hạnh, mà là nguồn sống,
          là thức ăn tinh thần. Qua những ngày phơi nắng, khi ngồi quán café góc
          phố, đãi mình một ly đen đá, dăm ba điếu thuốc, lặng nhìn từng nhánh
          cây rung rinh theo gió, tôi mới thấy bình yên chỉ đến sau cơn bão,
          hoặc ít ra là áp thấp nhiệt đới.
        </P>
        <Flex padding={4}>
          <P style={{ fontStyle: 'italic' }}>
            “We’re the middle children of history, man. No purpose or place. We
            have no Great War, no Great Depression. Our Great War’s a spiritual
            war. Our Great Depression is our lives.”
          </P>
        </Flex>
        <Flex justifyContent={'flex-end'} pr={4}>
          <P
            style={{ fontWeight: 'bold', fontSize: '14px'}}
          >
            Brad Pitt/Tyler Durden – Fight Club 1999
          </P>
        </Flex>
        <P>
          Thế hệ trước sinh ra trong cuộc chiến, sống qua giai đoạn bao cấp, vì
          thế họ mong muốn con mình có một cuộc sống thoải mái hơn, ít vất vả
          hơn. Đó là điều dễ hiểu và đồng cảm. Nhưng sự tiện nghi, thoải mái của
          cuộc sống hiện đại đang giết chết dần tính kỉ luật, lòng quyết tâm để
          vươn lên của thế hệ tôi và sau đó nữa. Mỗi sáng thức dậy, tôi không
          phải chạy hàng chục cây số đi săn như tổ tiên, không phải vừa vất vả
          mưu sinh vừa tránh bom đạn như thế hệ trước. Tôi may mắn sinh ra thời
          điểm gia đình kinh doanh thuận lợi, với đầy đủ tình yêu thương và điều
          kiện vất chất. Lạ thay, dù tìm được công việc yêu thích, tôi chưa bao
          giờ cảm thấy trọn vẹn. Có lẽ, tôi phải kỉ luật hơn, làm việc chăm chỉ
          hơn mới tìm được sự hạnh phúc đích thực … Cuộc chiến duy nhất tôi có
          là chiến đấu với chính mình.
        </P>
        <P>
          Và thế là tôi chạy. Bắt đầu là một cây số, rồi hai cây với những
          khoảng đi bộ. Rồi ba, bốn cây số. Rồi năm. Rồi đến một ngày, tôi chạy
          tám cây không ngừng nghỉ. Tôi chạy đi tìm tôi.
        </P>
        <P>
          Và rồi tôi nghỉ chơi với Mary Jane, tôi bất đầu có những giấc mơ trở
          lại khi ngủ, trí nhớ tốt hơn và bớt âu lo, hoang mang.
        </P>
        <P>
          Và rồi tôi theo carnivore diet. Tôi thấy cơ thể đầy năng lượng, đầu óc
          nhanh nhẹn, tự tin hơn và ngủ ít hơn. Mặc dù nhận nhiều phản hồi tiêu
          cực từ những người xung quanh, tôi chọn tin vào trải nghiệm bản thân
          và những điều tôi tìm hiểu. Khó nhất là khía cạnh đạo đức vì truyền
          thống gia đình Phật giáo cả hai bên nội ngoại. Bản thân, tôi có riêng
          cho mình một chú chó và yêu thích phim tài liệu về động vật và cuộc
          sống hoang dã, nhiều đến mức có một ngày tôi xem cảnh cá sấu săn ngựa
          vằn qua sông. Chứng kiến khuôn mặt của chú ngựa không còn nguyên vẹn
          sau vài vòng xoay của hậu duệ khủng long, tôi tin rằng chúng ta đã đối
          xử rất nhân đạo trong quá trình xử lý với từng miếng thịt ta ăn, tình
          người hơn rất nhiều cuộc sống hoang dã ngoài kia. Ngoài đó, sư tử
          không đợi con nai chết hẳn mới cho vào mồm ...
        </P>
        <P>
          Và rồi tôi nhận ra có lẽ mình không quá tham vọng, không có hoài bão
          siêu to khổng lồ. Tôi muốn sống một cuộc sống bình thường, nhưng chắc
          chắn là không tầm thường.
        </P>
        <Text fontWeight={'bold'} mt={6} align="right">
          28<sup>th</sup> March 2023
        </Text>
      </Container>
    </Layout>
  )
}

export default Summer
