import React from 'react';

import { Tooltip } from 'reactstrap';

export default class TooltipComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tooltipOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  //toggle function
  // the tooltip shows the massege if the tooltip is open. 
  // So <Tooltip isOpen = "true", otherwise =false, doesn't display the message
  //The function is added to the state and bind
  
  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <div>
        <p>Tooltip example
          <span style={{
            textDecoration: "underline",
            color: "blue"
          }} href="#" id="DisabledAutoHideExample">
            HOVER HERE</span>.</p>
        <Tooltip placement="top"
          isOpen={this.state.tooltipOpen}
          autohide={false} target="DisabledAutoHideExample"
          toggle={this.toggle}>
          Try to select this text!
        </Tooltip>
      </div>
    );
  }
}
