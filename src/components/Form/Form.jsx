import React, { Component } from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import Input from '../Input';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

class Form extends Component {
  state = {
    name: '',
    number: '',
    id: '',
  };

  handleSubmit = e => {
    if (this.state.number.length > 13)
      return alert('Please enter correct phone number');
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
      id: nanoid(),
    });
  };

  render() {
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        <Input
          onChange={this.handleInputChange}
          title="Name"
          type="text"
          name="name"
          value={this.state.name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Enter please name"
        />
        <PhoneInput
          defaultCountry="UA"
          onChange={number => this.setState({ number })}
          region="Europe"
          title="Number"
          type="tel"
          name="number"
          value={this.state.number}
          placeholder="Enter phone number"
          autoComplete="off"
          international
          className="inputPhone"
          maxLength="16"
        />
        <BtnSubmit onSubmit={this.handleSubmit}>Add contact</BtnSubmit>
      </FormContainer>
    );
  }
}

export default Form;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  width: 300px;
  border-radius: 10px;
  color: #fff;
  background: linear-gradient(
    335deg,
    rgba(41, 30, 94, 1) 0%,
    rgba(29, 59, 201, 1) 50%,
    rgba(5, 196, 207, 1) 100%
  );
`;

const BtnSubmit = styled.button.attrs(() => ({
  type: 'submit',
}))`
  position: relative;
  padding: 5px 10px;
  display: inline-block;
  border-radius: 5px;
  /* outline: none; */
  border: none;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 29px;
    background: rgba(2, 94, 252, 0.308);
    border-radius: 5px;
    transition: all 1.5s ease;
  }
  &:hover:before {
    width: 100%;
  }
`;
