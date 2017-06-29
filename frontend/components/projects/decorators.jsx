import React from "react";

const Decorators = [
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide === 0 && !this.props.wrapAround)} >
            <img src="https://www.shareicon.net/data/64x64/2015/10/18/658096_bracket_512x512.png"
              id="leftButton" onClick={this.handleClick} />
          </button>
        );
      },
      handleClick(e) {
        e.preventDefault();
        this.props.previousSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
        };
      }
    }),
    position: 'CenterLeft'
  },
  {
    component: React.createClass({
      render() {
        return (
          <button
            style={this.getButtonStyles(this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount && !this.props.wrapAround)} >
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/OCR-A_char_Greater-Than_Sign.svg/848px-OCR-A_char_Greater-Than_Sign.svg.png"
              id="rightButton" onClick={this.handleClick} />
          </button>
        );
      },
      handleClick(e) {
        e.preventDefault();
        this.props.nextSlide();
      },
      getButtonStyles(disabled) {
        return {
          border: 0,
          background: 'rgba(0,0,0,0)',
          color: 'white',
          padding: 10,
          outline: 0,
          opacity: disabled ? 0.3 : 1,
        };
      }
    }),
    position: 'CenterRight'
  },
  {
    component: React.createClass({
      render() {
        var self = this;
        var indexes = this.getIndexes(self.props.slideCount, self.props.slidesToScroll);
        return (
          <ul style={self.getListStyles()}>
            {
              indexes.map(function(index) {
                return (
                  <li style={self.getListItemStyles()} key={index}>
                    <button
                      style={self.getButtonStyles(self.props.currentSlide === index)}
                      onClick={self.props.goToSlide.bind(null, index)}>
                      &bull;
                    </button>
                  </li>
                )
              })
            }
          </ul>
        );
      },
      getIndexes(count, inc) {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      },
      getListStyles() {
        return {
          position: 'relative',
          margin: 0,
          top: -10,
          padding: 0
        };
      },
      getListItemStyles() {
        return {
          listStyleType: 'none',
          display: 'inline-block'
        }
      },
      getButtonStyles(active) {
        return {
          border: 0,
          background: 'transparent',
          color: 'black',
          cursor: 'pointer',
          padding: 10,
          outline: 0,
          fontSize: 24,
          opacity: active ? 1 : 0.5
        };
      }
    }),
    position: 'BottomCenter'
  }
];

export default Decorators;
