'use client'

import React, { Component } from 'react'
import { User } from '../model/Model'
import { AuthService } from '@/services/AuthService'
import { Login }  from './components/Login'
import { Navbar } from './navbar/Navbar'
import { Home } from './home/page'

interface HomeState{
  user: User | undefined
}

export default class App extends Component < {}, HomeState> {

  private authService: AuthService = new AuthService()

  constructor(props: any){
    super(props)
    this.state ={
      user: undefined
    }

    this.setUser = this.setUser.bind(this)
  }

  private setUser(user: User){
    this.setState({
      user: user
    })
    console.log('setting the user: ' + user)
  }

  render() {
    return (
      
      <div>
        {/* <Navbar user={this.state.user}/> */}
        {/* <Login authService={this.authService} setUser={this.setUser}/> */}
        <Home />
      </div>
    )
  }
}

