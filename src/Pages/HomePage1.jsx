import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useLocation } from 'react-router-dom';
import CounterSection from '../components1/CounterSection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from '../image/slide1.png';
import slide2 from '../image/slide2.png';
import slide3 from '../image/slide3.png';
import card1 from '../image/card1.png';
import card2 from '../image/card2.png';
import card3 from '../image/card3.png';
import card4 from '../image/card4.png';

const IndividualIntervalsExample = () => {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <img style={{ height: '90vh' }} className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <div className='slider-content'>
            <div className='slider-title'>
              <h3>Let's explore our college</h3>
            </div>
            <p className='welcome-msg' style={{ opacity: 0.8 }}>Start your journey with us. Let's deep dive into the world of Education.</p>
            <div className='btn-container'>
              <button className='slider-btn' type='button'>Register</button>
              <button className='slider-btn' type='button'>Apply Now</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img style={{ height: '90vh' }} className="d-block w-100" src={slide2} alt="Second slide" />
        <Carousel.Caption>
          <div className='slider-content'>
            <div className='slider-title'>
              <h3>We are eager to have you</h3>
            </div>
            <p style={{ opacity: 0.8 }}>Welcome to SGM</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ height: '90vh' }} className="d-block w-100" src={slide3} alt="Third slide" />
        <Carousel.Caption>
          <div className='slider-content'>
            <div className='slider-title'>
              <h3>We always thrive for your best</h3>
            </div>
            <p style={{ opacity: 0.8 }}>Our Motto: Education Through Self Help</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

const HomePage = () => {
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  const features = [
    {
      img: card1,
      title: "Quality Education",
      description: "Structured curriculum with expert faculty ensuring excellence.",
    },
    {
      img: card2,
      title: "Experienced Faculty",
      description: "Learn from highly qualified professors and industry experts.",
    },
    {
      img: card3,
      title: "Student Achievements",
      description: "Our students excel in academics, research, and competitions.",
    },
    {
      img: card4,
      title: "Modern Library",
      description: "Well-stocked digital and physical library with research resources.",
    },
  ];

  return (
    <div>
      <IndividualIntervalsExample />
      <hr className="section-divider" />
      <section className="who-we-are">
        <div className="text">
          <h1>Who We Are?</h1>
          <p>
            The college was established in June 1954 with only 54 students in a single Arts Faculty.
            Over the years, it has flourished to become a multi-faculty institution with 30 departments,
            numerous support services, and interdisciplinary activities. The campus spans about 6.8 hectares.
            The total student strength of Senior and Junior College is more than 12,500, with above 400 teaching
            and non-teaching staff. It is one of the biggest and most well-known multi-faculty colleges in the jurisdiction
            of Shivaji University, Kolhapur.
          </p>
        </div>
        <img src={slide1} alt="College" />
      </section>
      <section className="features-section">
        <div className="title-div">
          <h3>The Spirit Of SGM</h3>
          <p>Achieve Your Dreams</p>
        </div>
        <div className="container">
          <div className="row">
            <Slider {...settings}>
              {features.map((feature, index) => (
                <div key={index} className="col-md-3 card-box-slider">
                  <Card className="card1">
                    <Card.Img variant="top" src={feature.img} />
                    <Card.Body>
                      <Card.Title>{feature.title}</Card.Title>
                      <Card.Text>{feature.description}</Card.Text>
                      <Button style={{ backgroundColor: "#FFC600", border: "none", color: "#000" }}>
                        Read More
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
      <CounterSection />
    </div>
  );
};

export default HomePage;
