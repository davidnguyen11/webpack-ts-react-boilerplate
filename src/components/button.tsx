import * as React from 'react';
const style = require('./style.less');

const image = require('../../static/images/png/react-typescript.png');
const heartFill = require('../../static/images/svg/heart-fill.svg');

export class Button extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }

  public render(): JSX.Element {
    return (
      <div>
        <img src={image} />
        <h1>{this.state.isClicked ? 'clicked' : 'not clicked'}</h1>
        <button onClick={this.handleClick} className={style.button}>{this.props.text}</button>
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isClicked: true,
    });
  }
}

type Props = StateProps;

interface StateProps {
  text: string;
}

interface State {
  isClicked: boolean;
}
