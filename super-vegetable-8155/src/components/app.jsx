function DownloadApp(){
    
    const app = {
        display : "flex",
        // width : "90%",
        marginTop : "140px",
        // gap : "30px",
        justifyContent : "space-around",
        textAlign : "center",
        backgroundColor : "#f8f7f6",
        padding : "50px",
        alignItem : "center",
        fontSize : "15px"

    }

    const btn = {
        backgroundColor : "black",
        color : "white",
        padding : "10px",
        marginTop : "20px",
        marginBottom : "20px"
    }

    const img = {
        height : "400px",
        width : "400px",
        objectFit : "contain",
        // border : "1px solid black",
        alignItem : "center",
        justifyContent : "center",

    }

    const head = {
        fontSize : "20px"
    }

    return (
        <div style={app}>
            <div>
                <h1 style={head}><b>Download the Modsens App</b></h1>
                <h3><b>A seamless experience that takes your style to the next level.</b> </h3>
                <button style={btn}>DOWNLOAD NOW</button>
                <img style={img} src="https://cdn.modesens.com/static/img/20220707appdownload_en.png" alt="" />
            </div>
            <div>
                <h1 style={head}><b> Install the ModeSens Browser Extension</b></h1>
                <p><b>Get timely, accurate product information every time you browse.</b></p>
                <button style={btn}>INSTALL NOW</button>
                <img style={img} src="https://cdn.modesens.com/static/img/20211109downloadright.png" alt="" />
            </div>
        </div>
    )
}


export default DownloadApp