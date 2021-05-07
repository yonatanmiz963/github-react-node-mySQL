
import { httpService } from './http.service'

export default {
  query,
  getCommitById,
  remove,
  saveCommit,
  getEmptyCommit
}

async function query(filterBy) {
  const { byRepositoryName, byUserName } = filterBy
  return httpService.get(`commit/?byRepositoryName=${byRepositoryName}&byUserName=${byUserName}`)
}

const commits = [];

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