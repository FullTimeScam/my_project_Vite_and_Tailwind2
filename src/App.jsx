import Footer from "./components/Footer";
import Header from "./components/Header_";
import Section from "./components/Section";
const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      {/*헤더*/}
      <Header />

      {/*섹션*/}
      <Section />

      {/*푸터*/}
      <Footer />
    </div>
  );
};

export default App;
