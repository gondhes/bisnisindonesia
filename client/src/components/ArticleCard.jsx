import React from 'react'
import { Card, Col } from 'react-bootstrap'


function ArticleCard(props) {

  const { date, headline, overview, img } = props.article

  return (
    <>
    <Col>
      <Card style={{ width: '19rem' }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
          <Card.Title>{headline}</Card.Title>
          <Card.Text>{overview}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    </>
  )
}

export default ArticleCard
