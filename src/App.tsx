import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Animation from './components/Animation';
import UserList from './components/UserList';

import initApi from './actions/api';

interface Props {
  init: () => null,
};

interface MyState {
  loading: boolean,
}

class App extends React.Component<Props, MyState> {
  /**
   * Main application's component
   * @param props 
   */
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  componentDidMount() {
    const { init } = this.props;
    init();
    this.showIntro();
  }

  showIntro() {
    setTimeout(() => this.setState({ loading: false }), 3000);
  }

  render() {
    const { loading } = this.state;
    return loading ? <Animation /> : <UserList />;
  }
}

const mapDispatchToProps = {
  init: initApi,
};

export default connect(
  null,
  mapDispatchToProps,
)(App);
