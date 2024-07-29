import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "antd";
import "./CardsPage.scss";

const { Meta } = Card;

interface QQQ {
  images: string[];
}

export function CardsPage(): React.JSX.Element {
  const [image, setImage] = useState(
    "https://images.pokemontcg.io/hgss4/1.png"
  );

  // useEffect(() => {
  //   console.debug("effect");
  // }, [image]);

  const getCards = (): any => {
    return fetch(`https://api.pokemontcg.io/v2/cards`, {
      method: "GET",
      headers: { "X-Api-Key": "cf7723da-bd7a-4b30-ad96-c24ce22fc106" },
    })
      .then((response) => response.json())
      .then((data) => {
        let qw = data.data as QQQ[];
        let qwe = qw.map((x) => x.images as string[]);
        let qq = qwe;

        // setImage()
      });
  };

  return (
    <div>
      {"" && getCards()}
      CardsPage
      <div>
        <Row gutter={16}>
          <Col span={8}>
            <Card
              hoverable
              title="Card title"
              bordered={false}
              cover={<img alt="qqq" src={image} />}
            >
              Card content
              <Meta
                title="Europe Street beat"
                description="www.instagram.com"
              />
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
}
