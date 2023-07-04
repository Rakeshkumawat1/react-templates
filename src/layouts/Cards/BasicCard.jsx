import React from 'react';
import {
    Button, Typography,
    Card, CardContent, CardMedia, CardActionArea, CardActions
} from '@mui/material';

export default function BasicCard({ url }) {
    return (
        <Card sx={{ 
            maxWidth: 345,
            boxShadow:'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
            borderRadius: '10px',
            '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px'
            }
             }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={url}
                    alt="Card"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
            </CardActions>
        </Card>
    )
}
