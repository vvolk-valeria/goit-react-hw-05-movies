import { Box } from './Box';
import { NavLink } from 'react-router-dom';

const navItems = [
  { href: '/', text: 'Home'},
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
    return (
        // <Box as="header"  >
        <Box as="header" p={4} height="60px" borderBottom="1px solid black">
            {/* <Box as="nav" display="flex" flexDirection="column"> */}
            <Box as="nav" display="flex" >
                {navItems.map(({ href,text })=>(<NavLink to={href} key={href}> {text }</NavLink>))}
            </Box>
        </Box>
    );
};