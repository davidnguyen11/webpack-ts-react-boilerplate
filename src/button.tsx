import * as React from 'react';
const style = require('./style.less');

export class Button extends React.Component {
  render() {
    console.log(style);
    return (
      <button className={style.button}>hello</button>
    )
  }
}
