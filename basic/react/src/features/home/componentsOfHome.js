
import React from 'react';
import { Link } from 'react-router-dom';

export class ComponentOfHomeFooterContainer extends React.PureComponent {
  render() {
    const { match, homeSectionList } = this.props;
    const matchedAnchor = match.params.anchor;
    return (
      <div className="home-footer-container">
        {homeSectionList.map((ele) => {

          return (
            <div key={ele.anchor}>
            {
              ele.anchor === matchedAnchor ? (
                <span>{ele.anchor}</span>
              ) : (
                <Link to={`/home/${ele.anchor}`}>{ele.anchor}</Link>
              )
            } 
            </div>
          )
        })}
      </div>
    )
  }
}

export class ComponentOfHomeSection extends React.PureComponent {
  constructor(props) {
    super(props);
    this.sectionMap = {
      profileSection,
      summarySection
    }
  }
  render() {
    const { sectionItem } = this.props;
    const SecitonComponent = this.sectionMap[`${sectionItem.anchor}Section`];
    return (
      <SecitonComponent sectionItem={sectionItem} />
    )
  }
}

class profileSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animateWords:''
    };
    this.intervalHandler = undefined;
  }

  componentDidMount() {
    let count = 0;
    const { sectionItem } = this.props;
    const whoAmI = this.props.sectionItem.data.whoAmI;
    console.log(sectionItem);
    let wordIndex = 0;
    let wordCounts = whoAmI.length;
    let step = 1;
    this.intervalHandler = setInterval(()=>{
      let theWord = whoAmI[wordIndex];
      let wordLength = theWord.length;
      let animateWords = theWord.substr(0, count);
      this.setState({
        animateWords
      });
      if (count == 0) {
        step = 1;
      } else if ( count == wordLength) {
        step = -1;
      }
      count = count + step;
      if (count == 0) {
        wordIndex += 1;
        wordIndex = wordIndex % wordCounts;
      }
    }, 320);
  }

  componentWillUnmount() {
    if (this.intervalHandler) {
      clearInterval(this.intervalHandler);
    }
  }

  render() {
    const { animateWords } = this.state;
    return (
      <div className="profile"> profile section {animateWords}</div>
    )
  }
}

class summarySection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="summary"> summary section </div>
    )
  }
}