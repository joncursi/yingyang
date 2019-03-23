/**
 * @flow
 * @prettier
 */

import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';

import styles from './styles';

type PropsFlowType = {
  people: Array<{
    imageSrc: string,
    name: string,
    title: string,
  }>,
};

const RenderParty = ({ people }: PropsFlowType): React.Node => (
  <>
    <style jsx>{styles}</style>

    {people.map(
      (person): React.Node => (
        <ListItem key={person.name}>
          <ListItemAvatar>
            <Avatar alt={person.name} src={person.imageSrc} />
          </ListItemAvatar>

          <ListItemText primary={person.name} secondary={person.title} />
        </ListItem>
      ),
    )}
  </>
);

export default RenderParty;
