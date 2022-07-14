import logo from './assets/img/logo.svg'
import cart from './assets/img/cart.svg'
export const Header = () => {
    return(
        <div>
            <img src={logo} alt="logo"/>
            <img src={cart} alt="logo"/>
        </div>
    )
}