function Navigation() {
    // const links = [<li>/</li>, <li>about us</li>, <li>stuff</li>];
    const links = ["/", "/about-us", "/stuff" ];
    const asLi = links.map((link) => <li>{link}</li>);
    return (<nav>{asLi}</nav>);
}

export default Navigation;