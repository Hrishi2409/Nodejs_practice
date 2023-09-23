import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router-dom"


export default function Home(){
    return(
        <div>
            {/* <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer> */}
            <h1>Home jsx component</h1>
        </div>
    )
}