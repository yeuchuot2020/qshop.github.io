import React from 'react'
import { Link } from 'react-router-dom';
import Grid from './Grid';

import logo from '../assets/images/QshOp.png'


const footerAboutLinks =[
    {
        display: "Giới thiệu",
        path: "/about"
    },
    {
        display: "Liên hệ",
        path: "/about"
    },
    {
        display: "Tuyển dụng",
        path: "/about"
    },
    {
        display: "Tin tức",
        path: "/about"
    },
    {
        display: "Hệ thống cửa hàng",
        path: "/about"
    }
]

const footerCustomerLinks = [
    {
        display: "Chính sách đổi trả",
        path: "/about"
    },
    {
        display: "Chính sách bảo hành",
        path: "/about"
    },
    {
        display: "Chính sách hoàn tiền",
        path: "/about"
    }
]


const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <Grid 
                    col={4}
                    mdCol={2}
                    smCol={1}
                    gap={10}
                >
                    <div>
                        <div className="footer__title">
                            Tổng đài hỗ trợ
                        </div>
                        <div className="footer__content">
                            <p>
                                Liên hệ đặt hàng <strong>0325487514</strong>
                            </p>
                            <p>
                               Thắc mắc đơn hàng <strong>0325487514</strong>
                            </p>
                            <p>
                                Góp ý <strong>0325487514</strong>
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Về Qshop
                        </div>
                        <div className="footer__content">
                            {
                                footerAboutLinks.map((item, index) =>(
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    <div>
                        <div className="footer__title">
                            Chăm sóc khách hàng
                        </div>
                        <div className="footer__content">
                            {
                                footerCustomerLinks.map((item, index) =>(
                                    <p key={index}>
                                        <Link to={item.path}>
                                            {item.display}
                                        </Link>
                                    </p>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div>
                        <p>
                            <Link to="/">
                                <img src={logo} alt=""  className="footer__logo"/>
                            </Link>
                        </p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem ab autem inventore rerum, quas temporibus commodi, fugiat aliquam amet itaque, distinctio perferendis est ea ipsa veritatis numquam expedita suscipit? Tenetur.</p>
                    </div>   
                    
                </Grid>
                    
            </div>
        </footer>
        
    )
}

export default Footer
