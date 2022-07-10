import { useEffect } from "react";
import { pages } from "../pages";
import { useLocation } from "react-router-dom";

const DocTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title: subTitle } = pages.find((p) => p.path === pathname);
    if (subTitle === "Home") document.title = process.env.TITLE;
    else document.title = `${process.env.TITLE} - ${subTitle}`;
  }, [pathname]);
  return <></>;
};

export default DocTitle;
