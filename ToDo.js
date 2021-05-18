import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      contents: [],
      mark: false,
    };
  }
 
  addContent = (content) => {
    this.state.contents.push(content);
    this.setState({ contents: this.state.contents });
   
  };

  deleteContent = (index) => {
    console.log(index);
    this.state.contents.splice(index, 1);
    this.setState({ contents: this.state.contents });
  };
  markContent = (index) => {
    this.setState({ mark: !this.state.mark });
  };

  render() {
    return (
      <View>
        <Text style={{ textAlign: "center" }}>To Do List</Text>
        <View>
          <DisplayTasks
            contents={this.state.contents}
            mark={this.state.mark}
            deleteContent={this.deleteContent}
            markContent={this.markContent}
          />
        </View>
        <AddTask style={{ textAlign: "center" }} addContent={this.addContent} />
      </View>
    );
  }
}

class AddTask extends React.Component {
  constructor(props) {
    super();
    this.state = {
      content: "",
    };
  }

  addContent = () => {
    let content = {
      content: this.state.content,
    };

    this.props.addContent(content);
  };

  render() {
    return (
      <View>
        <Text>content : </Text>
        <TextInput
          style={styles.input}
          value={this.state.content}
          onChangeText={(e) => this.setState({ content: e })}
        />
        <TouchableOpacity
          onPress={() => this.addContent()}
          className="btn btn-primary "
          style={ styles.submitButton }
          title="Add"
        ><Text style = { styles.submitButtonText } > Add< /Text></TouchableOpacity>
      </View>
    );
  }
}

class DisplayTasks extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    let btn_class = this.props.mark ? "blackButton" : "whiteButton";
    {
      let task = this.props.contents.map((item, index) => {
        
        return (
          <Text>
          
            
            <Button
              onPress={() => {
                this.props.deleteContent(index);
              }}
              title="Delete"
            >
            
            </Button>
           <Text> {item.content}</Text>
          </Text>
		  
        );
      });
      console.log(task);
      return <View>{task}</View>;
    }

  
  }
}

DisplayTasks.defaultProps = {
  contents: [],
};

class DisplayTask extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return <View></View>;
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 23,
  },
  input: {
	width:"80%",
    margin: 15,
    height: 40,
    borderColor: "#7a42f4",
    borderWidth: 5,
    padding: 10,
  },
  submitButton: {
     backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 50,
		borderRadius:25,
		width:"80%",
		alignItems:"center"
  },
  submitButtonText: {
    color: "white",
  },
});
export default ToDo;