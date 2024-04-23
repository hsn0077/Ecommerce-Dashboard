import React from 'react'
import slide1 from '../img/slide-1.jpg';
import slide2 from '../img/slide-2.jpg';
import slide3 from '../img/slide-3.jpg';
import { Link } from 'react-router-dom';
import './Slider.css'

export default function Slider() {
  return (
    <div className='container'><div id="carouselExampleControls" class="carousel slide" data-ride="carousel" data-interval="5000">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <Link to='/slider'><img class="d-block" src={slide1} alt="First slide" /></Link>
      </div>
      <div class="carousel-item">
        <img class="d-block" src={slide2} alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block" src={slide3} alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div></div>
  )
}
