/**
 * @flow
 * @prettier
 */

import * as React from 'react';

import styles from './styles';

const RenderParty = (): React.Node => {
  const people = [
    {
      imageSrc: '/static/img/headshots/kayla.jpg',
      name: 'Kayla Pillar',
      title: 'Matron of Honor',
    },
    {
      imageSrc: '/static/img/headshots/nikki.jpg',
      name: 'Nicole Danley',
    },
    {
      imageSrc: '/static/img/headshots/kris.jpg',
      name: 'Kristina Wieckowski',
    },
    {
      imageSrc: '/static/img/headshots/jess.jpg',
      name: 'Jessica Dering',
    },
    {
      imageSrc: '/static/img/headshots/emily.jpg',
      name: 'Emily Housel',
    },
    {
      imageSrc: '/static/img/headshots/noelle.jpg',
      name: 'Noelle Vochansky',
    },
    {
      imageSrc: '/static/img/headshots/lee.jpg',
      name: 'Leonard "Lee" Cursi',
      title: 'Best Man',
    },
    {
      imageSrc: '/static/img/headshots/dave.jpg',
      name: 'David Danley',
    },
    {
      imageSrc: '/static/img/headshots/brian.jpg',
      name: 'Brian Wieckowski',
    },
    {
      imageSrc: '/static/img/headshots/kevin.jpg',
      name: 'Kevin Lombarski',
    },
    {
      imageSrc: '/static/img/headshots/frank.jpg',
      name: 'Frank Pillar',
    },
    {
      imageSrc: '/static/img/headshots/chris.jpg',
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
