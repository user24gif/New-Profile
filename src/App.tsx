import { Static } from "./utils/static";
import Layout from "./components/Layout/Layout";
import cx from "classnames";
import Arrow from "./assets/arrow-up-right.svg";
import Asterik from "./assets/asterik.png";
import { Link } from "react-router-dom";
import Linkedin from '../src/assets/Images/linkedin (1).svg' 
import Mail from '../src/assets/Images/mail.svg' 
import Twitter from '../src/assets/Images/twitter.svg' 
import Medium from '../src/assets/Images/medium.png' 
function App() {
  return (
    <Layout>
      <div className="flex h-70vh flex-col items-center justify-center gap-1 py-10">
        <p className="max-w-3xl text-center text-4xl font-semibold leading-40">
          Product Designer
        </p>
        <p className="w-2/5	 text-center text-base font-regular leading-7 text-oh-gray">
          loves to excite people with great visuals & strives to understand human cognition to make product experience better for people.
        </p>

      {/* Social Set */}
      <div className="flex pt-3 gap-4"> 
        <img src={Linkedin} alt="Linkedin" />
        <img className="h-3" src={Medium} alt="Medium" />
        <img src={Twitter} alt="twitter" />
        <img src={Mail} alt="mail" />
      </div>
      </div>
      {/* Card content */}
      <div className="mx-auto grid max-w-1400px grid-cols-2 gap-2 px-4 py-4">
        {Static.cards.map((card: any) => (
          <div
          onClick={()=>{
            window.open(card.redirect_url)
          }}
            key={card.name}
            // className={`${card.bg} lg:flex-shrink lg:max-w-650px  lg:w-full lg:h-496px rounded-xl bg-cover bg-center`}
            className={`${card.bg}  group relative h-496px rounded-xl bg-cover bg-center after:absolute after:left-0 after:top-0 after:h-496px after:w-full after:content-[''] hover:after:rounded-xl hover:after:backdrop-blur-sm hover:after:backdrop-brightness-50 hover:after:transition hover:after:duration-500 hover:after:ease-out`}
          >
            <p className="hidden group-hover:absolute group-hover:left-2 group-hover:top-2 group-hover:z-10 group-hover:block group-hover:font-medium group-hover:text-white">
              {card.name}
            </p>
            <div
              className="hidden group-hover:absolute group-hover:right-2 group-hover:top-2 group-hover:z-10 group-hover:block group-hover:rounded-full group-hover:bg-white group-hover:p-2 "
            >
              <img src={Arrow} alt="cta-icon" />
            </div>
          </div>
        ))}
      </div>
      <div className="py-8 mt-6 bg-gray-50 text-center">
        <p className="text-4xl font-medium pb-1 leading-120">Let's work together</p>
        <p className="text-4xl font-medium text-oh-gray">Get in touch</p>
        {/* Send mail button */}
        <div className="pt-4">         
           {Static.Sendmailbutton.map((navItem: any) => (
            <Link
              to={`${navItem.path}`}
              key={navItem}
              className="rounded-md bg-gray-900 text-gray-100 px-2 py-10px font-sans text-sm font-medium tracking-wide"
              
            >
              {navItem.name}
            </Link>
          ))}
          {/* social set */}
        <div className="flex pt-6 align-center justify-center gap-4">  
        <img src={Linkedin} alt="Linkedin" />
        <img className="h-3" src={Medium} alt="Medium" />
        <img src={Twitter} alt="twitter" />
        <img src={Mail} alt="mail" />
      </div>
        </div> 

        <div className="pt-6">
          <p className="  text-gray-600 text-sm"> © Designed & Developed by Ramanan</p>
        </div>  
        </div>
        <div>
      </div>

      {/* Alt-Footer */}
      {/* <footer className="flex flex-row items-center justify-between p-8">
        <div className="flex items-center gap-1">
          <img src={Asterik} alt="cta-icon" className="h-4 w-4" />
          <p>Ramanan Vijayragavan {new Date().getFullYear()}</p>
        </div>
        <div className="flex gap-4">
          <p>Twitter</p>
          <p>LinkedIn</p>
          <p>Mail</p>
        </div>
      </footer> */}
    </Layout>
  );
}

export default App;
