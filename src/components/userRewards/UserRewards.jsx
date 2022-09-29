import React, { useEffect, useState } from 'react'
import { CgSpinnerTwo } from 'react-icons/cg'

import { transactions } from '../../__mocks__/data'
import RenderIf from '../renderIf'
import Transaction from '../transaction'
import ListLabel from '../listLabel'

import './userRewards.css'

const UserRewards = () => {

  const { transactionHistory, isFetching, getTransactions } = useUserTransactions(0)
  const [ rewardPoints, setRewardPoints ] = useState(0)
  
  useEffect(() => {
    if(transactionHistory) {
      setRewardPoints(getRewardPoints(transactionHistory))
    }
  }, [transactionHistory])

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <div className="userRewards">
      <div className="userRewardsHeader">
        <h2>Loyalty Points</h2>
          <RenderIf isTrue={!isFetching}>
            <div className="pointWrapper">
              <p>{rewardPoints} pts.</p>
            </div>
          </RenderIf>
          <RenderIf isTrue={isFetching}>
            <div className="pointWrapper">
              <CgSpinnerTwo className="iconWrapper" />
            </div>
          </RenderIf>
      </div>
      <div className="labelsWrapper">
        <ListLabel label="DATE" width="40%" />
        <ListLabel label="TITLE" width="30%" />
        <ListLabel label="PURCHASE AMT." width="15%" />
        <ListLabel label="POINTS" width="15%" />
      </div>
      <div className="transactionHistory">
        <RenderIf isTrue={!isFetching}>
          {
            transactionHistory.map((each, i) => <Transaction record={each} isOffset={ i % 2 === 0 }/>)
          }
        </RenderIf>
        <RenderIf isTrue={isFetching}>
          {
            [...Array(10).fill('')].map((each, i) => (
              <div style={{height: '40px'}} className={`transactionWrapper ${i % 2 === 0 ? "grey" : ""}`} />
            ))
          }
        </RenderIf>
      </div>
    </div>
  )
}
export default UserRewards


/**
 * This function returns the amount of points accumulated by the user for their transactions.
 * @param {*} history data retrieved from api, returned as array
 * @returns accumulated points
 */
const getRewardPoints = (history) => {

  const accumulatedPoints = history.reduce((all, each) => all + getPoints(Math.floor(each.amount)), 0)

  return accumulatedPoints
}

/**
 * This function get the points for an amount spent
 * @param {*} number transaction amount
 * @returns number of points for this amount of money spent
 */
export const getPoints = (number) => {
  if(number > 100) {
    return ((number - 100) * 2) + 50
  } 
  if (number > 50) {
    return number - 50
  } 
  else { return 0 }
}



/**
 * Custom hook for gettin user transactions
 * @param {*} id - useless in this example, but normally would pass the id of the user
 * @returns transactionHistory - data from api | isFetching - boolean for when call is being made
 */
const useUserTransactions = (id) => {
  const [ isFetching, setIsFetching ] = useState(false)
  const [ transactionHistory, setTransactionHistory ] = useState([])

  /**
   * This function simulates the call
   * @returns data object
   */
  const fetchData = async () => {
    setIsFetching(true)
    function timeout(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }
    await timeout(2000)
    setIsFetching(false)
    return { data: transactions }
  }

  /**
   * This function fires the api request
   */
  const getTransactions = async () => {
    const { data } = await fetchData()
    if(data) {
      setTransactionHistory(data)
    }
  }

  return { transactionHistory, isFetching, getTransactions }
}