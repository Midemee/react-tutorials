import {Link} from "react-router-dom"

export default function Navbar (){
    return (
    <header className="flex items-center justify-between py-3 px-2">
        <img className= "w-[70px] rounded-full" src="https://cdn.vectorstock.com/i/1000v/60/06/letter-a-logo-vector-25576006.avif" alt="logo" />
        <div className="flex flex-row gap-5">
            
            <Link  to="/">
            <p>Home</p>
            </Link>

            <Link to="/about">
            <p>About</p>
            </Link>

            <Link to="/contact" >
            <p>Contact</p>
            </Link>

            <Link to="/more">
            <p>More</p>
            </Link>

        </div>
    </header>
    )
}