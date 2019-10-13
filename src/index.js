import React from "react";
import ReactDOM from "react-dom";
import QuoteBox from "./components/QuoteBox";
import BackgroundImage from "./components/BackgroundImage";
import "./styles.css";
import posed, { PoseGroup } from "react-pose";

const MAX_CUOTES_NUM = 24;
const JSON_REPOSITORY =
  "https://raw.githubusercontent.com/Mangosteen-bit/quote-machine/master/quotes.json";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.ac = new AbortController();
    this.state = {
      data: [],
      quoteText: "",
      quoteAuthor: "",
      color: "",
      imageUrl: "",
      _id: "",
      viewPortWidth: 0,
      viewPortHeight: 0,
      imgWidth: 0,
      imgHeight: 0,
      isOpen: false
    };
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.isOpen === nextState.isOpen) {
      return false;
    } else {
      return true;
    }
  }
  getRandomInt = () => {
    return Math.floor(Math.random() * Math.floor(MAX_CUOTES_NUM));
  };

  handleTimer = isOpen => {
    if (!isOpen) {
      setTimeout(() => {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }, 1500);
    }
  };
  
  componentDidUpdate = () => {
    this.handleTimer(this.state.isOpen);
  };

  componentDidMount = () => {
    let index = this.getRandomInt();
    fetch(JSON_REPOSITORY, { signal: this.ac.signal })
      .then(response => {
        return response.json();
      })
      .then(d => {
        this.setState({
          data: d,
          quoteText: d[index].quoteText,
          quoteAuthor: d[index].quoteAuthor,
          color: d[index].color,
          imageUrl: d[index].imageUrl,
          _id: d[index]._id,
          imgWidth: parseInt(d[index].imgWidth, 10),
          imgHeight: parseInt(d[index].imgHeight, 10)
        });
      })
      .catch(function(ex) {
        console.log("parsing failed", ex);
        this.setState({
          requestFailed: true
        });
      });
     this.handleTimer(this.state.isOpen);
  };
  componentWillUnmount = () => {
    this.ac.abort();
  };

  handleClick = () => {
    const index = this.getRandomInt();
    this.setState({
      quoteText: this.state.data[index].quoteText,
      quoteAuthor: this.state.data[index].quoteAuthor,
      color: this.state.data[index].color,
      imageUrl: this.state.data[index].imageUrl,
      _id: this.state.data[index]._id,
      imgWidth: this.state.data[index].imgWidth,
      imgHeight: this.state.data[index].imgHeight,
      isOpen: false
    });
  };

  render() {
    const { imageUrl, quoteAuthor, quoteText, color, isOpen, _id } = this.state;
    const { handleClick } = this;

    return (
      <PoseGroup flipMove={false}>
        <Background key={_id} className="background">
          <BackgroundImage image={imageUrl} />
        </Background>
        {isOpen && [
          <Box key={_id + "a"} className="box">
            <QuoteBox
              quoteText={quoteText}
              color={color}
              quoteAuthor={quoteAuthor}
              handleClick={handleClick}
            />
          </Box>
        ]}
      </PoseGroup>
    );
  }
}

const Background = posed.div({
  enter: {
    opacity: 1,
    transition: {
      opacity: { ease: "linear", duration: 900 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { ease: "linear", duration: 900 }
    }
  }
});
const Box = posed.div({
  enter: {
    opacity: 0.7,
    transition: {
      opacity: { ease: "linear", duration: 600 }
    }
  },
  exit: {
    opacity: 0,
    transition: {
      opacity: { ease: "linear", duration: 300 }
    }
  }
});

const rootElement = document.getElementById("root");
ReactDOM.render(<Main />, rootElement);
