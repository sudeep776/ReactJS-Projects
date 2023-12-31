import React from 'react'

const Header = ({selectedTeam,teamMembersAllocated}) => {
  return (
    <header className='container'>
      <div className='row justify-content-center mt-3 mb-3'>
        <div className='col-8'>
          <h1>
            Team Member Allocation
          </h1>
          <h3>
            {selectedTeam} has {teamMembersAllocated} members
          </h3>
        </div>
      </div>
    </header>
  )
}

export default Header