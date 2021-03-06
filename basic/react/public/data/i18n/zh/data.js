function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  };
  return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('');
}

const homeJson = {
  growth: {
    title:"首  页",
    seq: 1,
    link:"/home"
  },
  works: {
    title: "工作经历",
    seq: 11,
    link: "/experience"
  },
  profile: {
    type: "img",
    src: "/images/avatar.jpeg",
    seq: 21,
    link:"/growth"
  },
  skills: {
    title: "技能能力",
    seq: 31,
    link:"/skills"
  },
  projects: {
    title: "项目经验",
    seq: 41,
    link:"/projects"
  }
};

const homeDetailJson = {
  profile: {
    seq: 1,
    data: {
      whoAmI:[
        '刘翰儒。',
        '一个程序员。',
        '一个骑行爱好者。'
      ]
    }
  },
  summary: {
    seq: 11,
    data: {}
  }
}


const fs = require('fs');
const path = require('path');

function writeJsonFile(filepath, jsonData, callback = ()=>{}) {
  fs.open(path.resolve(__dirname, filepath), 'w', (err, fd) => {
    if (!err) {
      fs.write(fd, JSON.stringify(jsonData, null, 2), 0, callback);
    }else {
      console.log(err);
    }
  });
}


writeJsonFile('./home.json', homeJson);
writeJsonFile('./home.detail.json', homeDetailJson);

