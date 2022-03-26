const UserReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        isLogin: true,
      };
    }
    case "SINGOUT": {
      return {
        isLogin: false,
      };
    }
    default:
      return state;
  }
};

export default UserReducer;
