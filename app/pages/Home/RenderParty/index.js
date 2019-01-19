/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

const RenderParty = (): React.Node => {
  const people = [
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kayla Pillar',
      title: 'Matron of Honor',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Nicole Danley',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kristina Wieckowski',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Jessica Dering',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Emily Housel',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Noelle Vochansky',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Leonard "Lee" Cursi',
      title: 'Best Man',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'David Danley',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Brian Wieckowski',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kevin Lombarski',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Frank Pillar',
    },
    {
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Christopher DeOliveira',
    },
  ];

  return (
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
};

export default RenderParty;
