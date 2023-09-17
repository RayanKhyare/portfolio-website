import "./footer.css";

import linkedin from "../../img/footer_linkedin.svg";
import github from "../../img/footer_github.svg";
import mail from "../../img/footer_mail.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <p className="copyright">Copyright © 2023 Rayan Khyare</p>

      <div className="socials-list">
        <a
          className="icon-footer-a"
          href="https://www.linkedin.com/in/rayankhyare/"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon-footer" src={linkedin} />
        </a>
        <a
          className="icon-footer-a"
          href="https://github.com/RayanKhyare"
          target="_blank"
          rel="noreferrer"
        >
          <img className="icon-footer" src={github} />
        </a>

        <a className="icon-footer-a" href="mailto:rayankhyare@gmail.com">
          <img className="icon-footer" src={mail} />
        </a>
      </div>
    </footer>
  );
}
