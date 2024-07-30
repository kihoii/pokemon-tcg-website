import React, { useState, useEffect, ReactNode } from "react";
import { Card, Col, Row } from "antd";
import "./CardsPage.scss";

const { Meta } = Card;

interface IPokemon {
  images: {
    small: string;
  };
}

export function CardsPage(): React.JSX.Element {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const getCards = async () => {
      try {
        let response = await fetch(`https://api.pokemontcg.io/v2/cards`, {
          method: "GET",
          headers: { "X-Api-Key": "cf7723da-bd7a-4b30-ad96-c24ce22fc106" },
        });
        let data = await response.json();
        let cards = data.data as IPokemon[];
        let imageUrls = cards.map((card) => card.images.small);
        setImages(imageUrls);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    getCards();
  }, []);

  return (
    <div>
      CardsPage
      <div>
        <Row gutter={16}>
          {images.map((image, index) => (
            <Col span={8} key={index}>
              <Card
                hoverable
                title="Card title"
                bordered={false}
                cover={<img alt="Card image" src={image} />}
              >
                Card content
                <Meta
                  title="Europe Street beat"
                  description="www.instagram.com"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
