import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
const CustomLink = ({ children, to, ...props }) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
        <div>
            <Link
                style={{ color: match ? "#ff3030" : "black" , borderBottom: match ? "2px solid #FF6666": "none", paddingBottom:match ? '5px': '', transition:match ? ' all .1s ease-in': "none"}}
                to={to}
                {...props}
            >
                {children}
            </Link>

        </div>
    );
};

export default CustomLink;