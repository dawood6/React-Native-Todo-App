import React, { Fragment, Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Button,
  StatusBar,
} from "react-native";

const { width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    Todo: "",
    Todos: [],
  };

  handleChange = (event) => {
    this.setState({ Todo: event.nativeEvent.text });
  };
  addTodo = (event) => {
    const { Todo, Todos } = this.state;
    if (Todo === "") return alert("Error: No Input");
    const merged = [...Todos, Todo];
    this.setState({ Todos: merged, Todo: "" });
  };
  delete = (removedTodo) => {
    const { Todos } = this.state;
    const filteredTodos = Todos.filter((item) => item !== removedTodo);
    this.setState({ Todos: filteredTodos });
    alert("Done");
  };
  render() {
    return (
      <Fragment>
        <StatusBar     
         hidden = {true}    
        />
        <View style={styles.container}>
          <Text style={styles.text}>React Native Todo App</Text>
        </View>
        <View style={styles.inputField}>
          <TextInput
            placeholder="Enter Todo"
            style={styles.input}
            onChange={this.handleChange}
            value={this.state.Todo}
          />
          <Button onPress={this.addTodo} color="purple"  title="Add Todo" />

          <Text>
            {this.state.Todos.map((item) => (
              <Text style={{ fontSize: 20, textAlign: "center" }}>
                {item} <Text onPress={() => this.delete(item)}>❌</Text> {"\n"}
              </Text>
            ))}
          </Text>
        </View>
      </Fragment>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 2,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "turquoise",
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    width,
  },
  text: {
    fontSize: 35,
    color: "purple",
  },
  input: {
    width,
    fontSize: 20,
    textAlign: "center",
    marginTop: 60,
  },
  inputField: {
    flex: 2.5,
  },
});
