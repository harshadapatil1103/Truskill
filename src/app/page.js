
import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';
import Home1 from "../components/Home/Home1";
import Home2 from "../components/Home/Home2";
import Home3 from "../components/Home/Home3";
import Home4 from "../components/Home/Home4";
import Home5 from "../components/Home/Home5";


function page() {
  return (
    <div>
    <Navbar/>
    <div className='px-6 md:px-20 lg:px-40'>
    <Home1/>
    <Home2/>
    <Home3/>
    <Home4/>
    <Home5/>
  
    </div>
    </div>
  )
}


export default page