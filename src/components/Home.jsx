import AsideContent from "./AsideContent";
import MainContent from "./MainContent";
import MainContentSocials from "./MainContentSocials";
import MainContentStudies from "./MainContentStudies";

function Home() {
  return (
    <>
      <div className="container-content urbanist-font-text">
        <MainContent />
        <AsideContent />
      </div>
      <MainContentStudies />

      <MainContentSocials />
    </>
  );
}

export default Home;
