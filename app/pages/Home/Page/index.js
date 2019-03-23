/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import moment from 'moment';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Link from '../../../components/Link';
import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';
import TextDivider from '../../../components/TextDivider';

import RenderColors from './RenderColors';
import RenderParty from './RenderParty';
import styles from './styles';

const imageUrls = [
  '/static/img/splashes/home-1.jpg',
  '/static/img/splashes/home-2.jpg',
  '/static/img/splashes/home-3.jpg',
];

const Page = (): React.Node => (
  <>
    <style jsx>{styles}</style>

    <PageLayout
      activeRoute={ROUTES.HOME}
      rightContainer={
        <div className="rightContainer">
          <div className="overlay" />

          <img
            alt="Michelle & Jonathan"
            src={imageUrls[Math.floor(Math.random() * imageUrls.length)]}
          />
        </div>
      }
    >
      <Paper elevation={0} square>
        <div className="contentContainer">
          <Typography>
            <h1>
              Michelle
              <br />
              - & -
              <br />
              Jonathan
            </h1>
          </Typography>

          <TextDivider text="When" />

          <Typography variant="h5">September 29, 2019</Typography>

          <Typography variant="overline">
            {`${Math.abs(
              moment().diff(new Date('09/29/2019'), 'days') - 1,
            )} days to go!`}
          </Typography>

          <TextDivider text="Where" />

          <Typography variant="h5">
            <Link target="_blank" to="https://theoldmillrosevalley.com/">
              The Old Mill
            </Link>
          </Typography>

          <Typography variant="overline">
            <Link
              style={{
                textDecoration: 'none',
              }}
              target="_blank"
              to="https://goo.gl/maps/a6ZBcxufE1G2"
            >
              9 Old Mill Lane, Rose Valley, PA 19063
            </Link>
          </Typography>

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
                name: 'Lee Cursi',
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
      </Paper>
    </PageLayout>
  </>
);

export default Page;
