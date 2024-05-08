import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
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
