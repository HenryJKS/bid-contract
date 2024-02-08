import React from "react";
import { Container, Image } from "semantic-ui-react"
import Navbar from "./Navbar";
import Head from "next/head";

const backgroundImageStyle = {
    backgroundImage: "url(https://img.freepik.com/free-photo/close-up-colorful-smoky-abstract_53876-148112.jpg?w=1060&t=st=1707399740~exp=1707400340~hmac=aacdffe4aaf131d3fe0fe79ffda72e21d7e3115be7be719f109bf0cc4d561a87)",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
}

const defaultContainer = (props) => {
    return (
        <Container fluid={true} style={backgroundImageStyle}>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                ></link>
            </Head>
            <Navbar/>
            {props.children}
        </Container>
    );
};

export default defaultContainer;