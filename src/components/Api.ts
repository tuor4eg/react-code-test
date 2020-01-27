/**
 * API to dataserver
 *
 * @format
 * @flow
 */

export default class ServerApi {
  host: string;

  constructor(host: string) {
    this.host = host;
  }

  async getUserList(page: number) {
    const query = '/api/users?page=';
    const res = await fetch(`${this.host}${query}${page}`, {
      method: 'GET',
      headers: new Headers({ 'content-type': 'application/json' }),
    });
    const data = await res.json();
    return data;
  }
}
