/* -------------------------------------------------------
# TECHNOGIX
# -------------------------------------------------------
# Copyright (c) [2022] Technogix SARL
# All rights reserved
# -------------------------------------------------------
# Policy page
# -------------------------------------------------------
# Nadège LEMPERIERE, @02 february 2021
# Latest revision: 02 february 2021
# -------------------------------------------------------*/

/* React includes */
import React from 'react';
import { useIntl } from 'react-intl';

/* Material UI includes */
import { Box, Typography, Divider } from '@mui/material';

/* Website includes */
import { Page } from '../../containers';
import { Image } from '../../components';
import { useMenu, useConfig } from '../../providers';

/* Local includes */

function Status() {

    /* --------- Gather inputs --------- */
    const intl = useIntl();
    const { isDesktop } = useMenu();
    const { appConfig } = useConfig();
    const { menu } = appConfig || {};
    const { height = '115px' } = menu || {};
    //const componentName = 'Status';

    /* -------- Defining sizes --------- */
    let topString = 0;
    if (!isDesktop) { topString = height; }

    /* ----------- Define HTML --------- */
    return (
        <Page pageTitle={intl.formatMessage({ id: 'status', defaultMessage: 'Status' })}>
            <Box style={{ backgroundColor: '#ffffff', height: topString }} />
            <Box style={{ position: 'relative', top: 0 }}>
                <Image reference="status" style={{ zIndex: '0', width: '100%', objectFit: 'cover', overflow: 'hidden', textAlign: 'left', backgroundColor: '#ffffff' }} />
            </Box>
            <Box id='title'>
                <Typography variant="h1" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'footer_general_conditions', defaultMessage: '' })}
                </Typography>
            </Box>
            <Box id='edition' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_editor', defaultMessage: '' })}
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general0', defaultMessage: '' })} : </b>
                    Technogix
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general1', defaultMessage: '' })} : </b>
                    SARL
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general2', defaultMessage: '' })} : </b>
                    5000 euros (15/04/2022)
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general3', defaultMessage: '' })} : </b>
                    3 impasse Wagner - 92130 Issy les Moulineaux
                </Typography><Typography >
                    email: contact.technogix@gmail.com
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general4', defaultMessage: '' })} : </b>
                    TBD
                </Typography>
                <Typography >
                    <b>{intl.formatMessage({ id: 'status_general5', defaultMessage: '' })} : </b>
                    TBD
                </Typography>
                <Typography >
                    <b>No INPI :</b> 22 4 837 865
                </Typography>
                <Divider style={{ width:'100%' }} />
            </Box>
            <Box id='hosting' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_hosting', defaultMessage: '' })}
                </Typography>
                <Typography style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_hosting0', defaultMessage: '' })}
                </Typography>
                <Divider style={{ width:'100%' }} />
            </Box>
            <Box id='responsibility' style={{ paddingLeft:'10px', paddingRight:'10px' }}>
                <Typography variant="h2" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_responsibility', defaultMessage: '' })}
                </Typography>
                <Typography variant="h3" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_responsibility10', defaultMessage: '' })}
                </Typography>
                <Typography style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_responsibility11', defaultMessage: '' })}
                </Typography>
                <Typography variant="h3" style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_responsibility20', defaultMessage: '' })}
                </Typography>
                <Typography style={{ paddingBottom:'10px' }}>
                    {intl.formatMessage({ id: 'status_responsibility21', defaultMessage: '' })}
                </Typography>
            </Box>
        </Page>
    );

}

export default Status;
