/**
 * @flow
 * @prettier
 */

/* global document, window */

import * as React from 'react';
import { animateScroll } from 'react-scroll';
import GiftIcon from 'mdi-material-ui/Gift';
import HotelIcon from 'mdi-material-ui/Hotel';
import Paper from '@material-ui/core/Paper';

import Link from '../Link';
import ROUTES from '../../constants/routes';

import { activeLinkStyles, linkStyles } from './NavItem/styles';
import MobileMenu from './MobileMenu';
import MobileTrigger from './MobileTrigger';
import NavItem from './NavItem';
import styles from './styles';

type PropsFlowType = {
  activeRoute: string,
};

type StateFlowType = {
  hamburgerIsOpen: boolean,
};

class Header extends React.Component<PropsFlowType, StateFlowType> {
  props: PropsFlowType;

  state: StateFlowType = {
    hamburgerIsOpen: false,
  };

  constructor(props: PropsFlowType) {
    super(props);

    // eslint-disable-next-line immutable/no-mutation
    this._handleScroll = this._handleScroll.bind(this);
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', this._handleScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('scroll', this._handleScroll);
    }
  }

  _handleScroll() {
    const { hamburgerIsOpen } = this.state;

    if (hamburgerIsOpen) {
      this._toggleHamburger();
    }
  }

  _toggleHamburger() {
    const { hamburgerIsOpen } = this.state;

    const scrollDistance =
      window.pageYOffset || document.documentElement.scrollTop;

    if (!hamburgerIsOpen) {
      animateScroll.scrollToTop({
        duration: 500,
        smooth: 'easeInOutQuint',
      });
      setTimeout(
        () => {
          this.setState({
            hamburgerIsOpen: !hamburgerIsOpen,
          });
        },
        scrollDistance > 0 ? 750 : 0,
      );
    } else {
      this.setState({
        hamburgerIsOpen: !hamburgerIsOpen,
      });
    }
  }

  render(): React.Node {
    const { activeRoute } = this.props;

    const { hamburgerIsOpen } = this.state;

    const leftNavLinks = [
      {
        Icon: HotelIcon,
        id: 'accomodations',
        isActiveRoute: activeRoute === ROUTES.ACCOMODATIONS,
        route: ROUTES.ACCOMODATIONS,
        title: 'Hotel Accomodations',
      },
    ];

    const rightNavLinks = [
      {
        Icon: GiftIcon,
        id: 'registry',
        isActiveRoute: activeRoute === ROUTES.REGISTRY,
        // route: ROUTES.REGISTRY,
        route: 'https://www.michelleandjon.love/registry',
        title: 'Wedding Registry',
      },
    ];

    const mobileNavLinks = [...leftNavLinks, ...rightNavLinks];

    return (
      <>
        <style jsx>{styles}</style>

        <div className="container">
          <Paper square>
            <header className="headerContainer">
              <div className="sectionsContainer">
                <div className="section left">
                  <nav>
                    <ul>
                      {leftNavLinks.map(
                        (navItem): React.Node => (
                          <li
                            className={`navItem ${navItem.id}`}
                            key={navItem.id}
                          >
                            <NavItem {...navItem} />
                          </li>
                        ),
                      )}
                    </ul>
                  </nav>

                  <MobileTrigger
                    handleCloseMenu={(): void => this._toggleHamburger()}
                    isOpen={hamburgerIsOpen}
                  />
                </div>

                <div className="section center">
                  <Link
                    style={{
                      ...linkStyles,
                      ...(activeRoute === ROUTES.HOME ? activeLinkStyles : {}),
                      display: 'flex',
                    }}
                    to={ROUTES.HOME}
                  >
                    <img
                      alt="Michelle Lombarski & Jonathan Cursi's Wedding Website"
                      className="logo"
                      src="/static/img/logo.png"
                    />
                  </Link>
                </div>

                <div className="section right">
                  <nav>
                    <ul>
                      {rightNavLinks.map(
                        (navItem): React.Node => (
                          <li
                            className={`navItem ${navItem.id}`}
                            key={navItem.id}
                          >
                            <NavItem {...navItem} />
                          </li>
                        ),
                      )}
                    </ul>
                  </nav>
                </div>
              </div>
            </header>
          </Paper>

          <MobileMenu
            handleCloseMenu={(): void => this._toggleHamburger()}
            isOpen={hamburgerIsOpen}
            mobileNavLinks={mobileNavLinks}
          />
        </div>
      </>
    );
  }
}

export default Header;
