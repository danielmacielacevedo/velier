import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TestimonialSlider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      interval={5000}
    >
      <div>
        <h3>Testimonio 1</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        <h3>Testimonio 2</h3>
        <p>Ut commodo eros ut tortor consectetur cursus.</p>
      </div>
      <div>
        <h3>Testimonio 3</h3>
        <p>Phasellus dictum lorem ut enim eleifend, eget maximus tellus condimentum.</p>
      </div>
    </Carousel>
  );
};

export default TestimonialSlider;
