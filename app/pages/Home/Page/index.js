/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Divider from '@material-ui/core/Divider';
import moment from 'moment';

import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';
import TextDivider from '../../../components/TextDivider';

import RenderColors from './RenderColors';
import RenderParty from './RenderParty';
import styles from './styles';

const Page = (): React.Node => {
  const imageUrls = [
    '/static/img/splashes/home-1.jpg',
    '/static/img/splashes/home-2.jpg',
    '/static/img/splashes/home-3.jpg',
  ];

  return (
    <>
      <style jsx>{styles}</style>

      <PageLayout
        activeRoute={ROUTES.HOME}
        rightContainer={
          <img
            alt="Michelle & Jonathan"
            src={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
          />
        }
      >
        <Divider />

        <div className="contentContainer">
          <h1>
            Michelle
            <br />
            - & -
            <br />
            Jonathan
          </h1>

          <TextDivider text="When" />

          <h2>September 29, 2019</h2>

          <h3>
            {`${Math.abs(
              moment().diff(new Date('09/29/2019'), 'days') - 1,
            )} days to go!`}
          </h3>

          <TextDivider text="Where" />

          <h2>
            <a
              href="https://theoldmillrosevalley.com/"
              rel="noopener noreferrer"
              target="_blank"
            >
              The Old Mill
            </a>
          </h2>

          <h3>
            <a
              href="https://goo.gl/maps/a6ZBcxufE1G2"
              rel="noopener noreferrer"
              style={{
                textDecoration: 'none',
              }}
              target="_blank"
            >
              9 Old Mill Lane, Rose Valley, PA 19063
            </a>
          </h3>

          <TextDivider text="Our Colors" />

          <RenderColors />

          <TextDivider text="The Girls" />

          <RenderParty
            people={[
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
            ]}
          />

          <TextDivider text="The Guys" />

          <RenderParty
            people={[
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
            ]}
          />
        </div>
      </PageLayout>
    </>
  );
};

export default Page;
