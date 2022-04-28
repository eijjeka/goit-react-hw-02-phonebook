import React, { Component } from 'react';
import Container from './Container';
import Form from './Form';
import List from './ContactsList';
import Filter from './Filter';
import styled from 'styled-components';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const checkName = this.state.contacts.find(el => el.name === data.name);
    checkName === undefined
      ? this.setState(prevState => ({
          contacts: [data, ...prevState.contacts],
        }))
      : alert(`${data.name} is already in contacts.`);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    const normalizeFilter = filter.toLocaleLowerCase();

    const visibleFilter = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );

    return (
      <Container>
        <Title>Phonebook &#128211;</Title>
        <Form onSubmit={this.formSubmitHandler} />
        <Filter value={filter} onChange={this.changeFilter} />
        <List data={visibleFilter} onDeleteContact={this.deleteContact} />
      </Container>
    );
  }
}

export default App;

const Title = styled.h1``;
