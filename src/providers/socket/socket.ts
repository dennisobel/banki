import { Injectable } from '@angular/core';
import { Socket } from 'ng-socket-io';
import { Storage } from '@ionic/storage';
import { resolve } from 'dns';

@Injectable()

export class SocketProvider {

  constructor(
    private socket: Socket,
    private storage: Storage){}

  
  onConnect(){
    this.socket.on('connect',()=>{
    	var sessionid = this.socket.ioSocket.id;
      console.log("socket id is: ",sessionid)
    })
  }
  

  onVerified(){
    return new Promise((resolve,reject)=>{
      resolve(
        // this.socket.on('verified',(data)=>{
        //   console.log(data)
        // })
        
      )
    })


  }

  onDisconnect(){
    this.socket.on('disconnect',()=>{
      console.log("connection lost")
    })
  }
  // Oauth
  joinApp(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('joinApp',data))
    })
  }

  signIn(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('signIn',data))
    })
  }

  signUp(data){
    this.socket.emit('signUp',data)
  }

  // Enquiries
  balanceEnq(){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        ...res
      }  

      return body
      
    })
    .then((res)=>{
      // this.storage.set("login",(res.data))
      this.socket.emit("balanceEnq",res)
      console.log("heree come res of balenq",res)
    })
    
  }

  miniStatEnq(data){
    this.socket.emit('miniStatEnq',data)
  }

  fullStatEnq(data){
    this.socket.emit('fullStatEnq',data)
  }

  // Loans

  // Get loan balances
  getLoanBal(){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('getLoanBal'))
    })
  }
  // Apply Loan
  applyMLoan(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('applyMLoan',data))
    })
  }

  applyExpressLoan(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('applyExpressLoan',data))
    })
  }

  applyFosaAdvance(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('applyFosaAdvance',data))
    })
  }

  // Pay Loan
  payLoan(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('payLoan',data))
    })
  }

  // Guarantees/Guarantors
  guaranteesGuarantors(){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('guaranteesGuarantors'))
    })
  }

  // Funds Transfer
  // Get Account Balances
  accountBalances(){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('accountBalances'))
    })
  }

  internalFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('internalFundsTransfer',data))
    })
  }

  mpesaFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('mpesaFundsTransfer',data))
    })
  }

  bankFundsTransfer(data){
    return new Promise((resolve,reject)=>{
      resolve(this.socket.emit('bankFundsTransfer',data))
    })
  }

  // Utilities and bills
  airtimePurchase(data){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        data,
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("airtime purchase res:",res)
      this.socket.emit("airtimePurchase",res)
    })
  }

  tokenPurchase(data){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        data,
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("token purchase res:",res)
      this.socket.emit("tokenPurchase",res)
    })
  }

  eStatement(){
    this.storage.get('loginData')
    .then(res=>{
      let body = {
        ...res
      }  
      console.log(body)
      return body
      
    })
    .then((res)=>{
      console.log("e-stat:",res)
      this.socket.emit("estatement",res)
    })    
  }
 

}
