import React from 'react';
import styled from 'styled-components/native';
import {TouchableWithoutFeedback} from 'react-native';

export const Radio = ({items, label, secondary, activeIndex, onChange, name}) =>
    <Wrapper>
      {label && <Label>{label}</Label>}
      <Container>
        {items.map(({title}, i) => <Item
            secondary={secondary}
            key={i}
            title={title}
            active={activeIndex === i}
            first={i === 0}
            last={i === items.length - 1}
            onPress={() => onChange({name, value: i})}
        />)}
      </Container>
    </Wrapper>;

const Item = ({secondary, title, active, first, last, onPress}) =>
    <TouchableWithoutFeedback onPress={onPress}>
      <ItemView
          secondary={secondary}
          radius={secondary ? '4px' : '20px'}
          active={active}
          first={first}
          last={last}
      >
        <Text>{title}</Text>
      </ItemView>
    </TouchableWithoutFeedback>;

const Label = styled.Text`
  font-size: 14px;
  font-weight: 400;
  color: #a1a1a1;
  margin-bottom: 16px;
`;

const Wrapper = styled.View`
  padding: 16px;
  margin-bottom: 16px;
`;

const Container = styled.View`
  flex-direction: row;
`;

const ItemView = styled.View`
  flex: ${({ secondary }) => !secondary && '1' || 'none'};
  padding: 4px 16px;
  background-color: ${({active}) => active
    ? 'rgb(97, 163, 44)'
    : 'rgb(172,172,172)'};
  justify-content: center;
  borderTopLeftRadius: ${({first, radius}) => first ? radius : '0px'};
  borderBottomLeftRadius: ${({first, radius}) => first ? radius : '0px'};
  borderTopRightRadius: ${({last, radius}) => last ? radius : '0px'};
  borderBottomRightRadius: ${({last, radius}) => last ? radius : '0px'};
`;

const Text = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: 700;
  text-align: center;
`;