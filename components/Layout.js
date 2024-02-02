import React from "react";
import { Container } from "semantic-ui-react"
import Navbar from "./Navbar";
import Head from "next/head";

const defaultContainer = (props) => {
    return (
        <Container fluid={false}>
            <Head>
                <link
                    rel="stylesheet"
                    href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"
                ></link>
            </Head>
            <Navbar />
            {props.children}
        </Container>
    );
};

export default defaultContainer;