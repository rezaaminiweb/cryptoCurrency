'use client'
import { AppBar, Container, MenuItem, Select, Toolbar, Typography, makeStyles } from "@material-ui/core"


const useStyles = makeStyles(() => ({
    title:{
        flex:1,
        color:"gold",
        fontFamily:"snapFoodBlack",
        fontWeight:"bold",
        cursor:"pointer"
    }
    
    
}));

const Header = () => {
    const classes = useStyles();
    return (
        <AppBar style={{backgroundColor:"#00000098"}} position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title} variant="h3">
                ارزدیجیتال 
                    </Typography>
                    <Select variant="outlined"
                    style={{
                        width:100,
                        height:40,
                        marginLeft:15
                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
