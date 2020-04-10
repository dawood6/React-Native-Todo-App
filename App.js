import React, { Fragment, Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions, Button } from 'react-native';



const { width } = Dimensions.get("window");

export default class App extends Component{

  state = {
    Todo: "",
    Todos: [],
  }
  handleChange = (event) => {
    this.setState({ Todo: event.nativeEvent.text });
  };
  addTodo = event => {
    const { Todo, Todos } = this.state;
    if (Todo === "") return alert('error');
    const merged = [...Todos, Todo];
    this.setState({ Todos: merged, Todo: "" });
  }
  delete = (removedTodo) => {
    const { Todos } = this.state
    const filteredTodos = Todos.filter(item => item !== removedTodo)
    this.setState({ Todos: filteredTodos })
    alert('done')
  };
  render(){
  return (
    <Fragment>
    <View style={styles.container}>
      <Text style={styles.text}>React Native Todo App</Text>
    </View>
    <View style={styles.inputField}>
    <TextInput
    placeholder= 'hello'
    style={styles.input}
    onChange={this.handleChange}
    value={this.state.Todo}
    />
    <Button  onPress={this.addTodo} title= 'Add' />

    <Text>
    {this.state.Todos.map(item => (
              <Text style={{fontSize: 20,}}>
                {item}{" "}
                <Text  onPress={() => this.delete(item)} >❌</Text>{" "}
              </Text>
            ))}
            {console.log(this.state.Todos)}
    </Text>
    </View>
    </Fragment>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  text: {
    fontSize: 35,
    marginTop: 20,
  },
  input: {
   width,
   fontSize: 20,
   textAlign: "center",
  },
  inputField: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
