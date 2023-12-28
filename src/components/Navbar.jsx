
import {AppBar,Toolbar,styled} from '@mui/material';
const Header=styled(AppBar)`
    background: #111111;
`;
const Tabs=styled('p')`
font-size:20px;
margin-right:20px;
`
const Navbar=()=>{
    return (
       <Header>
        <Toolbar>
          <Tabs> Code for interview</Tabs>
          <Tabs>All Userd</Tabs>
          <Tabs>Add User</Tabs>
        </Toolbar>
        </Header>

    )
}
export default Navbar;