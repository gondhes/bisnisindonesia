import React from 'react'
import { Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import img1 from '../images/img-1.png'


function MovieCard(props) {
  return (
    <>
    <div className="article-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">12 Juli 2020</Card.Subtitle>
          <Card.Title>Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya</Card.Title>
          <Card.Text>
            Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="article-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">12 Juli 2020</Card.Subtitle>
          <Card.Title>Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya</Card.Title>
          <Card.Text>
            Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>

    <div className="article-card">
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img1} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">12 Juli 2020</Card.Subtitle>
          <Card.Title>Hari Kemerdekaan 17 Agustus: Upacara Digelar Minimalis, Ini Simulasinya</Card.Title>
          <Card.Text>
            Istana Kepresidenan menggelar latihan penaikan bendera merah putih untuk HUT ke-75 RI dengan petugas minimalis.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  )
}

export default MovieCard
