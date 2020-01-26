/**
 * API to dataserver
 *
 * @format
 * @flow
 */

export default class ServerApi {
  constructor(host) {
    this.host = host;
  }

  async getUserList(page) {
    const query = '/api/users?page=';
    const res = await fetch(`${this.host}${query}${page}`, {
      method: 'GET',
      'Content-Type': 'application/json',
    });
    const data = await res.json();
    return data;
  }
}
