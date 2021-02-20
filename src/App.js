import React, { Component } from "react"
import Button from "./components/Button/Button"
import Section from "./components/Button/Section/Section"
import Statistics from "./components/Button/Statistics/Statistics"
import Notification from "./components/Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  // onClickGoodBtn = () => {
  //   this.setState({ good: this.state.good + 1 })
  // }
  // onClickNeutralBtn = () => {
  //   this.setState({ neutral: this.state.neutral + 1 })
  // }
  // onClickBadBtn = () => {
  //   this.setState({ bad: this.state.bad + 1 })
  // }
  onClickBtn = () => {
    console.log(this.state)
    const blabla = [this.state]
    console.log(blabla)
    blabla.map((el) => console.log(el))
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const percentage = this.countTotalFeedback() === 0 ? 0 : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2)
    return percentage
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <Button onClickGoodBtn={this.onClickGoodBtn} onClickNeutralBtn={this.onClickNeutralBtn} onClickBadBtn={this.onClickBadBtn} onClickBtn={this.onClickBtn} />
        </Section>

        <Section title="Statistics">
          <Notification message="No feedback given">
            <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()} />
          </Notification>
        </Section>
      </>
    )
  }
}

export default App
