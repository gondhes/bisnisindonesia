// import React,{ useState } from 'react'
import { Navbar, Container, Image, Row, Col } from 'react-bootstrap';
import logo from '../images/logo.png'
import hut from '../images/75.png'

export default function Home() {

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
      <Container>
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
      </Container>
    </div>
  )
}
