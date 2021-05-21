import React from "react";
import { StyleSheet, Text, View, AppRegistry } from "react-native";

import { NativeRouter, Route, Link } from "react-router-native";
import ImagePickerExample from './imagePicker.js'
import Login from './login.js'
import ToDo from './ToDo.js'

const login = () => <Text style={styles.header}>Login</Text>;

const todo = () => <Text style={styles.header}>ToDo</Text>;

const Topic = ({ match }) => (
  <Text style={styles.topic}>{match.params.topicId}</Text>
);

const Topics = ({ match }) => (
  <View>
    <Text style={styles.header}>Profile</Text>
    <View>
      <Link
        to={`${match.url}/rendering`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Rendering with React</Text>
      </Link>
      <Link
        to={`${match.url}/components`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Components</Text>
      </Link>
      <Link
        to={`${match.url}/props-v-state`}
        style={styles.subNavItem}
        underlayColor="#f0f4f7"
      >
        <Text>Props v. State</Text>
      </Link>
    </View>

    <Route path={`${match.path}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.path}
      render={() => (
        <Text style={styles.topic}>Please select a topic.</Text>
      )}
    />
  </View>
);

const App = () => (
  <NativeRouter>
    <View style={styles.container}>
      <View style={styles.nav}>
        <Link to="/" underlayColor="#f0f4f7" style={styles.navItem}>
          <Text>Login</Text>
        </Link>
        <Link
          to="/todo"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>ToDo</Text>
        </Link>
        <Link
          to="/profile"
          underlayColor="#f0f4f7"
          style={styles.navItem}
        >
          <Text>Profile</Text>
        </Link>
      </View>

      <Route exact path="/" component={Login} />
      <Route path="/todo" component={ToDo} />
      <Route path="/profile" component={ImagePickerExample} />
    </View>
  </NativeRouter>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10
  },
  header: {
    fontSize: 20
  },
  nav: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  navItem: {
    flex: 1,
    alignItems: "center",
    padding: 10
  },
  subNavItem: {
    padding: 5
  },
  topic: {
    textAlign: "center",
    fontSize: 15
  }
});

export default App;