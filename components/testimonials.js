import React from 'react'
import Carousel from "react-multi-carousel"

// Images & icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const faQuote = <FontAwesomeIcon icon={faQuoteLeft} />;

const testimonials = [
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
  { name: "Mr Boris", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua!" },
];

export default class Testimonials extends React.Component {
  render() {

    const CustomRightArrow = ({ onClick }) => <button onClick={() => onClick()} />

    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2
      }
    };

    return(
      <div>

        <Carousel
          responsive={responsive}
          infinite={true}
          autoPlaySpeed={5000}
          autoPlay={this.props.deviceType !== "mobile" ? true : false}
          containerClass="carousel-container"
          ssr={true}>

          {testimonials.map(({ name, text }) => (
            <div className="testimonial" key={text}>
              <p className="quote">{faQuote}</p>
              <p className="text">{text}</p>
              <p className="name">{name}</p>
            </div>
          ))}

        </Carousel>

        <style jsx global>{`
            .react-multi-carousel-list{display:flex;align-items:center;overflow:hidden;position:relative}.react-multi-carousel-track{list-style:none;padding:0;margin:0;display:flex;flex-direction:row;position:relative;transform-style:preserve-3d;backface-visibility:hidden;will-change:transform,transition}.react-multiple-carousel__arrow{position:absolute;outline:0;transition:all .5s;border-radius:35px;z-index:1000;border:0;background:rgba(0,0,0,0.5);min-width:43px;min-height:43px;opacity:1;cursor:pointer}.react-multiple-carousel__arrow:hover{background:rgba(0,0,0,0.8)}.react-multiple-carousel__arrow::before{font-size:20px;color:#fff;display:block;font-family:revicons;text-align:center;z-index:2;position:relative}.react-multiple-carousel__arrow--left{left:calc(4% + 1px)}.react-multiple-carousel__arrow--left::before{content:"\e824"}.react-multiple-carousel__arrow--right{right:calc(4% + 1px)}.react-multiple-carousel__arrow--right::before{content:"\e825"}.react-multi-carousel-dot-list{position:absolute;bottom:0;display:flex;left:0;right:0;justify-content:center;margin:auto;padding:0;margin:0;list-style:none;text-align:center}.react-multi-carousel-dot button{display:inline-block;width:12px;height:12px;border-radius:50%;opacity:1;padding:5px 5px 5px 5px;box-shadow:none;transition:background .5s;border-width:2px;border-style:solid;border-color:grey;padding:0;margin:0;margin-right:6px;outline:0;cursor:pointer}.react-multi-carousel-dot button:hover:active{background:#080808}.react-multi-carousel-dot--active button{background:#080808}.react-multi-carousel-item{transform-style:preserve-3d;backface-visibility:hidden}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.react-multi-carousel-item{flex-shrink:0 !important}.react-multi-carousel-track{overflow:visible !important}}
            .react-multiple-carousel__arrow {
              background:none;
            }
            .react-multiple-carousel__arrow--right::before {
              content:">";
              color: var(--teal);
            }
            .react-multiple-carousel__arrow--left::before {
              content:"<";
              color: var(--teal);
            }
            .react-multiple-carousel__arrow--right {
              right: calc(0% - 40px);
            }
            .react-multiple-carousel__arrow--left {
              left: calc(0% - 40px);
            }

            .react-multiple-carousel__arrow:hover {
              background:none;
            }
            .carousel-container {
              
            }
        `}</style>

        <style jsx>{`
            .text,
            .name {
              font-size:.8rem!important;
              padding:0 1rem;
            }
            .name {
              padding:.5rem 0;
              font-weight:500;
            }
            .text {
              text-indent: 3rem;
              margin-top: -1.5rem;
              margin-left: -1rem;
            }
            .quote {
              width:2rem;
              display:inline-block;
              color:var(--teal);
            }
            div {
              padding:0 1.5rem;
            }
        `}</style>

      </div>
    )
  }
}