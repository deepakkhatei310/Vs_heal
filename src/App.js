import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Blog from "./components/Blog";
import ContactUs from "./components/ContactUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Routes
import Footer from "./components/Footer";
import MeetExport from "./components/MeetExport";
import WellNessProgram from "./components/WellNessProgram";
import GoalSetting from "./components/GoalSetting";
import Fitness from "./components/Fitness";
import Nutrition from "./components/Nutrition";
import Panchkarma from "./components/Panchkarma";
import ShopOnline from "./components/ShopOnline";
import Signup from "./components/Signup";
import Forgot from "./components/ForgotPassword/Forgot";
import "./components/ForgotPassword/Lost.css";
import Doctordetails from "./components/Doctordetails";
import Productpage from "./components/Productpage";
import Products from "./components/Products";
import AddtoCart from "./components/AddtoCart";
function App() {
    return (
        <>
            <Router>
                <Navbar home="Home" about="About Us" services="Services" product="Products" gallery="Partner with Us" blog="Blog" contact="Contact us" signup="Login/Signup" />
                <div>
                    <Routes>
                        <Route path="/" element={<Home home="Home" />} />
                        <Route path="/about" element={<About about="About" />} />
                        <Route path="/services" /> {/* Replace with your Services component */}
                        <Route path="/gallery" element={<Gallery gallery="Gallery" />} />
                        <Route path="/blog" element={<Blog blog="Blog" />} />
                        <Route path="/contact" element={<ContactUs contact="Contact" />} />
                        <Route path="/market-export" element={<MeetExport />} />
                        <Route path="/wellness-program" element={<WellNessProgram />} />
                        <Route path="/goal-setting" element={<GoalSetting />} />
                        <Route path="/fitness" element={<Fitness />} />
                        <Route path="/nutrition" element={<Nutrition />} />
                        <Route path="/panchkarma" element={<Panchkarma />} />
                        <Route path="/shop-online" element={<ShopOnline />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route path="/forgotpassword" element={<Forgot />} />
                        <Route path="/details" element={<Doctordetails/>} />
                        <Route path="/pr_details/:id" element={<Productpage product="Products" />} />
                        <Route path="/addtocart" element={<AddtoCart/>} />
                        
                    </Routes>
                </div>
                <Footer />
            </Router>
        </>
    );
}

export default App;
