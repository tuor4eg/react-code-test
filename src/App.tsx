import * as React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Animation from './components/Animation';

import initApi from './actions/api';
import getUsers from './actions/user';

interface Props {
  init: () => null,
  getUserList: () => Promise<any>,
};

interface MyState {
  loading: boolean,
}

class App extends React.Component<Props, MyState> {
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    const { init } = this.props;
    init();
    this.showIntro();
    this.loadUserData();
  }

  showIntro() {
    this.setState({ loading: true });
    //setTimeout(() => this.setState({ loading: false }), 5000);
  }

  async loadUserData() {
    const { getUserList } = this.props;
    // this.setState({ loading: true });
    await getUserList();
  }

  render() {
    const screen = <div className="App">
        <h1>Hello, world!</h1>
    </div>;
    const { loading } = this.state;

    return loading ? <Animation /> : screen;
  }
}

const mapStateToProps = (state: any) => {};

const mapDispatchToProps = {
  init: initApi,
  getUserList: getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
