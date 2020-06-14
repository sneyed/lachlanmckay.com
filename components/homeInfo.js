import { codeFont } from "../config";
import Nav from "./layout/nav";

export default () => {
  const headingStyle = {
    margin: 0,
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 4,
  };

  const subtitleStyle = {
    margin: 0,
    fontSize: 20,
    fontWeight: "normal",
  };

  const taglineStyle = {
    fontSize: 18,
  };

  const pointsStyle = {
    textAlign: "left",
    fontFamily: codeFont,
    padding: 0,
    marginBottom: 16,
  };

  return (
    <>
      <h1 style={headingStyle}>Lachlan McKay</h1>
      <h2 style={subtitleStyle}>Software Engineer</h2>
      <p style={taglineStyle}>
        I love creative digital media that is intelligently designed under the
        hood
      </p>
      <ul style={pointsStyle}>
        <li>4 years professional experience</li>
        <li>Financial services, academic and creative industries</li>
        <li>Strong passion for visual & creative digital media</li>
      </ul>
      <Nav borders={false} />
    </>
  );
};
