function Trending(){

    const trending = {
        display : "grid",
        gridTemplateColumns : "repeat(4,1fr)",
        width : "90%",
        margin : "auto",
        gap : "20px",
        marginTop : "30px",
        // border : "1px solid black",
        justifyContent : "space-between",
        fontSize : "15px",
        padding : "10px"
    }
    const img = {
        objectFit : "contain",
        height : "250px",
        // border : "1px solid black",
        width : "100%",


    }
    const heading = {
        textAlign : "center",
        fontSize : "30px",
        marginTop : "30px"
    
    }
    const div ={
        // border : "1px solid black",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        padding : "10px"

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
    const head = {
        borderTop: "1px solid black",
        borderBottom:  "1px solid black",
        padding : "8px",
        
    }

    return (
        <div style={heading}>
            <h1 style={head}>Trending Now</h1>
            <div  style={trending}>
                <div style={div}>
                    <img style={img} src="https://cdn.modesens.com/availability/50934261?w=400&" alt="" />
                    <h3><b>BURBERRY</b></h3>
                    <p>Ansdell Logo-print Cotton-jersey Hoodie In Black</p>
                    <p>$505 - $840</p>
                    <p>compare 25 stores</p>

                </div>
                <div style={div}>
                     <img style={img} src="https://cdn.modesens.com/availability/40117155_1?w=400&" alt="" />
                     <h3><b>GIVENCHY</b></h3>
                    <p>Logo-embroidered Cotton-twill Baseball Cap In Black</p>
                    <p>$305 - $480</p>
                    <p>compare 21 stores</p>

                </div>
                <div style={div}>
                    <img style={img} src="https://cdn.modesens.com/availability/53784355?w=400&" alt="" />
                    <h3><b>VERSACE</b></h3>
                    <p>Odissea Medusa Head Lace-up Sneakers In Black</p>
                    <p>$518 - $925</p>
                    <p>compare 25 stores</p>

                </div>
                <div style={div}>
                    <img style={img} src="https://cdn.modesens.com/product/26503846_13?w=400&" alt="" />
                    <h3><b>GIVENCHY</b></h3>
                    <p>Logo-intarsia Waffle-knit Cotton Sweater In Black</p>
                    <p>$664 - $1220</p>
                    <p>Shop From 19 Stores</p>

                </div>
            </div>
            <button style={button}>More</button>
        </div>
    )
}



export default Trending