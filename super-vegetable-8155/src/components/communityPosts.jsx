function CommunityPost(){


    const main = {
        display : "grid",
        gridTemplateColumns : "repeat(4,1fr)",
        gap : "40px",
        width : "90%",
        margin : "auto",
        marginTop : "40px",

        
    }
    
    const img = {
        height : "400px"

    }
    const heading = {
        textAlign : "center",
        fontSize : "30px",
        marginTop : "80px"
    
    }

    const button = {
        border : "1px solid black",
        // backgroundColor : "black",
        fontSize : "20px",
        // color : "white",
        width : "150px",
        textAlign : "center",
        margin : "auto",
        marginTop : "30px"
    }

    return (
        <div style={heading}>
                <h1>Community Posts</h1>
                <div style={main}>
                    <div>
                        <img style={img} src="https://cdn.modesens.com/umedia/1625472s?w=400&" alt="" />
                    </div>
                    <div>
                        <img style={img} src="https://cdn.modesens.com/umedia/1624922s?w=400&" alt="" />
                    </div>
                    <div>
                        <img style={img} src="https://cdn.modesens.com/umedia/1593167s?w=400&" alt="" />
                    </div>
                    <div>
                        <img style={img} src="https://cdn.modesens.com/umedia/14180s?w=400&" alt="" />
                    </div>
                </div>
                <button style={button}>View All</button>
        </div>
    )
}

export default CommunityPost