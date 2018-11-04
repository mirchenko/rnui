import React from 'react';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { ImageIcon } from '../../svg/icons';

const { width } = Dimensions.get('window');

const hw = width / 2;


export default () => <Wrapper>
  <View>
    <ImageIcon height={48} width={48}/>
    <Text>Add pictures</Text>
  </View>
</Wrapper>;

const Wrapper = styled.View`
  justify-content: center;
  alignItems: center;
  padding: 60px;
`;

const View = styled.View`
  borderRadius: 20px;
  borderWidth: 2px;
  borderColor: rgb(162, 162, 162);
  height: ${hw};
  width: ${hw};
  justify-content: center;
  alignItems: center;
`;

const Text = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 500;
  color: #a1a1a1;
`;