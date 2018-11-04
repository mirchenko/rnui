import React, { Component } from 'react';
import bind from 'autobind-decorator';
import {Modal, View, TouchableWithoutFeedback, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {RightChevronIcon, DownChevronIcon} from '../../svg/icons';

export class Select extends Component {
  state = {
    modalVisible: false,
  };

  @bind
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  @bind
  handleItemPress(value) {
    const { name } = this.props;
    this.setState({ modalVisible: false });
    this.props.onChange({ name, value });
  }

  render() {
    const { value, label, items} = this.props;
    const { modalVisible } = this.state;

    return(
        <Wrapper>
          <TouchableWithoutFeedback onPress={() => this.setModalVisible(true)}>
            <View>
              <Label>{label}</Label>
              <Container>
                <Value>{value}</Value>
                <RightChevronIcon/>
              </Container>
            </View>
          </TouchableWithoutFeedback>

          <Modal
              animationType="fade"
              transparent={false}
              visible={modalVisible}
              onRequestClose={() => true}
          >
            <ModalHeader>
              <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
                <View style={{ height: 24, width: 24 }}>
                  <DownChevronIcon />
                </View>
              </TouchableWithoutFeedback>
            </ModalHeader>


            <ScrollView style={{ flex: 1 }}>
              {items.map((item, index) => <TouchableWithoutFeedback key={index} onPress={() => this.handleItemPress(index)}>
                <ModalItem>
                  <ModalItemText>
                    {item}
                  </ModalItemText>
                </ModalItem>
              </TouchableWithoutFeedback>)}
            </ScrollView>


          </Modal>
        </Wrapper>
    );
  }
}


const ModalItem = styled.View`
  height: 48px;
  justify-content: center;
  align-items: flex-start;
  borderBottomWidth: 1;
  borderBottomColor: #eee;
`;

const ModalItemText = styled.Text`
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: #a1a1a1;
  padding: 0 16px;
`;

const ModalHeader = styled.View`
  height: 40px;
  margin-top: 40px;
  paddingHorizontal: 16px;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 16px;
`;

const Value = styled.Text`
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