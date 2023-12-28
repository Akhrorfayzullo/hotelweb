import "./style.css";
import gymimg from "../assets/humphrey-muleba-LOA2mTj1vhc-unsplash 1.png";
import inter from "../assets/inter.png";
import spa from "../assets/spa.png";
import swimming from "../assets/swimming.png";
import rest from "../assets/rest.png";
import laund from "../assets/laund.png";
function Main() {
  return (
    <div className="main">
      <div className="facdiv">
        <h1 className="facih1">FACILITIES</h1>
        <p>
          We want your stay at our lush hotel to be truly unforgettable. That is
          why we give special attention to all of your needs so
        </p>
        <p>
          that we can ensure an experience quite uniquw. Luxury hotels offers
          the perfect setting with stunning views for leisure{" "}
        </p>
        <p>
          and our modern luxury resort facilities will help you enjoy the best
          of all
        </p>
      </div>
      <div className="imgwrap">
        <img className="gmyimg" src={gymimg} alt="no img" />
        <div className="gymdiv">
          <h1>THE GYM</h1>
        </div>
      </div>

      <div className="imgwrap">
        <img className="gmyimg" src={inter} alt="no img" />
        <div className="gymdiv">
          <h1>POOLSIDE BAR</h1>
        </div>
      </div>

      <div className="imgwrap">
        <img className="gmyimg" src={spa} alt="no img" />
        <div className="gymdiv">
          <h1>THE SPA</h1>
        </div>
      </div>

      <div className="imgwrap">
        <img className="gmyimg" src={swimming} alt="no img" />
        <div className="gymdiv">
          <h1>SWIMMING POOL</h1>
        </div>
      </div>

      <div className="imgwrap">
        <img className="gmyimg" src={rest} alt="no img" />
        <div className="gymdiv">
          <h1>RESTAURANT</h1>
        </div>
      </div>

      <div className="imgwrap">
        <img className="gmyimg" src={laund} alt="no img" />
        <div className="gymdiv">
          <h1>LAUNDRY</h1>
        </div>
      </div>

      <div className="testdiv">
        <h1 className="testh1">Testimonials</h1>
        <h1 className="moto">
          "Calm, Serene, Retro – What a way to relax and enjoy"
        </h1>
        <h1 className="location"> Mr. and Mrs. Baxter, UK</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="121"
          height="50"
          viewBox="0 0 121 50"
          fill="none"
        >
          <path
            d="M111 0H81C75.4772 0 71 4.47715 71 10V40C71 45.5228 75.4772 50 81 50H111C116.523 50 121 45.5228 121 40V10C121 4.47715 116.523 0 111 0Z"
            fill="#E0B973"
          />
          <path
            d="M102.34 24.6918L92.647 34.3848L89.76 31.4978L96.566 24.6918L89.76 17.8848L92.647 14.9978L102.34 24.6918Z"
            fill="white"
          />
          <path
            d="M10 50L40 50C45.5228 50 50 45.5228 50 40L50 10C50 4.47715 45.5228 0 40 0L10 0C4.47715 0 0 4.47715 0 10L0 40C0 45.5228 4.47715 50 10 50Z"
            fill="#E0B973"
          />
          <path
            d="M18.66 24.693L28.353 15L31.24 17.887L24.434 24.693L31.24 31.5L28.353 34.387L18.66 24.693Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
}
export default Main;
