import React from "react";
import axios from "axios";

class FileInput extends React.Component<{}, { question: string }> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.updateQuestion = this.updateQuestion.bind(this);
    this.state = {
      question: "null",
    };
  }

  async updateQuestion(event: { preventDefault: () => void }) {
    event.preventDefault();
    const url = "https://random-questions-backend.herokuapp.com/getQuestion";
    let result = await axios.get(url);
    let question = result.data;
    this.setState({ question: question });
  }

  render() {
    return (
      <form onSubmit={this.updateQuestion}>
        <p>{this.state.question}</p>
        <br />
        <button type="submit">get</button>
      </form>
    );
  }
}

export default FileInput;
