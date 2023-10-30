import './Header.css';
import logoSvg from '../../images/logo.svg';

interface HeaderNavLinksInterface {
  href: string,
  title: string,
}

const headerNavLinks: HeaderNavLinksInterface[] = [
  {
    href: '/welcome',
    title: 'welcome',
  },
  {
    href: '/new',
    title: 'new',
  },
  {
    href: '/threads',
    title: 'threads',
  },
  {
    href: '/past',
    title: 'past',
  },
  {
    href: '/comments',
    title: 'comments',
  },
  {
    href: '/ask',
    title: 'ask',
  },
  {
    href: '/show',
    title: 'show',
  },
  {
    href: '/jobs',
    title: 'jobs',
  },
  {
    href: '/submit',
    title: 'submit',
  }
];

const Header = () => {
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
            headerNavLinks.map((headerNavLink: HeaderNavLinksInterface, index: number) => {
              return (
                <li key={index}>
                  <a
                    href={headerNavLink.href}
                    title={"go to " + headerNavLink.title}
                  >{headerNavLink.title}</a>
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
