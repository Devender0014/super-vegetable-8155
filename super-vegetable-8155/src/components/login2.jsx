import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    // Box,
    Button,
    useDisclosure,
    // Lorem
  } from '@chakra-ui/react'
  import React from 'react'






function Login2() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = React.useState('md')
  
    const handleSizeClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }
    const icon = {
        width : "25px",
        objectFit: "contain"
    }

    const main = {
        display : "flex",
        height : "500px",
        width : "500px",
        alignSelf : "center",
        justifyContent : "space-between",
        textAlign : "center",
        fontSize : "20px"
    }
    // const container = {
    //     width : "100%",
    //     height : "100%",
    //     backgroundColor : "black"
    // }
    
    const input = {
        border : "1px solid black",
        marginTop : "20px"
    }
    const label = {
        fontSize : "10px",
        padding : "5px"
        // display : "flex",
        // alignSelf : "center",
        // justifyContent : "center"
    }

    const signUp = {
        border : "1px solid black",
        backgroundColor : "black",
        color : "white",
        width : "250px",
        textAlign : "center",
        margin : "auto"
    }

    const main2 = {
        // marginLeft : "20px"
    }
    const googleicons = {
        display : "flex",
        justifyContent : "space-between"
        
    }

    const image = {
        width : "500px",
        height : "100%"
    }
    const sizes = ['xl']
  
    return (
      <>
        {sizes.map((size) => (
          <Button
            onClick={() => handleSizeClick(size)}
            key={size}
            m={4}
          > <img style={icon} src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" /></Button>
        ))}
  
        <Modal onClose={onClose} size={size} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
                    <div style={main}>
                        <div>
                            <img style={image} src="https://www.telavivcouture.com/wp-content/uploads/2020/01/oZ1T2GFO-e1579565840324.jpg" alt="" />
                        </div>
                        <div>
                            <div style={main2}>
                                <p>Compare across 500+ stores to find the best price.</p>
                                <input style={input} type="email" name="" id="" placeholder='Email'/>
                                <input style={input} type="password" name="subscribe" id="" placeholder='Password'/>
                                <br />
                                <input type="checkbox" name="" value=""></input>
                                <label style={label} for = "subscribe">Subscribe to personalized sale updates and offers</label>
                            </div>
                            <button style={signUp}>Log in</button>
                            <p>or</p><hr />
                            <div style={googleicons}>
                                <img src="https://modesens.com/static/img/login-icon/20210617google.svg" alt="" />
                                <img src="https://modesens.com/static/img/login-icon/20210617facebook.svg" alt="" />
                                <img src="https://modesens.com/static/img/login-icon/20210617apple.svg" alt="" />
                                <img src="https://modesens.com/static/img/login-icon/20210617wechat.svg" alt="" />
                            </div>
                            <p><u style={label}>Don't have an account? Please Sign up</u></p>
                        </div>
                        
                    </div>
                
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              {/* <Lorem count={2} /> */}
            </ModalBody>
            <ModalFooter>
              {/* <Button onClick={onClose}>Close</Button> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

  export default Login2