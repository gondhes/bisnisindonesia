import React,{ useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setArticlesAsync } from '../store/actions/articles'
import { Navbar, Container, Image, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png'
import hut from '../images/75.png'
import widget1 from '../images/widget-1.jpg'
import widget2 from '../images/widget-2.jpg'
import banner from '../images/banner.jpg'
import logo1 from '../images/logo-bank-btn.png'
import logo2 from '../images/logo-waskita.png'
import logo3 from '../images/logo-bisnis-com-color.png'

import ArticleCard from "../components/ArticleCard"

export default function Home() {

  const articles = useSelector(state => state.articles.data)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setArticlesAsync())
  },[dispatch])

  console.log(articles, "<<<<<<<< ART");

  return (
    <div className="bg">
      <Navbar>
        <Container>
            <Navbar.Brand href="#">
            <Image
                src={logo}
                // height="35"
                className="d-inline-block align-top mt-3"
                alt="Bisnis Indonesia Logo"
            />
            </Navbar.Brand>
            <Navbar.Brand href="#">
            <Image
                src={hut}
                height="60"
                className="d-inline-block justify-content-end"
                alt="Bisnis Indonesia Logo"
            />
            </Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid>
        <div className="header">
          Spirit Membangun Indonesia Maju!
        </div>

        <div className="text-box">
          <Row>
            <Col></Col>
            <Col xs={7}>Di tengah pro kontra mengenai layak tidaknya Indonesia menyandang predikat negara maju, menjadi menarik untuk mengetahui seberapa jauh kemajuan yang dicapai setelah negara ini merdeka selama 75 tahun. Apa peluang dan tantangan Indonesia menjadi negara maju di saat wabah virus Corona bisa menyeret perekonomian nasional ke jurang resesi?</Col>
            <Col></Col>
          </Row>
        </div>

        <div className="video-box embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/JhelOxAkYqI" title="video-box" allowFullScreen style={{ width: '62rem', height: '35rem'}}></iframe>
        </div>

        <div className="widget-box">
          <Row>
            <Col>
              <Image src={widget1} style={{ height: '40rem' }} rounded />
            </Col>
            <Col>
              <Image src={widget2} style={{ height: '40rem' }} rounded />
            </Col>
          </Row>
        </div>
        
        <div className="banner-box">
          <Row>
            <Col>
              <Image src={banner} style={{ width: '62rem' }} />
            </Col>
          </Row>
        </div>

        <div className="next-box">
          <Row>
            <Col></Col>
            <Col xs={8}>
                Berita terkini
            </Col>
            <Col></Col>
          </Row>
        </div>

        <div className="article-card">
          <Row>
            {
              articles.map(article => {
                return <ArticleCard article={article} key={article.id}></ArticleCard>
              })
            }
          </Row>
        </div> 

        <div className="sponsor-box">
          <Row>
            <Col></Col>
            <Col xs={7}>Didukung oleh</Col>
            <Col></Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <Image src={logo1} />
            </Col>
            <Col>
              <Image src={logo2} />
            </Col>
          </Row>
        </div>

        <div className="footer">
          <Row>
            <Col></Col>
            <Col xs={10}>
              <hr/>
              <Row>
                <Col><Image src={logo3} style={{ width: '12rem' }}/></Col>
                <Col></Col>
                <Col>About</Col>
                <Col>Privacy Policy </Col>
                <Col>Code of Conduct </Col>
                <Col>Advertise with us</Col>
                <Col>Contact Us </Col>
                <Col>Career </Col>
              </Row>
              <br/>
              <p className="col-sm">
                Copyright &copy;{new Date().getFullYear()} - Bisnis Indonesia
              </p>
              </Col>
            <Col></Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}
