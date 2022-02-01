import { WelcomeButtons } from "./WelcomeButtons";

import "./style.css";

const WelcomePage = () => {
  return (
    <div className="welcomeWrapper">
      <h2 className="welcomeHeader mt-3">Welcome to the basic login page</h2>
      <p className="text-left headerText mt-5">
        This is a demo login app build using ReactJs and NodeJs.
        <br />
        <br />
        The app does not have any database thus to add users,
        <br /> an array of object is created on the backend side(NodeJs).
      </p>
      <WelcomeButtons />
    </div>
  );
};

export default WelcomePage;
