import React ,{useEffect} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import {useDispatch,useSelector} from "react-redux"
import {getAllThemes} from "../../state/actions/themeActions.js"

const Home = () => {
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 1000,
        pauseOnHover: true,
        // cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

      const dispatch = useDispatch();

      useEffect(() => {
        dispatch(getAllThemes());
      }, [dispatch]);

      const { themes, loading } = useSelector((state) => {
        return state.themes;
      });
      setTimeout(()=>{
        console.log(themes)
      },5000)
  return (
    <>
      <div className="h-one">
        <div className="h-two">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff3ee6"
              fill-opacity="1"
              d="M0,256L14.1,256C28.2,256,56,256,85,240C112.9,224,141,192,169,186.7C197.6,181,226,203,254,218.7C282.4,235,311,245,339,213.3C367.1,181,395,107,424,117.3C451.8,128,480,224,508,234.7C536.5,245,565,171,593,160C621.2,149,649,203,678,234.7C705.9,267,734,277,762,240C790.6,203,819,117,847,112C875.3,107,904,181,932,213.3C960,245,988,235,1016,202.7C1044.7,171,1073,117,1101,96C1129.4,75,1158,85,1186,74.7C1214.1,64,1242,32,1271,21.3C1298.8,11,1327,21,1355,26.7C1383.5,32,1412,32,1426,32L1440,32L1440,0L1425.9,0C1411.8,0,1384,0,1355,0C1327.1,0,1299,0,1271,0C1242.4,0,1214,0,1186,0C1157.6,0,1129,0,1101,0C1072.9,0,1045,0,1016,0C988.2,0,960,0,932,0C903.5,0,875,0,847,0C818.8,0,791,0,762,0C734.1,0,706,0,678,0C649.4,0,621,0,593,0C564.7,0,536,0,508,0C480,0,452,0,424,0C395.3,0,367,0,339,0C310.6,0,282,0,254,0C225.9,0,198,0,169,0C141.2,0,113,0,85,0C56.5,0,28,0,14,0L0,0Z"
            ></path>
          </svg>
          <h1 className="h-h1">
            Digital Products that make your buisness successful
          </h1>
        </div>
      </div>
      <p className="h-mainp1">Your dream webiste awaits here!!</p>
      <p className="h-mainp2">Our categories.......</p>
      <div className="h-three">
        <div className="h-three-flexer">
          <div className="h-flex-childs">
            <i class="fa-solid fa-graduation-cap h-icon1"></i>
            <p className="h-p1">Educational</p>
          </div>
          <div className="h-flex-childs">
            <i class="fa-solid fa-baseball-bat-ball h-icon1"></i>
            <p className="h-p1">Sports</p>
          </div>
          <div className="h-flex-childs">
            <i class="fa-solid fa-cart-shopping h-icon1"></i>
            <p className="h-p1">Ecommerce</p>
          </div>
          <div className="h-flex-childs">
            <i class="fa-solid fa-user-tag h-icon1"></i>
            <p className="h-p1">Portfolio</p>
          </div>
          <div className="h-flex-childs">
            <i class="fa-solid fa-circle-dollar-to-slot h-icon1"></i>
            <p className="h-p1">Non Profit</p>
          </div>
          <div className="h-flex-childs">
            <i class="fa-solid fa-bell-concierge h-icon1"></i>
            <p className="h-p1">Services</p>
          </div>
        </div>
      </div>
  
  <div className="h-four">
  <p className="h-p2">Educational</p>
  <Slider {...settings}>
        
        {
                 themes &&  themes.map((ele,index)=>{
                       return <Card data={ele}/>
                   })
               }
        </Slider>
         
  </div>

  


    </>
  );
};

export default Home;
