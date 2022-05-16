import React from 'react'
import {Route, Switch} from "react-router-dom"
import Start from './pages/Start'
import End from './pages/End'
import Game from './pages/Game'
import {useState} from "react"

function App() {
  let [count, setCount] = useState(0)
  let [option, setOption] = useState(0)
  let [score, setScore] = useState(0)
  let [page, setPage] = useState(0)
  return (
    <div>
      <Switch>
    <Route path='/' exact>
    <Start />
    </Route>
      <Route path="/game" exact>
        <Game count={count} setCount={setCount} score={score} setScore={setScore} page={page} setPage={setPage} option={option} setOption={setOption} />
      </Route>
      <Route path="/end">
        <End count={count} setCount={setCount} score={score} setScore={setScore} page={page} setPage={setPage} option={option} setOption={setOption} />
      </Route>
    </Switch>
    </div>
  )
}

export default App