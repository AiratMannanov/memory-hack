import { SET_INFO } from '../actions/action-types'

const initialState = {
  personInfo: {
    firstName: null,
    lastName: null,
    middleName: null,
    dateOfBirthday: null,
    dateOfDeath: null,
    dateOfСonscription: null,
    motherCity: null,
    placeOfRecruitment: null,
    dutyPlace: null,
    militaryRank: null,
    historyAboutPerson: null,
    additionalLinks: null,
    email: null,
    images: null
  }
}


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFO:
      return {
        ...state,
        personInfo: { ...state.personInfo, ...action.payload }
      }
    default:
      return {
        ...state
      }
  }
}

export default rootReducer;
