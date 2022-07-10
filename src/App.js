import { useEffect } from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";
import { pages } from "./pages";
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";

export default function App() {
  const location = useLocation();
  const params = useParams();

  const title = process.env.TITLE;
  console.log(location, params);
  console.log(title);

  //   useEffect(() => {
  //     const { title: subTitle } = pages.find((p) => p.path === pathname);
  //     if (subTitle === "Home") document.title = title;
  //     else document.title = title + " - " + subTitle;
  //   }, [pathname]);

  return (
    <>
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
