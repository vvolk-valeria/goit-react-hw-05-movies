import { Box } from '../Box';
import { Header,LinkItem } from "./AppBar.styled";

const navItems = [
  { href: '/', text: 'Home'},
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
 
        <Header>
           
            <Box as="nav" display="flex" p={3}>
                {navItems.map(({ href,text })=>(<LinkItem to={href} key={href}> {text }</LinkItem>))}
            </Box>
        </Header>
    );
};