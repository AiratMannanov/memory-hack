const initialState = {
  personInfo: {
    firstName: null,
    lastName: null,
    middleName: null,
    dateOfBirthday: null,
    dateOfDead: null,
  }
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    default:
      return {
        ...state
      }
  }
}

export default rootReducer;
