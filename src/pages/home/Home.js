import Navbar from "../../components/navbar/Navbar"
import Footer from "../../components/footer/Footer"
import Blog from "../blog/Blog"
import Aside from "../../aside/Aside"
import Hero from "../../components/hero/Hero"
export default function Home(params) {
    return(
        <div>
            <Navbar/>
            <Hero/>
            <Blog/>
            <Aside/>
            <Footer/>
        </div>
    )
    
}