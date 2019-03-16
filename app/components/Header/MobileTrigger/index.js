/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import compose from 'recompose/compose';
import onClickOutside from 'react-onclickoutside';

import styles from './styles';

type PropsFlowType = {
  handleCloseMenu: () => void,
  isOpen: boolean,
};

class MobileTrigger extends React.Component<PropsFlowType> {
  handleClickOutside() {
    const { handleCloseMenu, isOpen } = this.props;

    if (isOpen) {
      handleCloseMenu();
    }
  }

  render(): React.Node {
    const { handleCloseMenu, isOpen } = this.props;

    return (
      <React.Fragment>
        <style jsx>{styles}</style>

        <button
          className={`hamburger ${isOpen ? 'is-active' : ''}`}
          onClick={handleCloseMenu}
          type="button"
        >
          <span className="hamburger-box">
            <span className="hamburger-inner" />
          </span>
        </button>
      </React.Fragment>
    );
  }
}

const enhance = compose(onClickOutside);

export default enhance(MobileTrigger);
