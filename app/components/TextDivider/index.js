/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

type PropsFlowType = {
  text: string,
};

const TextDivider = ({ text }: PropsFlowType): React.Node => (
  <div className="container">
    <style jsx>{styles}</style>

    <hr />

    <span>{text}</span>

    <hr />
  </div>
);

export default TextDivider;
