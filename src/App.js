import React, { Component } from "react"
import Button from "./components/Button/Button"
import Section from "./components/Section/Section"
import Statistics from "./components/Statistics/Statistics"
import Notification from "./components/Notification/Notification"

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  onLeaveFeedback = (element) => {
    this.setState({ [element]: this.state[element] + 1 })
  }

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad
    return total
  }

  countPositiveFeedbackPercentage = () => {
    const percentage = Number(this.countTotalFeedback() === 0 ? 0 : ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2))
    return percentage
  }

  render() {
    const option = Object.keys(this.state)
    const { good, neutral, bad } = this.state
    return (
      <>
        <Section title="Please leave feedback">
          {option.map((el) => (
            <Button key={el} option={el} onLeaveFeedback={this.onLeaveFeedback} />
          ))}
        </Section>

        <Section title="Statistics">
          <Notification message="No feedback given">
            <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} percentage={this.countPositiveFeedbackPercentage()} />
          </Notification>
        </Section>
      </>
    )
  }
}

export default App
