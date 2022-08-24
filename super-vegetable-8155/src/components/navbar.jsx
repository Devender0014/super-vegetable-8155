function Navbar(){
    const style = {
        width : "50rem",
        // border : "1px solid black",
        color : "white",
        height : "2rem",
        margin : "auto",
        // marginTop : "-15px"
        

    }

    const style1 = {
        backgroundColor : "black",
        border : "1px solid black",
        height : "2rem",
        padding : "5px"
        
    }

    return (
        <div style={style1}>
            <div style={style}>
                 <p>Discover a world of shopping possibilities with ModeSens. Compare prices across 500+ stores.  Join now</p>
            </div>
        </div>
    )
}


export default Navbar