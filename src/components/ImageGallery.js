import React from "react";
import { Card, Col, Row } from "react-bootstrap";

export default function ImageGallery({ images }) {
  return (
    <Row xs={1} md={2} xl={3} xxl={4}>
      {images.map((iamge) => (
        <Col>
          <div className="pb-3 h-100">
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={iamge.url}
                height={200}
                style={{
                  objectFit: "contain",
                }}
              />
              <hr />
              <Card.Body>
                <Card.Title>{iamge.name}</Card.Title>
              </Card.Body>
            </Card>
          </div>
        </Col>
      ))}
    </Row>
  );
}
