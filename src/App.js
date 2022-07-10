import { Routes, Route } from "react-router-dom";
import DocTitle from "./Utils/Doctitle";
import { pages } from "./pages";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

export default function App() {
  return (
    <>
      <DocTitle />
      <Header />
      <Main>
        <Routes>
          {pages.map((p) => (
            <Route key={p.id} path={p.path} title={p.title} element={p.comp} />
          ))}
        </Routes>
      </Main>
      <Footer />
    </>
  );
}
