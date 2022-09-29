import React from 'react'
import { Header, UserRewards } from '../../components'

import './rewardsProgram.css'
/**
 * This component is the base view. 
 * @returns React.ReactNode
 */
const RewardsProgram = () => {
	return (
		<div className="rewardsProgramWrapper">
			<Header />
			<div className="body">
				<div className="userRewardsWrapper">
					<UserRewards />
				</div>
			</div>
		</div>
	)
}

export default RewardsProgram
