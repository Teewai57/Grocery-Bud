import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'


const getLocalStorage = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = json.parse(localStorage.getItem('list')));
  } else {
    return [] ;
  }
}
function App() {
  return <h2>grocery bud setup</h2>
}

export default App
