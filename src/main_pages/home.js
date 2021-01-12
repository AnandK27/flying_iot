import React,{ Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Balls from '../images/balls.png'

class Home extends Component{
    render() {
        return(
            <>
            <h1 className='container'>Home</h1>
            <Carousel interval={1000} fade ={true} bsPrefix="dark carousel">
                <Carousel.Item>
                    <img
                    className="d-block w-100 img-fluid"
                    src={Balls}
                    alt="First slide"

                    />
                    <Carousel.Caption >
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Balls}
                    alt="Third slide"
                    />

                    <Carousel.Caption >
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={Balls}
                    alt="Third slide"
                    />

                    <Carousel.Caption >
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
           </>
            
        )
    }
}

export default Home;