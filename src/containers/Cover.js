import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import "./Cover.css";

export default class Cover extends React.Component {
  render() {
    return (
      <div className="text-center">
        <div className="cover-container d-flex h-100 p-3 mx-auto flex-column">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    );
  }
}
