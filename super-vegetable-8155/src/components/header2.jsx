function Header(){

const heading = {
    textAlign : "center",
    fontSize : "30px",
    marginTop : "30px"

}

const imageBrand = {
    display : "grid",
    gridTemplateColumns : "repeat(6,1fr)",
    width : "95%",
    margin : "auto",
    marginTop : "30px"
}


    return (
        <div style={heading}>
            <h1><b>Featured Partners</b></h1>
            <h3>Compare across our 500+ partner stores to find the products you want at the best price.</h3>
            <div style={imageBrand}>
                <img src="https://cdn.modesens.com/banner/20220708-SSENSE-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-NET-A-PORTER-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-FARFETCH-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-NORDSTROM-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-MATCHESFASHION-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-SAKS-FIFTH-AVENUE-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-MYTHERESA-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-SHOPBOP-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-ITALIST-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-CETTIRE-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-LUISAVIAROMA-logo.png" alt="" />
                <img src="https://cdn.modesens.com/banner/20220708-BROWNSFASHION-logo.png" alt="" />
            </div>
        </div>
    )
}

export default Header