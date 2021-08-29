import React, { Component } from 'react'
import './introduce.css'
import { Container, Row, Col } from 'reactstrap';
import PhoneIcon  from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import GitHubIcon from '@material-ui/icons/GitHub';





export default class Introduce extends Component {
    render() {
        
        return (
            <div className="introduce mb-5">
                 <Container>
                    <Row className="mt-5">
                        <Col sm="12" md="12">
                            <h2>Giới thiệu</h2>
                            <span>Chào mừng bạn đến với NoteBook!</span>
                            <div className="introduceContent">
                                <div className="introducePart mt-3">
                                    <h5>I, Về NoteBook</h5>
                                    <span>
                                        NoteBook như một cuốn tạp chí trực tuyến cho các cá nhân. Giúp người dùng viết ra những suy nghĩ và câu chuyện trên trang web của riêng họ. Những nội dung này thường ở dạng văn bản, nhưng cũng có thể bao gồm cả hình ảnh, video hoặc âm thanh. Người dùng có thể tạo hồ sơ với hình ảnh, danh sách các sở thích cá nhân, thông tin liên lạc và các thông tin cá nhân khác. Người dùng có thể giao tiếp với bạn bè và những người dùng khác thông qua tin nhắn cá nhân hoặc công cộng và tính năng chat. News Feed xuất hiện trên trang chủ của mỗi người dùng và nêu bật thông tin bao gồm thay đổi hồ sơ cá nhân, các sự kiện sắp tới, và ngày sinh nhật của bạn bè của người dùng.<br/>
                                        Một trong những ứng dụng phổ biến nhất trên NoteBook là ứng dụng hình ảnh, người dùng có thể tải lên album và hình ảnh. NoteBook cho phép người dùng tải lên một số lượng ảnh không giới hạn, so với dịch vụ lưu trữ hình ảnh khác như Photobucket và Flickr là áp dụng giới hạn về số lượng hình ảnh mà người dùng được phép tải lên.<br/>
                                        Với sự sẵn có của nó trên nền tảng website, NoteBook cho phép người dùng liên tục giữ liên lạc với bạn bè, người thân và những người quen biết khác bất cứ nơi nào trên thế giới, miễn là có truy cập vào Internet.<br/>
                                    </span>
                                    <span>
                                        NoteBook được xây dựng với ngôn ngữ lập trình Javascript được phát triển bở thư viện ReactJs, một chương trình được xây dựng bởi các kỹ sư thông tin T3h.
                                    </span>
                                </div>
                                <div className="introducePart mt-3">
                                    <h5>II, Liên hệ với chúng tôi</h5>
                                        <div className="introducePartDesc">
                                            <span className="wrap-heading">Địa chỉ công ty chúng tôi.</span>
                                            <p className="wrap-header-mess">
                                            Q.Long Biên- Hà Nội - Việt Nam
                                            </p>
                                        </div>
                                        <div className="introduceMap w-100">
                                            <iframe className="introduceMapImg w-75" title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59582.98890814379!2d105.84841521153007!3d21.035214375488966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135a96e2e72c51f%3A0x54689ea60eeeee78!2zTG9uZyBCacOqbiwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1629876730508!5m2!1svi!2s" style={{"border":"0"}} allow="true"
                                            fullscreen="true" loading="lazy" />  
                                        </div>
                                        <div className="introducePartDesc">
                                            <span className="wrap-heading">Hoặc qua :</span>
                                            <ul className="introduceContacts">
                                                <li className="introduceContact">
                                                    <PhoneIcon/> 0366xxxxxx
                                                </li>
                                                <li className="introduceContact">
                                                    <MailIcon/> longlonglong1911@gmail.com
                                                </li>
                                                <li className="introduceContact">
                                                    <GitHubIcon/> duonglong1911
                                                </li>
                                            </ul>
                                        </div>
                                </div>
                                <div className="introducePart mt-3">
                                    <h5>III, Điều khoản và Dịch vụ</h5>
                                    <span>
                                        NoteBook tạo ra các công nghệ và dịch vụ nhằm hỗ trợ mọi người kết nối với nhau, xây dựng cộng đồng và phát triển doanh nghiệp. Các Điều khoản này điều chỉnh việc bạn sử dụng NoteBook và các sản phẩm, tính năng, ứng dụng, dịch vụ, công nghệ cũng như phần mềm khác mà chúng tôi cung cấp (Sản phẩm của NoteBook hoặc Sản phẩm), trừ khi chúng tôi nêu rõ là áp dụng các điều khoản riêng (và không áp dụng các điều khoản này). Các sản phẩm này do NoteBook, Inc. cung cấp cho bạn.<br/>
                                    </span>
                                    <span>
                                        Bạn không mất phí sử dụng NoteBook hay các sản phẩm và dịch vụ khác thuộc phạm vi điều chỉnh của những Điều khoản này. Chúng tôi không bán dữ liệu cá nhân của bạn cho các nhà quảng cáo và cũng không chia sẻ thông tin trực tiếp nhận dạng bạn (chẳng hạn như tên, địa chỉ email hoặc thông tin liên hệ khác) với những đơn vị này trừ khi được bạn cho phép cụ thể.<br/>
                                    </span>
                                    <span>
                                        Sứ mệnh của chúng tôi là đem đến cho mọi người khả năng xây dựng cộng đồng và đưa thế giới lại gần nhau hơn. Nhằm thúc đẩy sứ mệnh này, chúng tôi cung cấp các Sản phẩm và dịch vụ được mô tả dưới đây cho bạn:
                                        <ul>
                                            <li>- Mang lại trải nghiệm dành riêng cho bạn.</li>
                                            <li>- Kết nối bạn với những người và tổ chức mà bạn quan tâm.</li>
                                            <li>- Giúp bạn thể hiện bản thân và chia sẻ về những gì quan trọng với mình.</li>
                                            <li>- Giúp bạn khám phá nội dung, sản phẩm và dịch vụ mà bạn có thể quan tâm.</li>
                                            <li>- Sử dụng và phát triển các công nghệ tiên tiến để cung cấp những dịch vụ an toàn và thiết thực cho mọi người.</li>
                                        </ul>
                                    </span>
                                </div>
                                
                            </div>

                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
