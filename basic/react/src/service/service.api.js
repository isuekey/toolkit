
export class AppApiServiceManager {
  constructor(dispatch) {
    this.dispatch = dispatch;
  }
  baseGet = (url, params) => {
    return fetch(url, params).then((res) => {
      try {
        return res.json();
      } catch (e) {
        throw e;
      }
    }).catch((e) => {
      console.log(e);
      return JSON.stringify({error:'json错误'});
    });    
  };
  getHomeData = ( statusKey, targetKey, url='/data/i18n/zh/home.json', params) => {
    this.dispatch({
      type: statusKey,
      payload: 1
    });
    this.baseGet(url, params).then((resJson) => {
      this.dispatch({
        type: statusKey,
        payload: -1
      });
      this.dispatch({
        type: targetKey,
        payload: resJson
      });
    }).catch((err) => {
      this.dispatch({
        type: statusKey,
        payload: -1
      });
    });
  };
  getHomeDetailData = (statusKey, targetKey, url='/data/i18n/zh/home.detail.json', params) => {
    this.dispatch({type: statusKey, payload: 1});
    this.baseGet(url, params).then((resJson) => {
      this.dispatch({
        type: targetKey,
        payload: resJson
      });
      this.dispatch({
        type: statusKey,
        payload: -1
      });
    }).catch((err) => {
      this.dispatch({
        type: statusKey,
        payload: -1
      });
    });
  };
  getCourseData = (url = '/data/course.json', params) => {
    return fetch(url).then((res) => {
      try {
        return res.json();
      } catch (e) {
        throw e;
      }
    }).then((jsonRes)=>{
      return jsonRes.filter((el, idx)=> {
        return el.id === params.id;
      })[0];
    }).catch((e) => {
      console.log(e);
      return JSON.stringify({error:'json错误'});
    });
  };
}


