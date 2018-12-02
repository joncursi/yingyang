/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

const RenderParty = (): React.Node => {
  const people = [
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kayla Pillar',
      title: 'Matron of Honor',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Nicole Danley',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kristina Wieckowski',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Jessica Dering',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Emily Housel',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Noelle Vochansky',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Leonard "Lee" Cursi',
      title: 'Best Man',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'David Danley',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Brian Wieckowski',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kevin Lombarski',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Frank Pillar',
    },
    {
      description:
        'Enter description here! Enter description here! Enter description here! Enter description here! Enter description here!',
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
              <div className="nameContainer">
                <h2>{person.name}</h2>

                {person.title && <span className="title">{person.title}</span>}
              </div>

              <h3>{person.description}</h3>
            </div>
          </div>
        ),
      )}
    </React.Fragment>
  );
};

export default RenderParty;
