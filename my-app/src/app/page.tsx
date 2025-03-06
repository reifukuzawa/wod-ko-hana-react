"use client";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Image } from 'react-bootstrap';
import { } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar expand="lg" bg="dark" variant="dark">
  <Container>
      <Navbar.Brand href="#">
          <Image src="https://courses.ics.hawaii.edu/ics314s25/morea/react/wod-ko-hana-logo.png" alt="Ko Hana Logo" width={200} height={50} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
          <Nav className="me-auto">
              <Nav.Link href="#"><u>OUR JOURNEY</u></Nav.Link>
              <Nav.Link href="#">SHOP</Nav.Link>
              <Nav.Link href="#">CORPORATE GIFTING</Nav.Link>
              <Nav.Link href="#">VISIT</Nav.Link>
              <Nav.Link href="#">OHANA RUM CLUB</Nav.Link>
              <Nav.Link href="#">WHERE TO BUY</Nav.Link>
              <Nav.Link href="#">RECIPES</Nav.Link>
              <Nav.Link><i className="bi bi-cart"></i> 0</Nav.Link>
          </Nav>
      </Navbar.Collapse>
  </Container>
</Navbar>
);

const MiddleMenu= () => (
  <Container>
    <Row className="justify-content-center">
      <Image 
        src="https://courses.ics.hawaii.edu/ics314s25/morea/react/wod-ko-hana-background.png"
        alt="KoHana background"
        className="pt-2"
        fluid
      />
    </Row>

    <h1 className="position-absolute top-50 start-50 translate-middle text-white">
      OUR JOURNEY
    </h1>

  </Container>
);

const FooterMenu = () => (
<footer className="bg-dark text-white mt-auto py-3">
        <Container>
            <div className="row">
                <div className="col-6">
                    <Image src="https://courses.ics.hawaii.edu/ics314s25/morea/react/wod-ko-hana-logo.png" alt="Ko Hana Logo" width={200} height={50} />
                    <Nav className="flex-column">
                        <Nav.Link href="#" className="text-white">ALOHA@KOHANARUM.COM</Nav.Link>
                        <Nav.Link href="#" className="text-white">(808) 649-0830</Nav.Link>
                        <Nav.Link href="#" className="text-white">92-1770 Kunia Rd., #227, Kunia, HI 96759, USA</Nav.Link>
                    </Nav>
                </div>
                <div className="col-3"></div>
                <div className="col-3 text-end">
                    <Nav className="justify-content-end">
                        <Nav.Link href="#" className="text-white"><i className="bi bi-instagram h2"></i></Nav.Link>
                        <Nav.Link href="#" className="text-white"><i className="bi bi-facebook h3"></i></Nav.Link>
                        <Nav.Link href="#" className="text-white"><i className="bi bi-twitter h3"></i></Nav.Link>
                        <Nav.Link href="#" className="text-white"><i className="bi bi-yelp h3"></i></Nav.Link>
                    </Nav>
                    <Nav className="justify-content-end">
                        <Nav.Link href="#" className="text-white">TERMS & CONDITIONS</Nav.Link>
                        <Nav.Link href="#" className="text-white">PRIVACY POLICY</Nav.Link>
                    </Nav>
                </div>
            </div>
        </Container>
    </footer>
);

export default function Home() {
    return (
        <main>
            <Container>
                <TopMenu/>
                <MiddleMenu/>
                <FooterMenu/>
            </Container>
        </main>
    );
}
