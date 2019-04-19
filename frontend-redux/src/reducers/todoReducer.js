const INITIAL_STATE = {
  description: "",
  list: [
    {
      _id: 1,
      description: "Pagar divida do cartão",
      done: true
    },
    {
      _id: 2,
      description: "Fazer compras do mes",
      done: false
    },
    {
      _id: 3,
      description: "Arrumar guarda roupas",
      done: false
    }
  ]
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "DESCRIPTION_CHANGED":
      return { ...state, description: action.payload };
    default:
      return state;
  }
};
