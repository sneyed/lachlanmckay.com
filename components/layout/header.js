import Nav from "./nav";
import Logo from "./logo";

const Header = () => {
  const headerStyle = {
    minWidth: 300,
    top: 0,
    left: 16,
    right: 16,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 8,
    paddingBottom: 8,
    pointerEvents: "none",
    zIndex: 1,
  };

  return (
    <div id="header" style={headerStyle}>
      <Logo />
      <Nav />
    </div>
  );
};

export default Header;
