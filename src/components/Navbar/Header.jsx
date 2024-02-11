import "./Header.css"
import User from "../../assets/user.png";
import Cart from "../../assets/Cart.png"
export default function Header()
{
    return(
        <div className="header">
            <div className="name">
               Rainbow Delights
            </div>
            <div>
              
              <input className="nosubmit"  placeholder="Find your favorite delight.."/>
            </div>
            <div className="flex">
                <a href="#" ><img src={User}></img></a>
                <a href="#"><img src={Cart}></img></a>
            </div>
        </div>
    )
}