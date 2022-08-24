// import LoginPage from './login';
import Login2 from './login2';


function Navbar2(){

const main = {
    display : "flex",
    alignSelf : "center",
    justifyContent : "space-between",
    width : "95%",
    margin : "auto",
    marginTop : "20px"
}

const main2 = {
    display : "flex",
    alignSelf : "center",
    justifyContent : "space-between",
    // border : "1px solid black",
    width : "75%",
    marginLeft : "20px"
}

const main3 = {
    display : "flex",
    alignSelf : "center",
    justifyContent : "space-between",
    // border : "1px solid black",
    width : "20%",
    // alignSelf: "row-reverse",
}

const image = {
    width : "200px"
}

const icon = {
    width : "25px",
    objectFit: "contain"
}

const color = {
    color : "red"
}

    return (
        <div style={main} id="navbar2">
            <div style={main2}>
                <img style={image} src="https://cdn.modesens.com/static/img/20190228newlogo-black.svg" alt="" />
                <p>WOMEN</p>
                <p>MEN</p>
                <p>BEAUTY</p>
                <p>KIDS</p>
                <p>HOME</p>
                <p>DESIGNERS</p>
                <p>COMMUNITY</p>
                <p>WHY MODESENS</p>
                <p style={color}>SALE</p>
            </div>
            <div style={main3}>
                <img style={icon} src="https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/2560px-Flag_of_India.svg.png" alt="" />

                <img style={icon} src="https://media.istockphoto.com/vectors/shopping-cart-icon-vector-vector-id1151942531?k=20&m=1151942531&s=170667a&w=0&h=wMROK4RtbfOtLMVYfQikm5waOfl-DcpJnlMEeXr06yI=" alt="" />
                {/* <LoginPage/> */}
                <Login2/>
                
                <input type="text" name="" id="" placeholder="SEARCH" />
            </div>
            
        </div>
    )
}
 

export default Navbar2