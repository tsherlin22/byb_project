import React, { useState } from "react";
import { Dropdown, Button, Card, Container, Row, Col } from "react-bootstrap";
import "./Products.css"; // Import the styling file

const productsData = [
  { id: 1, title: "Everyday Duffel Bag", desc: "Slouchy bag shape, Wide & Comfortable Strap, Space for laptops up to 13", price: 20, colors: ["Red", "Blue", "Green"], img: "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
  { id: 2, title: "Small BB Bag", desc: "Hand bag with square shape and suede material, Spacious main compartment with zipper, Timeless look that lasts forever", price: 35, colors: ["Black", "White", "Gray"], img: "https://images.pexels.com/photos/1936848/pexels-photo-1936848.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 3, title: "Tiny Bag", desc: "Small and compact, Can fit essential items, Leather material, Sturdy Handle", price: 50, colors: ["Black", "White", "Gray"], img: "https://images.pexels.com/photos/2090785/pexels-photo-2090785.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 4, title: "Beach Bag", desc: "Large and durable for beach use, Cute design, Open space for your entire everyday life!", price: 45, colors: ["Orange", "Black", "White"], img: "https://images.pexels.com/photos/2346986/pexels-photo-2346986.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 5, title: "BackPack", desc: "Can fit laptop and iPad, Has padding for protection, Leather material", price: 30, colors: ["Brown", "Black", "Red"], img: "https://images.pexels.com/photos/3155047/pexels-photo-3155047.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 6, title: "Italian Summer Bag", desc: "Woven, Small and compact for everyday use!", price: 60, colors: ["Brown", "Black", "White"], img: "https://images.pexels.com/photos/2878761/pexels-photo-2878761.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { id: 7, title: "Tote Bag", desc: "Simple and essential", price: 25, colors: ["Red", "Black", "White"], img: "https://images.pexels.com/photos/4068320/pexels-photo-4068320.jpeg?auto=compress&cs=tinysrgb&w=600" },
];

const Products = ({ updateTotalPrice }) => {
  const [selectedColors, setSelectedColors] = useState({});

  const handleColorSelect = (productId, color) => {
    setSelectedColors((prevColors) => ({ ...prevColors, [productId]: color }));
  };

  return (
    <Container>
      <Row>
        {productsData.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.img} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.desc}</Card.Text>
                <Card.Text><strong>Price: ${product.price}</strong></Card.Text>

                {/* Color Dropdown */}
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    {selectedColors[product.id] || "Select Color"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {product.colors.map((color, index) => (
                      <Dropdown.Item
                        key={index}
                        onClick={() => handleColorSelect(product.id, color)}
                        style={{
                          backgroundColor: selectedColors[product.id] === color ? "#6a0dad" : "transparent",
                          color: selectedColors[product.id] === color ? "#fff" : "#000"
                        }}
                      >
                        {color}
                      </Dropdown.Item>
                    ))}
                  </Dropdown.Menu>
                </Dropdown>

                {/* Buy Button */}
                <Button className="mt-3" variant="primary" onClick={() => updateTotalPrice(product.price)}>
                  Buy
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
