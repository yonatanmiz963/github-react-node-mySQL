
import { httpService } from './http.service'

export default {
  query,
  getCommitById,
  remove,
  saveCommit,
  getEmptyCommit
}

const commits = [
  {
    "_id": "5a56640269f443a5d64b32ca",
    "name": "Ochoa Hyde",
    "email": "ochoahyde@renovize.com",
    "phone": "+1 (968) 593-3824",
    "coins": 100,
    "moves": []
  },
  {
    "_id": "5a5664025f6ae9aa24a99fde",
    "name": "Hallie Mclean",
    "email": "halliemclean@renovize.com",
    "phone": "+1 (948) 464-2888",
    "coins": 90,
    "moves": []
  },
  {
    "_id": "5a56640252d6acddd183d319",
    "name": "Parsons Norris",
    "email": "parsonsnorris@renovize.com",
    "phone": "+1 (958) 502-3495",
    "coins": 56,
    "moves": []
  },
  {
    "_id": "5a566402ed1cf349f0b47b4d",
    "name": "Rachel Lowe",
    "email": "rachellowe@renovize.com",
    "phone": "+1 (911) 475-2312",
    "coins": 86,
    "moves": []
  },
  {
    "_id": "5a566402abce24c6bfe4699d",
    "name": "Dominique Soto",
    "email": "dominiquesoto@renovize.com",
    "phone": "+1 (807) 551-3258",
    "coins": 99,
    "moves": []
  },
  {
    "_id": "5a566402a6499c1d4da9220a",
    "name": "Shana Pope",
    "email": "shanapope@renovize.com",
    "phone": "+1 (970) 527-3082",
    "coins": 525,
    "moves": []
  },
  {
    "_id": "5a566402f90ae30e97f990db",
    "name": "Faulkner Flores",
    "email": "faulknerflores@renovize.com",
    "phone": "+1 (952) 501-2678",
    "coins": 76,
    "moves": []
  },
  {
    "_id": "5a5664027bae84ef280ffbdf",
    "name": "Holder Bean",
    "email": "holderbean@renovize.com",
    "phone": "+1 (989) 503-2663",
    "coins": 253,
    "moves": []
  },
  {
    "_id": "5a566402e3b846c5f6aec652",
    "name": "Rosanne Shelton",
    "email": "rosanneshelton@renovize.com",
    "phone": "+1 (968) 454-3851",
    "coins": 245,
    "moves": []
  },
  {
    "_id": "5a56640272c7dcdf59c3d411",
    "name": "Pamela Nolan",
    "email": "pamelanolan@renovize.com",
    "phone": "+1 (986) 545-2166",
    "coins": 124,
    "moves": []
  },
  {
    "_id": "5a5664029a8dd82a6178b15f",
    "name": "Roy Cantu",
    "email": "roycantu@renovize.com",
    "phone": "+1 (929) 571-2295",
    "coins": 263,
    "moves": []
  },
  {
    "_id": "5a5664028c096d08eeb13a8a",
    "name": "Ollie Christian",
    "email": "olliechristian@renovize.com",
    "phone": "+1 (977) 419-3550",
    "coins": 183,
    "moves": []
  },
  {
    "_id": "5a5664026c53582bb9ebe9d1",
    "name": "Nguyen Walls",
    "email": "nguyenwalls@renovize.com",
    "phone": "+1 (963) 471-3181",
    "coins": 411,
    "moves": []
  },
  {
    "_id": "5a56640298ab77236845b82b",

    "name": "Glenna Santana",
    "email": "glennasantana@renovize.com",
    "phone": "+1 (860) 467-2376",
    "coins": 124,
    "moves": []
  },
  {
    "_id": "5a56640208fba3e8ecb97305",
    "name": "Malone Clark",
    "email": "maloneclark@renovize.com",
    "phone": "+1 (818) 565-2557",
    "coins": 11,
    "moves": []
  },
  {
    "_id": "5a566402abb3146207bc4ec5",
    "name": "Floyd Rutledge",
    "email": "floydrutledge@renovize.com",
    "phone": "+1 (807) 597-3629",
    "coins": 423,
    "moves": []
  },
  {
    "_id": "5a56640298500fead8cb1ee5",
    "name": "Grace James",
    "email": "gracejames@renovize.com",
    "phone": "+1 (959) 525-2529",
    "coins": 125,
    "moves": []
  },
  {
    "_id": "5a56640243427b8f8445231e",
    "name": "Tanner Gates",
    "email": "tannergates@renovize.com",
    "phone": "+1 (978) 591-2291",
    "coins": 114,
    "moves": []
  },
  {
    "_id": "5a5664025c3abdad6f5e098c",
    "name": "Lilly Conner",
    "email": "lillyconner@renovize.com",
    "phone": "+1 (842) 587-3812",
    "coins": 251,
    "moves": []
  }
];

function sort(arr) {
  return arr.sort((a, b) => {
    if (a.name.toLocaleLowerCase() < b.name.toLocaleLowerCase()) {
      return -1;
    }
    if (a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase()) {
      return 1;
    }

    return 0;
  })
}

async function query(filterBy = {}) {
  console.log('filter in service', filterBy);

  const byRepositoryName  = filterBy.byRepositoryName? `byRepositoryName=${filterBy.byRepositoryName}` : 'byRepositoryName=';
  const byUserName = filterBy.byUserName? `byUserName=${filterBy.byUserName}` : `byUserName=`;

  const commits = await httpService.get(`commit/?${byRepositoryName}&${byUserName}`)
  return commits

  // return new Promise((resolve, reject) => {
  //   var commitsToReturn = [...commits];
  //   if (filterBy && filterBy.name) {
  //     commitsToReturn = filter(filterBy.name)
  //   }
  //   resolve(sort(commitsToReturn))
  // })
}

function getCommitById(id) {
  return new Promise((resolve, reject) => {
    const commit = commits.find(commit => commit._id === id)
    commit ? resolve(commit) : reject(`Commit id ${id} not found!`)
  })
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const index = commits.findIndex(commit => commit._id === id)
    if (index !== -1) {
      commits.splice(index, 1)
    }

    resolve(commits)
  })
}

function _updateCommit(commit) {
  return new Promise((resolve, reject) => {
    const index = commits.findIndex(c => commit._id === c._id)
    if (index !== -1) {
      commits[index] = commit
    }
    resolve(commit)
  })
}

function _addCommit(commit) {
  return new Promise((resolve, reject) => {
    commit._id = _makeId()
    commits.push(commit)
    resolve(commit)
  })
}

function saveCommit(commit) {
  return commit._id ? _updateCommit(commit) : _addCommit(commit)
}

function getEmptyCommit() {
  return {
    name: '',
    email: '',
    phone: ''
  }
}

function filter(term) {
  term = term.toLocaleLowerCase()
  return commits.filter(commit => {
    return commit.name.toLocaleLowerCase().includes(term) ||
      commit.phone.toLocaleLowerCase().includes(term) ||
      commit.email.toLocaleLowerCase().includes(term)
  })
}



function _makeId(length = 10) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}