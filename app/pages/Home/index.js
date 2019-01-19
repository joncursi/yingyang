/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import moment from 'moment';

import PageLayout from '../../layouts/PageLayout';
import TextDivider from '../../components/TextDivider';

import RenderColors from './RenderColors';
import RenderParty from './RenderParty';
import styles from './styles';

const Home = (): React.Node => {
  const imageUrls = [
    '/static/img/splash-1.jpg',
    '/static/img/splash-2.jpg',
    '/static/img/splash-3.jpg',
    '/static/img/splash-4.jpg',
  ];

  return (
    <React.Fragment>
      <style jsx>{styles}</style>

      <PageLayout
        backgroundImageUrl={
          imageUrls[Math.floor(Math.random() * imageUrls.length)]
        }
      >
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

          <TextDivider text="Bridal Party" />

          <RenderParty />
        </div>
      </PageLayout>
    </React.Fragment>
  );
};

export default Home;
