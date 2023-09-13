
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Card, Container } from 'react-bootstrap'
import Typography from '@mui/material/Typography';

import { TbCircle1, TbCircle2, TbCircle3, TbCircleCheck, TbCirclePlus } from 'react-icons/tb'
import { BsArrowRightSquareFill } from 'react-icons/bs'
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const CheckoutTimeline = ({ url }) => {

    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    //-> Highlights the color of the current page's breadcrumb

    const customStyles = (breadCrumbLink) => {
        return (breadCrumbLink !== url
            ? {
                width: '100%',
                height: '90px',
                color: "#EEEEEE"
            }
            : {
                width: '100%',
                height: '90px'
            });
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    return (
        <div role="presentation" >
            <Breadcrumbs separator={<BsArrowRightSquareFill />} aria-label="breadcrumb" >

                <Link underline="hover" color="inherit" href="/" className='breadcrumb-link'>
                    <Container style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100px",
                    }}>
                        <TbCirclePlus style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                        <Typography style={{
                            width: "90%",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>CART</Typography>
                    </Container>
                </Link>

                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <Container style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100px",
                    }}>
                        <TbCircle1 style={customStyles('/information')} />
                        <Typography style={{
                            width: "100%",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>INFORMATION</Typography>
                    </Container>
                </Link>

                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <Container style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100px"
                    }}>
                        <TbCircle2 style={customStyles('/shipping')} />
                        <Typography style={{
                            width: "100%",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>SHIPPING</Typography>
                    </Container>
                </Link>

                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <Container style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100px"
                    }}>
                        <TbCircle3 style={customStyles('/payment')} />
                        <Typography style={{
                            width: "100%",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>PAYMENT</Typography>
                    </Container>
                </Link>
                <Link
                    underline="hover"
                    color="inherit"
                    href="/material-ui/getting-started/installation/"
                >
                    <Container style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: "100px"
                    }}>
                        <TbCircleCheck style={{ width: "100%", height: "90px", color: "#EEEEEE" }} />
                        <Typography style={{
                            width: "100%",
                            fontSize: "10px",
                            textAlign: "center"
                        }}>COMPLETE</Typography>
                    </Container>
                </Link>
            </Breadcrumbs>
        </div >
    )
}

export default CheckoutTimeline;