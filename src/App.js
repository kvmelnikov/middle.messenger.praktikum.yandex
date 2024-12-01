import Handlebars from 'handlebars';
import * as Pages from './pages';
// import { mockQuestions, mockAnswers } from './mockData.js';
// import './helpers/handlebarsHelpers.js';

// Register partials

export default class App {
  constructor() {
    this.state = {
      currentPage: 'mainPaige',
    //   questions: [],
    //   answers: [],
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template;
    console.log( this.state)
    if (this.state.currentPage === "mainPaige") {
        console.log('render')
      template = Handlebars.compile(Pages.MainPage);
      this.appElement.innerHTML = template({
      });
    } 
  //  this.attachEventListeners();
  }

  
}