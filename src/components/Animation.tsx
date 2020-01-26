import * as React from 'react';
import './Animation.css';

interface Props {};
interface MyState {};

class Animation extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return(
      <div className={'wrapper'}>
        <div className={'middleCircle'} />
        <div className={'innerCircle'} />
      </div>
    )
  }
};

export default Animation;
