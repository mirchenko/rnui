import React from 'react';
import styled from 'styled-components/native';

export const TextInput = ({ name, value, onChange, label, textarea, keyboardType }) => <Wrapper>
  <Label>{label}</Label>
  <Input
      value={value}
      onChangeText={(value) => onChange({ name, value })}
      numberOfLines={textarea ? 5 : 1}
      multiline={textarea}
      keyboardType={keyboardType || 'default'}
  />
</Wrapper>;




const Input = styled.TextInput`
  color: #a1a1a1;
  margin-bottom: 8px;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  margin-top: 4px;
`;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #a1a1a1;
`;

const Wrapper = styled.View`
  margin-left: 16px;
  borderBottomWidth: 1;
  borderBottomColor: #a1a1a1;
  margin-bottom: 16px;
`;

