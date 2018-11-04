import React from 'react'
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const ButtonPrimary = ({ children, onChange }) => <Wrapper>
  <TouchableOpacity>
    <View>
      <Text>{children}</Text>
    </View>
  </TouchableOpacity>
</Wrapper>;


const Wrapper = styled.View`
  padding: 16px;
`;

const View = styled.View`
  height: 40px;
  border-radius: 4px;
  background-color: rgb(97, 162, 44);
  justify-content: center;
`;

const Text = styled.Text`
  text-align: center;
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: #fff;
`;
