import { Header } from "../atoms/layout/Header";
import { Footer } from "../atoms/layout/Footer";
import styled from "styled-components";

export const DefaultLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
