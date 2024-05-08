// const App = () => {
//   return (
//     <div className="bg-blue-300 rounded-md hover:bg-red-400 md:bg-red-100 text-4xl">
//       Hello React and Tailwind2!
//     </div>
//   );
// };

// export default App;

// VITE가이드 보고 시작하면 됨
//https://vitejs.dev/guide/

const App = () => {
  return (
    <div className="bg-red-100 min-h-screen max-w-screen-md mx-auto flex flex-col">
      <header className="bg-blue-100 px-2 py-4 flex justify-between">
        <div className="bg-purple-100">로고</div>
        <nav className="hidden md:flex gap-4">
          <button className="button-style">메뉴1</button>
          <button className="button-style">메뉴2</button>
          <button className="button-style">로그인</button>
        </nav>
        <button className="button-style flex md:hidden">...</button>
      </header>
      <section className="bg-green-100 grow px-2">
        <ul className="bg-red-100 mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-items-center gap-4">
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
          <li className="bg-blue-100 w-44 h-60">card</li>
        </ul>
      </section>
      <footer className="bg-yellow-100 px-2">footer</footer>
    </div>
  );
};

export default App;
