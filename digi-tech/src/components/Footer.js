import React from "react";
import "./Footer.css";
import {FaFacebookF} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGooglePlusG} from 'react-icons/fa'
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      {" "}
      <footer>
        <div class="footer-content">
          <h3>DiGi-Tech</h3>
          <p>
            Welcome to DiGi-Tech. Online Computer store in Pakistan. Buy
            Dell, Lenovo, HP, Acer laptops at the best prices in Pakistan.
          </p>
          <ul class="socials">
            <li>
              <Link href="#">
                <FaFacebookF/>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaTwitter/>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaInstagram/>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaLinkedinIn/>
              </Link>
            </li>
            <li>
              <Link href="#">
                <FaGooglePlusG/>
              </Link>
            </li>
          </ul>
        </div>
        <div class="footer-bottom">
          <p>
            copyright &copy; <Link href="#">Digi Technologies</Link>{" "}
          </p>
          <div class="footer-menu">
            <ul class="f-menu">
              <li>
                <Link href="">Home</Link>
              </li>
              <li>
                <Link href="">About</Link>
              </li>
              <li>
                <Link href="">Contact</Link>
              </li>
              <li>
                <Link href="">Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
