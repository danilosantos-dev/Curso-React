import { FaGithub, FaInstagram, FaLinkedin  } from "react-icons/fa";



import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li>
          <a href="https://github.com/danilosantos-dev" target="blank"><FaGithub/></a>           
        </li>

        <li>
        <a href="https://www.instagram.com/danilosantos_z/" target="blank"><FaInstagram /></a>
        </li>

        <li>
        <a href="https://www.linkedin.com/in/danilo-santos-15704122a/" target="blank"><FaLinkedin /></a>
        </li>
      </ul>
      <p>
        <span>Costs</span> &copy; 2022
      </p>
    </footer>
  );
}

export default Footer;
