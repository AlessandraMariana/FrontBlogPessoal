import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { Typography,Box,Grid } from '@material-ui/core';
import './Footer.css'

function Footer(){
    return(
        <>
         <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12}>
                    <Box className='box1'>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Encontre-me também nas redes sociais </Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/AlessandraMariana" target="_blank">
                                <GitHubIcon className='redes' />
                            </a>
            
                            <a href="https://www.linkedin.com/in/alessandramariana/" target="_blank">
                                <LinkedInIcon className='redes' />
                            </a>
                        </Box>
                    </Box>
                    <Box className='box2'>
                        <Box paddingTop={1}>
                            <Typography variant="subtitle2" align="center" gutterBottom className='textos' >© 2023 Desenvolvido por Alessandra Mariana</Typography>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )

}

export default Footer;