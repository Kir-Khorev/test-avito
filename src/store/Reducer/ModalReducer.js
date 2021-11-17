function modal(state = null, action) {
    switch (action.type) {
      case 'OPEN_MODAL':
        return action.data
      case 'CLOSE_MODAL':
        return null
      default:
        return state
    }
  }