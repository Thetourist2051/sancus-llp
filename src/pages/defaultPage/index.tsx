import React, { useEffect } from "react";
import AppHeaderComponent from "../../components/app-header";
import LandingPageComponenet from "../../components/landing-page";
import { useLandingPageStore } from "../../store/landing-page-store";
import OverlayLoader from "../../components/overlay-loader";

const DefaultPage: React.FC = () => {
  const fetchPost = useLandingPageStore((state) => state.fetchPost);
  const blogLoading = useLandingPageStore((state) => state.blogLoading);
  const blogPost = useLandingPageStore((state)=>state.blogsPost);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  console.log('In landing aegblogPost',blogPost)

  if (blogLoading) {
    return <OverlayLoader />;
  }

  return (
    <div className="default-page" style={{ position: "relative" }}>
      <AppHeaderComponent />
      <LandingPageComponenet />
    </div>
  );
};

export default DefaultPage;
