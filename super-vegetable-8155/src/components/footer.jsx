function Footer(){




    const foot = {
        display : "flex",
        justifyContent : "space-between",
        width : "90%",
        margin : "auto",
        padding : "30px"

    }

    const icon = {
        width : "40px"
    }
    const footer = {
        display : "flex",
        gap : "10px",
        alignItems : "center"
    }

    const main ={
    }
    
    const head = {
        textAlign : "center",
        padding : "40px",
        borderTop: "1px solid black",
        borderBottom:  "1px solid black",
        // padding : "8px",
            
    }


    return (
        <div style={main}>
            <h1 style={head}>When you follow our links to visit a brand or retailer’s website or make a purchase, ModeSens may earn a commission.</h1>
            <hr />
            <div style={foot}>
                    <div>
                        <h1>CUSTOMER CARE</h1>
                        <p>Shopper Protection</p>
                        <p>Loyalty Program</p>
                        <p>Help Center</p>
                        <p>Size Guides</p>
                        <p>Contact Us / Feedback</p>
                        <p>Shipping / Returns</p>
                    </div>
                    <div>
                        <h1>INFORMATION</h1>
                        <p>About Us</p>
                        <p>Influencer Program</p>
                        <p>Partner Stores</p>
                        <p>Sitemap</p>
                    </div>
                    <div>
                        <h1>LEGAL</h1>
                        <p>Terms Of Use</p>
                        <p>Disclosure</p>
                        <p>Privacy Policy</p>
                        <p>Community Guidelines</p>
                    </div>
                    <div>
                        <h1>CONNECT WITH US</h1>
                        <div style={footer}>
                            <img src="https://cdn.modesens.com/static/img/20220815download_ios.svg" alt="" />
                            <img src="https://cdn.modesens.com/static/img/20220815download_android.svg" alt="" />
                            <img src="https://cdn.modesens.com/static/img/20220815down_chromestrore.svg" alt="" />
                        </div>
                    </div>
                    <div>
                        <h1>NEWSLETTER SIGN UP</h1>
                        <input type="text" name="" id="" placeholder="Email Address" /><br />
                        <input type="checkbox" name="" id="" /> 
                        <label htmlFor="">Women</label>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Men</label><br />
                        <button>Submit</button>
                    </div>
                    
                    <hr />

            </div>
            <div style={foot}>
                <div style={footer}>
                    <img style={icon} src="https://cdn.modesens.com/static/img/20180905footer_logo.svg" alt="" />
                    <p>© 2022, ModeSens Inc</p>
                </div>
                <div style={footer}>
                    <img  style={icon} src="https://cdn.modesens.com/static/img/20220726Pinterest.svg" alt="" />
                    <img style={icon}  src="https://cdn.modesens.com/static/img/20220726Twitter.svg" alt="" />
                    <img  style={icon} src="https://cdn.modesens.com/static/img/20220726Ins.svg" alt="" />
                    <img style={icon}  src="https://cdn.modesens.com/static/img/20220726Facebook.svg" alt="" />
                    <img style={icon}  src="https://cdn.modesens.com/static/img/20220726Wechat.svg" alt="" />
                    <img style={icon}  src="https://cdn.modesens.com/static/img/20220726Weibo.svg" alt="" />
                    <img  style={icon} src="https://cdn.modesens.com/static/img/20220726Reddit.svg" alt="" />
                    <img style={icon}  src="https://cdn.modesens.com/static/img/20220726Discord.svg" alt="" />
                    <img  style={icon} src="https://cdn.modesens.com/static/img/20220811Xiaohongshu.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer