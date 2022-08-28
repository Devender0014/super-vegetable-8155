function Header3 (){

    const heading = {
        textAlign : "center",
        fontSize : "30px",
        marginTop : "30px"
    
    }
    
    const imageBrand = {
        display : "grid",
        gridTemplateColumns : "repeat(3,1fr)",
        width : "95%",
        margin : "auto",
        gap : "10px",
        marginTop : "30px",
        // border : "1px solid black"
    }
    const img = {
        height : "500px",
        // border : "1px solid black",
        width : "100%"


    }

    const button = {
        border : "1px solid black",
        // backgroundColor : "black",
        fontSize : "20px",
        // color : "white",
        width : "150px",
        textAlign : "center",
        margin : "auto",
        marginTop : "10px"
    }
    const border = {
        // border : "1px solid black",

    }
    const head = {
        borderTop: "1px solid black",
        borderBottom:  "1px solid black",
        padding : "8px",
        
    }

    return (
        <div style={heading}>
            <h2 style={head}>Speial Offers</h2>
            <div style={imageBrand}>
                <div style={border}> 
                    <img style={img} src="https://modesens.com/banner/11916/getimg/?img=%2Fbanner%2F20220803-modesens-Sale-280x400-EN.jpg" alt="" />
                    <button style={button}>Read Now</button>
                </div>
                <div style={border}>
                    <img style={img} src="https://res.cloudinary.com/ssenseweb/image/upload/w_480,q_90,f_auto,dpr_auto/v1659020673/pp4mvqasaupu8cafzxik.jpg" alt="" />
                    <h2>AMI Means Friend</h2>
                    <button style={button}>Read Now</button>
                </div>
                <div style={border}>
                    <img style={img} src="https://modesens.com/banner/13145/getimg/?img=%2Fbanner%2F20220818-modesens-Gucci-280x400-M-EN.jpg" alt="" />
                    <button style={button}>Read Now</button>
                </div>

            </div>
            <button style={button}>View More</button>
        </div>
    )
}

export default Header3