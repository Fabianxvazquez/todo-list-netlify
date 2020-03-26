import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Form, Header, Container, List, Input, Segment} from 'semantic-ui-react'

class App extends React.Component {
  state = { name: '', todos: [], }

  handleSubmit = e => {
    e.preventDefault()
    const {name, todos, } = this.state
    this.setState({ todos: [name, ...todos], name: '',})
  }
  render () {
    const {name, todos,} = this.state
    return(
      <Container>
        <Segment>
          <Header as='h3' textAlign='center'>Todo List</Header>
          <Form onSubmit={this.handleSubmit}>
            <Input
            required
            value={name}
            onChange={e => this.setState({name: e.target.value}) }
            />
          </Form>
          <List>
            {todos.map( (t,i) => <List.Item key={i}>{t}</List.Item>)}
          </List>
        </Segment>
      </Container>

    )
  }
}

export default App;
