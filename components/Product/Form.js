import React, {Component} from 'react';
import styled from 'styled-components/native';
import bind from 'autobind-decorator';
import {Radio, TextInput, Select, ButtonPrimary} from '../common';

export default class Form extends Component {
  state = {
    typeIndex: 1,
    groupIndex: 0,
    listIndex: 0,
    areaIndex: 0,
    fee: '',
    name: '',
    details: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium error explicabo illo inventore labore magnam',
  };

  @bind
  handleChange({name, value}) {
    this.setState({[name]: value});
  };

  render() {
    const {typeIndex, groupIndex, listIndex, areaIndex, name, details, fee} = this.state;

    return (
        <Wrapper>
          <Radio
              items={typeItems}
              activeIndex={typeIndex}
              name="typeIndex"
              onChange={this.handleChange}
          />
          <TextInput
              label="Name"
              value={name}
              name="name"
              onChange={this.handleChange}
          />
          <Radio
              secondary
              label="Group"
              items={groupItems}
              activeIndex={groupIndex}
              name="groupIndex"
              onChange={this.handleChange}
          />

          <Select
              name="listIndex"
              label="List"
              items={listItems}
              value={listItems[listIndex]}
              onChange={this.handleChange}
          />

          <TextInput
              label="Details"
              value={details}
              name="details"
              textarea={true}
              onChange={this.handleChange}
          />

          <Select
              name="areaIndex"
              label="Area"
              items={areaItems}
              value={areaItems[areaIndex]}
              onChange={this.handleChange}
          />

          <TextInput
              label="Fee"
              value={fee}
              name="fee"
              keyboardType="numeric"
              onChange={this.handleChange}
          />


          <ButtonPrimary>
            Post
          </ButtonPrimary>
        </Wrapper>
    );
  }
};

const typeItems = [
  {
    title: 'Stock',
  },
  {
    title: 'Buy',
  },
];

const groupItems = [
  {
    title: 'Piece',
  },
  {
    title: 'Service',
  },
];

const listItems = ['Chairs', 'Tables', 'Windows'];
const areaItems = ['Hong Kong', 'Chicago', 'NY', 'LA'];

const Wrapper = styled.View`
  background-color: #fff;
  flex: 1 1 auto;
`;