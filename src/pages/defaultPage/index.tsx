import React from "react";
import AppHeaderComponent from "../../components/app-header";
import LandingPageComponenet from "../../components/landing-page";

type Props = {};

const DefaultPage: React.FC<Props> = () => {
  return (
    <>
      <div className="default-page" style={{ position: "relative" }}>
        <AppHeaderComponent />
        <LandingPageComponenet />
      </div>
    </>
  );
};

export default DefaultPage;
