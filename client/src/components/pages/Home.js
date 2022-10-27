import React ,{useEffect} from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import {useDispatch,useSelector} from "react-redux"
import {getAllThemes} from "../../state/actions/themeActions.js"

const Home = () => {
  const navigate=useNavigate()
    var settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
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
        // console.log(themes)
      },5000)

   
        // let themes= [
        //   // {
        //   //   "_id": "635254527a167c80ee93dd86",
        //   //   "title": "Gym",
        //   //   "description": "A website for all needs",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666339922/vhjualfkfnffgca5ishw.png",
        //   //   "price": 9999,
        //   //   "category": "Sports",
        //   //   "siteurl": "https://www.myknot.club/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "6355576e876e5125031301c9",
        //   //   "title": "Known Education",
        //   //   "description": "Online Education website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537325/wbewjlfmsk27m3our1ef.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-know-edu/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "635559de876e5125031301cb",
        //   //   "title": "EduHub",
        //   //   "description": " Education Community",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666537949/bkg9zhz1zblvujiesmps.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-eduhub/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "63555a88876e5125031301cd",
        //   //   "title": "Perfect Learn",
        //   //   "description": "College website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666538119/f2nnls9pyfd2bjlunos5.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-perfect-learn/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "635572a42c6b7aaf8fbbad7d",
        //   //   "title": "EduWell",
        //   //   "description": "Graphics Education website",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666544291/oesoyed4rnkjapoh4hpy.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-eduwell/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "635578fb2c6b7aaf8fbbad7f",
        //   //   "title": "Online Study",
        //   //   "description": "Online Education website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666545914/oviwjyx22g50vp7ro8eh.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-online-study/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "6355799a2c6b7aaf8fbbad81",
        //   //   "title": "Online Study",
        //   //   "description": "Online Education website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546073/ptemrtabcmv376rhjefj.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-online-study/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "63557a322c6b7aaf8fbbad83",
        //   //   "title": "Known Education",
        //   //   "description": "Online Education website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546225/mghakbhtwzljozsrx7mp.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-know-edu/",
        //   //   "__v": 0
        //   // },
        //   // {
        //   //   "_id": "63557ac42c6b7aaf8fbbad85",
        //   //   "title": "WebUni",
        //   //   "description": "Online Course website.",
        //   //   "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546371/qj2ahppsvlgfv7y1oxuf.png",
        //   //   "price": 9999,
        //   //   "category": "Educational",
        //   //   "siteurl": "https://goutham4391.github.io/education-webuni/",
        //   //   "__v": 0
        //   // },
        //   {
        //     "_id": "63557c962c6b7aaf8fbbad87",
        //     "title": "EduHub",
        //     "description": "Education Community",
        //     "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546836/dqmpej8e1ia6vgo6ho0t.png",
        //     "price": 9999,
        //     "category": "Educational",
        //     "siteurl": "https://goutham4391.github.io/education-eduhub/",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "63557cf32c6b7aaf8fbbad89",
        //     "title": "Lincoln  ",
        //     "description": "High school website. ",
        //     "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666546930/xvnuqew1aqp0pgfbewvz.png",
        //     "price": 9999,
        //     "category": "Educational",
        //     "siteurl": "https://goutham4391.github.io/education-lincoln/",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "63557d3a2c6b7aaf8fbbad8b",
        //     "title": "Grad School",
        //     "description": "Graduation school website.",
        //     "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547001/faljhvt6tacwqxv47wak.png",
        //     "price": 9999,
        //     "category": "Educational",
        //     "siteurl": "https://goutham4391.github.io/education-grad-school/",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "63557d762c6b7aaf8fbbad8d",
        //     "title": "Education74  ",
        //     "description": "Graduation college website. ",
        //     "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547061/x1vamdpycgfdhudod83g.png",
        //     "price": 9999,
        //     "category": "Educational",
        //     "siteurl": "https://goutham4391.github.io/education-university-edu74/",
        //     "__v": 0
        //   },
        //   {
        //     "_id": "63557de72c6b7aaf8fbbad8f",
        //     "title": "Charity  ",
        //     "description": "Non profit Donation website.",
        //     "img": "http://res.cloudinary.com/dzfblisi4/image/upload/v1666547174/rpoylflkgchewstjpee4.png",
        //     "price": 9999,
        //     "category": "Non Profit",
        //     "siteurl": "https://goutham4391.github.io/nonprofit-charity/",
        //     "__v": 0
        //   },
    
        // ]

      async function paymentcontrol(){
        try {
          

          await fetch("https://sandbox.cashfree.com/pg/orders",{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
            "x-api-version":"2022-01-01",
            "x-client-id":"16659e73fe0b71d24294caa1695661",
            "x-client-secret":"348a00ab3ee5b662f0122897e3c7bfbf4082ddf2",
            "Accept":"application/json"
          },
          body:{
            "customer_details": {
                "customer_id": "7112AAA812234",
                "customer_email": "johny@cashfree.com",
                "customer_phone": "9908734801"
            },"order_meta": {
                "notify_url": "https://webhook.site/0578a7fd-a0c0-4d47-956c-d02a061e36d3"
            },
            "order_amount": 1.00,
            "order_currency": "INR",
            "order_id":"123456789AAA",
            "order_amount":"1200"
        }
        }).then((res)=>{
          return res.json()
        }).then((data)=>{
          return data
        }).catch((error)=>{
          console.log(error)
        })


        } catch (error) {
          console.log(error)
        }
      }
      
  return (
    <>
      <div class="h-one">
      <img
        src="https://cdn.pixabay.com/photo/2015/03/13/17/39/road-672036_960_720.jpg"
        alt=""
        class="h-img1"
      />
      <div class="h-two"></div>
    </div>
    <nav class="n-one">
      <div class="n-two">
        <img
          src="https://www.myknot.club/images/logo%20black.png"
          alt=""
          class="n-img1"
        />
      </div>
      <div class="n-three">
        <ul class="h-listcontrol">
          <li class="h-list-item">HOME</li>
          <li class="h-list-item">ABOUT US</li>
          <li class="h-list-item">CONTACT US</li>
          <li class="h-list-item nav-extra">LOGIN</li>
          <li class="h-list-item nav-extra">SIGNUP</li>
        </ul>
      </div>
      <h1 class="h-h1">Get On The Path To Buisness Success</h1>
      <p class="h-p2">Select your dream website from our rich collection</p>
      <div class="h-four">
        <button class="h-btn1" onClick={()=>{
          navigate("/collection")
        }}>View Collection</button>
      </div>
    </nav>

    <p class="h-pmain">Our categories</p>

<div class="h-three">
    <div class="h-three-flexer">
      <div class="h-flex-childs">
        <i class="fa-solid fa-graduation-cap h-icon1"></i>
        <p class="h-p1">Education</p>
      </div>
      <div class="h-flex-childs">
        <i class="fa-solid fa-baseball-bat-ball h-icon1"></i>
        <p class="h-p1">Sports</p>
      </div>
      <div class="h-flex-childs">
        <i class="fa-solid fa-cart-shopping h-icon1"></i>
        <p class="h-p1">Ecommerce</p>
      </div>
      <div class="h-flex-childs">
        <i class="fa-solid fa-user-tag h-icon1"></i>
        <p class="h-p1">Portfolio</p>
      </div>
      <div class="h-flex-childs">
        <i class="fa-solid fa-circle-dollar-to-slot h-icon1"></i>
        <p class="h-p1">Non Profit</p>
      </div>
      <div class="h-flex-childs">
        <i class="fa-solid fa-bell-concierge h-icon1"></i>
        <p class="h-p1">Services</p>
      </div>
    </div>
</div>

  <p class="h-p-mainone"  >Eduactional</p>
    {/* <div class="h-cardholder"> */}
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Educational"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      
          {/* </div> */}
        <p class="h-p-mainone" >Non Profit</p>
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Non Profit"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      
        <p class="h-p-mainone" >Sports</p>
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Sports"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      
        <p class="h-p-mainone" >Portfolio</p>
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Portfolio"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      
        <p class="h-p-mainone" >Services</p>
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Services"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      
        <p class="h-p-mainone" >Ecommerce</p>
      <Slider  {...settings}>
      {
                 themes &&  themes.map((ele,index)=>{

                      if(ele.category==="Ecommerce"){
                        return <Card data={ele}/>
                      }

                   })
               }

        </Slider>      

  
    </>
  );
};

export default Home;
