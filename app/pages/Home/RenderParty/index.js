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
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kayla Pillar',
      title: 'Matron of Honor',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Nicole Danley',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kristina Wieckowski',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Jessica Dering',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Emily Housel',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Noelle Vochansky',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Leonard "Lee" Cursi',
      title: 'Best Man',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'David Danley',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Brian Wieckowski',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Kevin Lombarski',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
      imageSrc: '/static/img/kayla.jpeg',
      name: 'Frank Pillar',
    },
    {
      description:
        'Kayla has been my best friend since high school! She’s lived overseas for the past 7 years and we’re still going strong!',
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
