'use client'
import { CryptoState } from "@/app/context/CryptoContext";
import { AppBar, Container, MenuItem, Select, ThemeProvider, Toolbar, Typography, createTheme, makeStyles } from "@material-ui/core"
import { useRouter } from "next/navigation";

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
    const router = useRouter()
    const classes = useStyles();
   const {currency , setCurrency}= CryptoState()
    const darkteme = createTheme({
        palette:{
            primary:{
                main:"#fff"
            },
            type:"dark"
        }
    })
    return (
        <ThemeProvider theme={darkteme}>
        <AppBar style={{backgroundColor:"#00000098"}} position="static">
            <Container>
                <Toolbar>
                    <Typography
                     onClick={router.push('/')}
                      className={classes.title}
                       variant="h5">
                ارزدیجیتال 
                    </Typography>
                    <Select
                    value={currency}
                    onChange={(e)=>setCurrency(e.target.value)} 
                    variant="outlined"
                    style={{
                        width:100,
                        height:40,
                        marginRight:15
                    }}>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"INR"}>INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
        </ThemeProvider>
    );
};

export default Header;
