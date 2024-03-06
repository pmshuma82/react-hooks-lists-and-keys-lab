const NavBar = () => {
  const links = ["home", "about", "projects"];
  return (
    <nav>
      {links.map((link, index) => (
        <a key={index} href={`#${link}`}>{link}</a>
      ))}
    </nav>
  );
};
