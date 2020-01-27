import * as React from 'react';
import './Animation.css';

interface Props {};
interface MyState {};

class Animation extends React.Component<Props, MyState> {
  /**
   * Component of animated intro
   * @param props
   */
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return(
      <div className={'wrapper-intro'}>
        <div className={'middleCircle middleCircle-animated'} />
        <div className={'middleCircle middleCircle-animated2'} />
        <div className={'innerCircle'} />
      </div>
    )
  }
};

export default Animation;
