// const App = () => {
//   return (
//     <div className="bg-blue-300 rounded-md hover:bg-red-400 md:bg-red-100 text-4xl">
//       Hello React and Tailwind2!
//     </div>
//   );
// };

import Footer from "./components/Footer";
import Header from "./components/Header_";
import Section from "./components/Section";

// export default App;

// VITE가이드 보고 시작하면 됨
//https://vitejs.dev/guide/

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      {/*헤더*/}
      <Header />

      {/*섹션*/}
      <Section />

      <Footer />
    </div>
  );
};

export default App;
