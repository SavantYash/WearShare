import React, { useEffect, useState } from 'react';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Typography,
    Grid,
    Paper,
    Button,
} from '@mui/material';
import axios from 'axios';

const ProfileView = () => {

    const [data, setdata] = useState({})

    const getUser = async () => {
        const res = await axios.get("/getProfileById/" + localStorage.getItem('id'))
        setdata(res.data.data)
        console.log(data)
    }

    useEffect(() => {
        getUser()
    }, [])


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: 'calc(100vh - 60px)',
                padding: 2,
                width: '100vw'
            }}
        >
            <Card
                sx={{
                    width: '100%',
                    maxWidth: 400,
                    borderRadius: 4,
                    boxShadow: 4,
                }}
            >
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Avatar
                            alt="John Doe"
                            src={data.imageURL}
                            sx={{ width: 100, height: 100, mb: 2 }}
                        />
                        <Typography variant="h5" fontWeight={600}>
                            {data.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data.email}
                        </Typography>
                    </Box>

                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={12}>
                            <Paper elevation={0} sx={{ p: 1.5 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Phone Number
                                </Typography>
                                <Typography variant="body1">+91 {data.number}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper elevation={0} sx={{ p: 1.5 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Address
                                </Typography>
                                <Typography variant="body1">
                                    {data.address}
                                </Typography>
                            </Paper>
                        </Grid>
                        {data.registrationNumber ? <Grid item xs={12}>
                            <Paper elevation={0} sx={{ p: 1.5 }}>
                                <Typography variant="subtitle2" color="text.secondary">
                                    Registration no.
                                </Typography>
                                <Typography variant="body1">
                                    {data.registrationNumber}
                                </Typography>
                            </Paper>
                        </Grid> : ""}
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ mt: 2, borderRadius: 2, px: 4 }}
                            onClick={() => console.log('Update button clicked')}
                        >
                            Update
                        </Button>

                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ProfileView;
