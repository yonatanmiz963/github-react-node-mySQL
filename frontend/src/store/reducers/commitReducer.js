const INITIAL_STATE = {
    commits: [],
  }
  
  export function commitReducer(state = INITIAL_STATE, action) {
  
    switch (action.type) {
      case 'SET_COMMITS':
        return {
          ...state,
          commits: action.commits
        }
      case 'SET_COMMIT':
        return {
          ...state,
          currCommit: action.commit
        }
      case 'ADD_COMMIT':
        return {
          ...state,
          commits: [...state.commits, action.commit]
        }
      case 'REMOVE_COMMIT':
        return {
          ...state,
          commits: state.commits.filter(commit => commit._id !== action.commitId)
        }
      case 'UPDATE_COMMIT':
        const { updatedCommit } = action
        return {
          ...state,
          commits: state.commits.map(commit => commit._id === updatedCommit._id ? updatedCommit : commit)
        }
      default:
        return state
    }
  }