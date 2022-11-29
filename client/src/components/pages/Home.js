import React, { useContext, useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllThemes } from "../../state/actions/themeActions.js";
import Appcontext from "../context/Appcontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const navigate = useNavigate();
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    // cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const mainstate = useContext(Appcontext);

  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  function getScreenWidth() {
    let a = window.screen.width;
    return a;
  }
  useEffect(() => {
    let swidth = getScreenWidth();

    if (swidth > 501) {
      setShow1(true);
      setShow2(false);
    } else {
      setShow1(false);
      setShow2(true);
    }
  }, []);

  function overlayset() {
    if (mainstate.overlay === true) {
      mainstate.setOverlay(false);
    } else {
      mainstate.setOverlay(true);
    }
  }

  function  userLogout(){
    localStorage.removeItem("userID")
  }


  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getAllThemes());
  // }, []);

  // const { themes, loading } = useSelector((state) => {
  //   return state.themes;
  // });

  let themes = [
    {
      "_id": "63863b7c55eee3bc0b13ac8e",
      "title": "Testing today",
      "description": "tester321",
      "img": "http://res.cloudinary.com/dldw2bhin/image/upload/v1669741437/r3ahmfdao7rzxvnfrw4m.png",
      "price": 1,
      "category": "Educational",
      "siteurl": "https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage",
      "numOfReviews": 0,
      "reviews": [],
      "__v": 0
    },
    {
      _id: "635559de876e5125031301cb",
      title: "EduHub",
      description: " Education Community",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-eduhub/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
    {
      _id: "63555a88876e5125031301cd",
      title: "Perfect Learn",
      description: "College website.",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-perfect-learn/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
    {
      _id: "635572a42c6b7aaf8fbbad7d",
      title: "EduWell",
      description: "Graphics Education website",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666544291/oesoyed4rnkjapoh4hpy.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-eduwell/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
    {
      _id: "63557a322c6b7aaf8fbbad83",
      title: "Known Education",
      description: "Online Education website.",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546225/mghakbhtwzljozsrx7mp.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-know-edu/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
    {
      _id: "63557ac42c6b7aaf8fbbad85",
      title: "WebUni",
      description: "Online Course website.",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546371/qj2ahppsvlgfv7y1oxuf.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-webuni/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
    {
      _id: "63557c962c6b7aaf8fbbad87",
      title: "EduHub",
      description: "Education Community",
      img: "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
      price: 9999,
      category: "Educational",
      siteurl: "https://goutham4391.github.io/education-eduhub/",
      __v: 0,
      numOfReviews: 0,
      reviews: [],
    },
  ];

 
  return (
    <>
      <div className="h-one">
        <img
          src="https://cdn.pixabay.com/photo/2015/03/13/17/39/road-672036_960_720.jpg"
          alt=""
          className="h-img1"
          onClick={() => {
            navigate("/");
          }}
        />
        <div className="h-two"></div>
      </div>
      <nav className="n-one">
        <div className="n-two">
          <img
            src="https://www.myknot.club/images/logo%20black.png"
            alt=""
            className="n-img1"
          />
        </div>
        <div className="n-three">
          <ul className="h-listcontrol">
            {show1 === true ? (
              <>
                <li className="h-list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="h-list-item">
                  <Link to="/aboutus">About Us</Link>
                </li>
                <li className="h-list-item">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="h-list-item nav-extra">
                  {localStorage.getItem("userID") ? (
                    <Link onClick={()=>{
                      userLogout()
                    }}>Logout</Link>
                  ) : (
                    <Link to="/login">Login</Link>
                  )}
                </li>
                <li className="h-list-item nav-extra">
                  {localStorage.getItem("userID") ? (
                    <Link to="/cart">Cart</Link>
                  ) : (
                    <Link to="/register">Signup</Link>
                  )}
                </li>
              </>
            ) : undefined}

            {show2 === true ? (
              <>
                <li className="list-ele m-nav-overrider1"></li>
                <li
                  className="list-ele m-nav-overrider2"
                  onClick={() => {
                    overlayset();
                  }}
                >
                  Menu
                </li>
              </>
            ) : undefined}
          </ul>
        </div>
        <h1 className="h-h1">Your dream websites and instant apps awaits !</h1>
        {/* <p className="h-p2">Select your dream website from our rich collection</p> */}
        <p className="h-p2">
          Welcome to our fresh collection of themes. Hope you find your dream
          website and instant apps here. Start your journey with our themes.
        </p>
        <div className="h-four">
          <button
            className="h-btn1"
            onClick={() => {
              navigate("/collection");
            }}
          >
            View Collection
          </button>
        </div>
      </nav>

      <p className="h-pmain">Our categories</p>

      <div className="h-three">
        <div className="h-three-flexer">
          <div className="h-flex-childs">
            <i className="fa-solid fa-graduation-cap h-icon1"></i>
            <p className="h-p1">Education</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-baseball-bat-ball h-icon1"></i>
            <p className="h-p1">Sports</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-cart-shopping h-icon1"></i>
            <p className="h-p1">Ecommerce</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-user-tag h-icon1"></i>
            <p className="h-p1">Portfolio</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-circle-dollar-to-slot h-icon1"></i>
            <p className="h-p1">Non Profit</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-bell-concierge h-icon1"></i>
            <p className="h-p1">Services</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-plane-departure h-icon1"></i>
            <p className="h-p1">Aerospace</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-flask-vial h-icon1"></i>
            <p className="h-p1">Chemical</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-car-side h-icon1"></i>
            <p className="h-p1">Transport</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-industry h-icon1"></i>
            <p className="h-p1">Manufacturing</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-tractor h-icon1"></i>
            <p className="h-p1">Heavy</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-plug h-icon1"></i>
            <p className="h-p1">Electric</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-suitcase-medical h-icon1"></i>
            <p className="h-p1">Healthcare</p>
          </div>
          <div className="h-flex-childs">
            <i className="fa-solid fa-arrow-trend-up h-icon1"></i>
            <p className="h-p1">Economic</p>
          </div>
        </div>
      </div>
      
      <p className="h-p-mainone" id="education">Educational</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Educational") {
              return <Card data={ele} key={index}  />;
     }
          })}
      </Slider>

      <p className="h-p-mainone">Non Profit</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Non Profit") {
              return <Card data={ele}  key={index}/>;      }
          })}
      </Slider>
      <p className="h-p-mainone" id="sports">
        Sports
      </p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Sports") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Portfolio</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Portfolio") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Services</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Services") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Ecommerce</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Ecommerce") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Aerospace</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Aerospace") {
              return <Card data={ele} key={index}   />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Automotive</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Automotive") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Chemical Industry</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Chemical") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Transport Industry</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Transport") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Manufacturing Industry</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Manufacturing") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Heavy Industry</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Heavy") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Healthcare</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Healthcare") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Electric Industry</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Electric") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Hospitality</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Hospitality") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <p className="h-p-mainone">Economic</p>
      <Slider {...settings}>
        {themes &&
          themes.map((ele, index) => {
            if (ele.category === "Economic") {
              return <Card data={ele} key={index}  />;      }
          })}
      </Slider>
      <ToastContainer />
    </>
  );
};

export default Home;
