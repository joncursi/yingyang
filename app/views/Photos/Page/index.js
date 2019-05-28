/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import shuffle from 'lodash/shuffle';

import PageLayout from '../../../layouts/PageLayout';
import ROUTES from '../../../constants/routes';

import PHOTOS from './photos';

const randomizedPhotos = shuffle(PHOTOS);

type PropsFlowType = {};

type StateFlowType = {
  currentImage: number,
  lightboxIsOpen: boolean,
};

class Page extends React.Component<PropsFlowType, StateFlowType> {
  props: PropsFlowType;

  state: StateFlowType = {
    currentImage: 0,
    lightboxIsOpen: false,
  };

  _openLightbox(obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  _closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  _gotoPrevious() {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage - 1,
    });
  }

  _gotoNext() {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage + 1,
    });
  }

  render(): React.Node {
    const { currentImage, lightboxIsOpen } = this.state;

    return (
      <PageLayout activeRoute={ROUTES.PHOTOS}>
        <Gallery
          onClick={(_, obj): void => this._openLightbox(obj)}
          photos={randomizedPhotos}
        />

        <Lightbox
          currentImage={currentImage}
          images={randomizedPhotos}
          isOpen={lightboxIsOpen}
          onClickNext={(): void => this._gotoNext()}
          onClickPrev={(): void => this._gotoPrevious()}
          onClose={(): void => this._closeLightbox()}
        />
      </PageLayout>
    );
  }
}

export default Page;
