const initialState = {
  dataUser: [],
  dataContact: [],
  dataDelete: [],
  isShowEdit: false,
  isShowAbout: false,
  isShowAdd: false,
  isShowDelete: false,
  isShowPictureForm: false,
};

const ChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DATA_USER":
      return { ...state, dataUser: action.payload };
    case "DELETE_DATA_CONTACT":
      const dataFiltered = state.data.filter((item) => {
        if (item.id === action.payload._id) return false;
        return true;
      });
      return { ...state, data: dataFiltered };
    case "GET_DATA_CONTACT":
      return { ...state, dataContact: action.payload };
    case "ADD_DATA_CONTACT":
      return { ...state, dataContact: [...state.dataContact, action.payload] };
    case "SHOW_EDIT_FORM":
      return { ...state, isShowEdit: true };
    case "HIDE_EDIT_FORM":
      return { ...state, isShowEdit: false };
    case "SHOW_ABOUT_FORM":
      return { ...state, isShowAbout: true };
    case "HIDE_ABOUT_FORM":
      return { ...state, isShowAbout: false };
    case "SHOW_ADDCONTACT_FORM":
      return { ...state, isShowAdd: true };
    case "HIDE_ADDCONTACT_FORM":
      return { ...state, isShowAdd: false };
    case "SHOW_DELETECONTACT_FORM":
      return { ...state, isShowDelete: true, dataDelete: action.payload };
    case "HIDE_DELETECONTACT_FORM":
      return { ...state, isShowDelete: false };
    case "SHOW_CHANGEIMAGE_FORM":
      return { ...state, isShowPictureForm: true };
    case "HIDE_CHANGEIMAGE_FORM":
      return { ...state, isShowPictureForm: false };
    default:
      return state;
  }
};

export default ChatReducer;
