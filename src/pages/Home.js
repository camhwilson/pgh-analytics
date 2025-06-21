import { Grid, Paper, Typography } from "@mui/material";


export default function Home() {
    return (
        <Grid container padding={3}>
            <Grid item size={12}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Home Page
                </Typography>
            </Grid>
            <Paper>
            Map Tile Here
            </Paper>
        </Grid>

    );
}