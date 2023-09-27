
import "../assets/styles/Navbar.css";
import storeLogo from "../assets/images/navbar/logo3.jpg";
import { useState } from "react";
import userImg from "../assets/images/navbar/userImg.jpg";
import Menu from "./Menu";

export default function Navbar() {

  const [show, setShow] = useState(false);
  const [loggedin, setLoggedin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section className="navbar">

    </section>
  );
}
