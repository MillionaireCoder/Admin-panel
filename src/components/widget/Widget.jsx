import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
export default function Widget({type}) {
    let data;

    const amount=200;
    const diff=20;

    switch (type){
        case "user":
        data = {
            title: "USERS",
            isMoney: false,
            link: "See All Users",
            icon: <Person2OutlinedIcon 
            className="icon" 
            style={{
                color: "crimson",
                 backgroundColor : "rgba(255,0,0,0.2)"
            }}/>
        };
        break;

        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View All Orders",
                icon: <ShoppingCartOutlinedIcon 
                className="icon"
                style={{
                color: "goldenrod",
                 backgroundColor : "rgba(218,165,32,0.2)"
            }}
                />
            };
            break;

            case "earning":
                data = {
                    title: "EARNINGS",
                    isMoney: true,
                    link: "View Net Earnings",
                    icon: <MonetizationOnOutlinedIcon 
                    className="icon"
                    style={{
                    color: "green",
                    backgroundColor : "rgba(0,128,0,0.2)"
            }}
                    />
                   
                };
                break;

                case "balance":
                    data = {
                        title: "BALANCE",
                        isMoney: true,
                        link: "See Details",
                        icon: <AccountBalanceWalletOutlinedIcon 
                        className="icon"
                        style={{
                        color: "purple",
                        backgroundColor : "rgba(128,0,128,0.2)"
            }}
                        />
                    };
                    break;
        default:
        break;
    }
  return (
    <div className='widget'>
        <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
        {data.isMoney && "$"}   {amount}
        </span>
        <span className="link">{data.link}</span>
        </div>
        <div className="right">
        <div className="percentage positive ">
        <KeyboardArrowUpIcon/>
            20%
        </div>
        {data.icon}
        </div>
    </div>
  )
}
