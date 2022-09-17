import { NavLink as NavLinkPersonalizate } from 'react-router-dom';

export const NavLink = ({ to, children, ...props }) => {
	return (
		<NavLinkPersonalizate {...props} to={to}>
			{children}
		</NavLinkPersonalizate>
	);
};
