/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

type PropsFlowType = {
  people: Array<{
    imageSrc: string,
    name: string,
    title: string,
  }>,
};

const RenderParty = ({ people }: PropsFlowType): React.Node => (
  <React.Fragment>
    <style jsx>{styles}</style>

    {people.map(
      (person): React.Node => (
        <div className="person" key={person.name}>
          <img alt={person.name} src={person.imageSrc} />

          <div className="details">
            <div>
              <h2>{person.name}</h2>

              {person.title && <div className="title">{person.title}</div>}
            </div>
          </div>
        </div>
      ),
    )}
  </React.Fragment>
);

export default RenderParty;
