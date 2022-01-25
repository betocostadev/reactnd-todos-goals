import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'

function addGoal (goal) {
  return {
    type: ADD_GOAL,
    goal
  }
}

function removeGoal (id) {
  return {
    type: REMOVE_GOAL,
    id
  }
}

export function handleAddGoal(name, cb) {
  return async (dispatch) => {
    try {
      const goal = await API.saveGoal(name)
      dispatch(addGoal(goal))
      cb()
    } catch (error) {
      alert('Sorry, there was an error adding the Goal.') 
    }
  }
}

export function handleDeleteGoal(goal) {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
      .catch(() => {
        dispatch(addGoal(goal))
        alert('An error ocurred, please try again.')
      })
  }
}
