import './index.css';

const Footer = () => (
  <footer className="footer">
    Crafted by yours truly
    <span className="footer__date">{` © ${new Date().getFullYear()} C Pallavi.`}</span>
  </footer>
);

export default Footer;
