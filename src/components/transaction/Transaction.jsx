import React from 'react'
import { getPoints } from '../userRewards'

import './transaction.css'

const Transaction = ({record, isOffset}) => {
  const { date, amount, title } = record
  const points = getPoints(Math.floor(amount))
  return (
    <div className={`transactionWrapper ${isOffset ? "grey" : ""}`}>
      <div className="date transaction">
        {new Date(date).toLocaleString()}
      </div>
      <div className="title transaction">
        {title}
      </div>
      <div className="amount transaction">
        {amount}
      </div>
      <div className="points transaction">
        {points}
      </div>
    </div>
  )
}

export default Transaction