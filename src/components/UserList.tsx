import * as React from 'react';
import { connect } from 'react-redux';
import './UserList.css';
import InfiniteScroll from 'react-infinite-scroll-component';

import getUsers from '../actions/user';

interface UserItem {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string,
};

interface Props {
  getUserList: () => Promise<any>,
  userData: {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: Array<UserItem>,
  },
};

interface MyState {
};

class UserList extends React.Component<Props, MyState> {
  /**
   * Component for rendering list of users
   * @param props
   */
  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    this.loadUserData();
  }

  async loadUserData() {
    /**
     * Lazy load data's part
     */
    const { getUserList } = this.props;
    try {
      await getUserList();
    } catch(err) {
      console.log(err);
    }
  }

  renderItem(item: UserItem) {
    const { id, first_name, last_name, avatar } = item;
    return(
      <div key={id} className={'user-item'}>
        <div className={'avatar'}>
          <img src={avatar} alt={"avatar"} className={'avatar'} />
        </div>
        <div className={'user-info'}>
          {`${first_name} ${last_name}`}
        </div>
      </div>
    );
  }

  render() {
    const { data, page, total_pages } = this.props.userData;
    return(
      <div className="wrapper">
          <div className={'userlist'}>
            <h2>Users</h2>
          </div>
          <InfiniteScroll
            dataLength={data ? data.length : 0}
            next={async () => await this.loadUserData()}
            hasMore={page < total_pages}
            scrollThreshold="200px"
            loader={<h4>Loading...</h4>}
            endMessage={
              <p style={{textAlign: 'center'}}>
                <b>That's all, folks!</b>
              </p>
            }
        >
            {data ? data.map(item => this.renderItem(item)): []}
        </InfiniteScroll>
      </div>
    );
  }
};

const mapStateToProps = (state: any) => ({
  userData: state.users.userData,
});

const mapDispatchToProps = {
  getUserList: getUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserList);
