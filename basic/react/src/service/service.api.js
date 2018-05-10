

export const getHomeData = (url='/data/home.json', params) => {
  return fetch(url).then((res) => {
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

export const getCourseData = (url = '/data/course.json', params) => {
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

