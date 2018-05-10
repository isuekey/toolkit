

export const getHomeData = (url, params) => {
  return fetch('/data/home.json').then((res) => {
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

export const getCourseData = (url, params) => {
  return fetch(url || '/data/course.json').then((res) => {
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
