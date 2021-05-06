
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CommitFilter } from '../../cmps/CommitFilter/CommitFilter'
import { CommitList } from '../../cmps/CommitList/CommitList'
import { loadCommits } from '../../store/actions/commitAction'

import './CommitPage.scss'

export const CommitPage = () => {
  const dispatch = useDispatch()
  const [filterBy, setFilterBy] = useState({})
  const [commits, setCommits] = useState([])
  const [filterNames, setFilterNames] = useState({userNames: [], repoNames: []})
  const commitsToShow = useSelector(state => state.commitReducer.commits)

  const getFilterNames = () => {
    const filterNames = commits.reduce((acc, commit) => {
      if (!acc.userNames) acc.userNames = []
      if (!acc.repoNames) acc.repoNames = []
      
      if (!acc.userNames.includes(commit.fullname)) acc.userNames.push(commit.fullname)
      acc.repoNames.push(commit.name)

      return acc
    }, {})

    setFilterNames(filterNames)
  }

  useEffect(() => {
    dispatch(loadCommits(filterBy))
    return () => {
    }
  }, [filterBy])

  useEffect(() => {
    setCommits(commitsToShow)
    return () => {
    }
  }, [commitsToShow])


  useEffect(() => {
    getFilterNames()
    return () => {
    }
  }, [commits])

  const onChangeFilter = (filterBy) => {
    setFilterBy(filterBy)
  }

  return (
    <div className="commitPage flex column align-center">
      {filterNames && <CommitFilter filterNames={filterNames} onChangeFilter={onChangeFilter} />}
      {commits && <CommitList commits={commits} />}
    </div>
  )
}