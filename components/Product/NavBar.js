import React from 'react';
import {TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export default ({menuIndex}) => <View>
  {menu.map(({title}, i) => <TouchableOpacity key={title}>
    <MenuItemTextContainer>
      <MenuItemText active={menuIndex === i}>{title}</MenuItemText>
    </MenuItemTextContainer>
  </TouchableOpacity>)}
</View>;

const menu = [
  {
    'title': 'Undo',
    handler: null,
  },
  {
    'title': 'New Place',
    handler: null,
  },
  {
    'title': 'Post',
    handler: null,
  },
];

const View = styled.View`
  padding: 16px 16px 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 1px;
  border-bottom-color: rgb(183,183,183);
`;

const MenuItemTextContainer = styled.View`
  padding-vertical: 8px;
`;

const MenuItemText = styled.Text`
  font-size: 16px;
  color: ${({active}) => active ? `rgb(52, 151, 0)` : `rgb(159, 160, 160)`};
  font-weight: 600;
`;