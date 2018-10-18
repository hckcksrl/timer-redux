import React, { Component } from "react";
import { View, StyleSheet, Text, StatusBar } from "react-native";
import Button from "../Button";

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  time -= minutes * 60;

  var seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
    ? `0${seconds}`
    : seconds}`;

  return;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    if (!currentProps.Play && nextProps.Play) {
      const timerInterval = setInterval(() => {
        currentProps.Add();
      }, 1000);
      this.setState({
        interval: timerInterval
      });
    } else if (currentProps.Play && !nextProps.Play) {
      clearInterval(this.state.interval);
    }
  }
  render() {
    const {
        Play,
        Elapse,
        Timer,
        Start,
        Restart
    } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.upper}>
          <Text style={styles.time}>
            {formatTime(Timer - Elapse)}
          </Text>
        </View>
        <View style={styles.lower}>
          {!Play && (
            <Button iconName={"play-circle"} onPress={Start} />
          )}
          {Play && (
            <Button iconName={"stop-circle"} onPress={Restart} />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingLeft: 25,
    paddingRight: 25
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;