function Trending(){

    const trending = {
        display : "grid",
        gridTemplateColumns : "repeat(4,1fr)",
        width : "90%",
        margin : "auto",
        gap : "20px",
        marginTop : "30px",
        border : "1px solid black"
    }
    const img = {
        // objectFit : "contain",
        height : "250px",
        border : "1px solid black",
        width : "70%",


    }
    const heading = {
        textAlign : "center",
        fontSize : "30px",
        marginTop : "30px"
    
    }
    


    return (
        <div style={heading}>
            <h1>Trending Now</h1>
            <div  style={trending}>
                <div>
                    <img style={img} src="https://cdn.modesens.com/availability/50934261?w=400&" alt="" />

                </div>
                <div>
                     <img style={img} src="https://cdn.modesens.com/availability/40117155_1?w=400&" alt="" />

                </div>
                <div>
                    <img style={img} src="https://cdn.modesens.com/availability/53784355?w=400&" alt="" />

                </div>
                <div>
                    <img style={img} src="https://cdn.modesens.com/product/26503846_13?w=400&" alt="" />

                </div>
            </div>
        </div>
    )
}



export default Trending