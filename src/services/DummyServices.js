import API from './API';

class ServiceNameService {
  getAllServiceName(size, data) {
    return API.post(`/ServiceName/search?page=0&size=${size}`, data);
  }

  saveServiceName(value) {
    return API.post('/ServiceName', value);
  }

  getServiceNameById(id) {
    return API.get('/ServiceName/' + id);
  }

  editServiceName(id, value) {
    return API.put('/ServiceName/' + id, value);
  }

  toggleStatus(id, status) {
    return API.patch(`/ServiceName/${id}?active=${status}`);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new ServiceNameService();
