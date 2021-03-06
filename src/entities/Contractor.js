import Api from '../api';

export default class Contractor extends Api {
  constructor(apiToken, biz_id = null) {
    super(apiToken);
    this.biz_id = biz_id;
  }

  get(payload = {}) {
    return this.api
      .get(`/biz/${payload.biz_id ? payload.biz_id : this.biz_id}/contractor/${payload.id}`)
      .then(response => response.data);
  }

  all(payload = {}) {
    return this.api.get(`/biz/${payload.biz_id ? payload.biz_id : this.biz_id}/contractor`).then(response => response.data);
  }

  update(payload = {}) {
    return this.api
      .put(`/biz/${payload.biz_id ? payload.biz_id : this.biz_id}/contractor/${payload.id}`, Api.except(payload, 'biz_id', 'id'))
      .then(response => response.data);
  }

  add(payload = {}) {
    return this.api
      .post(`/biz/${payload.biz_id ? payload.biz_id : this.biz_id}/contractor`, Api.except(payload, 'biz_id'))
      .then(response => response.data);
  }

  delete(payload = {}) {
    return this.api.delete(`/biz/${payload.biz_id ? payload.biz_id : this.biz_id}/contractor/${payload.id}`).then(response => response.data);
  }
}
