import  commitService  from '../../services/commitService'

// Thunk - Action Dispatcher
export function loadCommits(filterBy) {
//   console.log('filterBy:', filterBy)
  return async dispatch => {
    const commits = await commitService.query(filterBy)
    // console.log('commits:', commits)
    const action = {
      type: 'SET_COMMITS',
      commits
    }
    dispatch(action)
    // return commits
  }
}

export function getCommitById(commitId) {
  return async dispatch => {
    const commit = await commitService.getCommitById(commitId)
    // console.log('commit:', commit)
    dispatch({ type: 'SET_COMMIT', commit })
  }
}
export function saveCommit(commit) {
  return async dispatch => {
    const isAdd = !commit._id
    const updatedCommit = await commitService.saveCommit(commit)

    if (isAdd) dispatch({ type: 'ADD_COMMIT', commit: updatedCommit })
    else dispatch({ type: 'UPDATE_COMMIT', updatedCommit })
  }
}

export function removeCommit(commitId) {
  return async dispatch => {
    await commitService.remove(commitId)
    dispatch({ type: 'REMOVE_COMMIT', commitId })
  }
}