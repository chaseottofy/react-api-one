import './Header.css';
import logoSvg from '../../images/logo.svg';


const Header = () => {
  const headerNavLinks: string[] = ['welcome', 'new', 'threads', 'past', 'comments', 'ask', 'show', 'jobs', 'submit'];
  
  return (
    <header className="header">
      <div className="header-col header-logo--wrapper">
        <a href="/" title="logo">
          <img className="header-logo" src={logoSvg} alt="logo" />
        </a>
      </div>

      <span>&nbsp;</span>

      <div className="header-col--two">
        <div className="header-title">
          <h1>Hacker News&nbsp;&nbsp;</h1>
        </div>
        <ul className="header-list">
          {
            headerNavLinks.map((headerNavLink: string, index: number) => {
              return (
                <li key={index}>
                  <a
                    href='#'
                    title={"go to " + headerNavLink}
                  >{headerNavLink}</a>
                  {index !== headerNavLinks.length - 1 && ' |' + '\u00A0'}
                </li>
              );
            })
          }
        </ul>
      </div>
      <div className="header-col"><a href="#">login</a></div>
    </header>
  );
};

export default Header;
