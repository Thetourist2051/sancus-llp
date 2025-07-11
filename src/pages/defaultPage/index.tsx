import React from "react";
import AppHeaderComponent from "../../components/app-header";
import LandingPageComponenet from "../../components/landing-page";
import ScrollToTopButton from "../../components/scroll-to-top";

type Props = {};

const DefaultPage: React.FC<Props> = () => {
  return (
    <>
      <div className="default-page">
        <AppHeaderComponent />
        <LandingPageComponenet />
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default DefaultPage;
