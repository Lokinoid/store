import React, {Component} from 'react';
import StoreGrid from './StoreGrid';



class Body extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: false,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    return (
      <div>
        <StoreGrid items={this.props.items}/>
      </div>
    );
  }
}

export default Body;
