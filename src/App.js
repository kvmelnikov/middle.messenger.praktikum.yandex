import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';
// import { mockQuestions, mockAnswers } from './mockData.js';
// import './helpers/handlebarsHelpers.js';

// Register partials
Handlebars.registerPartial('LeftPanel', Components.LeftPanel)
Handlebars.registerPartial('HeaderLeftPanel', Components.HeaderLeftPanel)
Handlebars.registerPartial('Chat', Components.Chat)
Handlebars.registerPartial('ArrowRight', Components.ArrowRight)
Handlebars.registerPartial('Avatar', Components.Avatar)
Handlebars.registerPartial('ChatParticipant', Components.ChatParticipant)
Handlebars.registerPartial('CounterMessage', Components.CounterMessage)
Handlebars.registerPartial('DateMessage', Components.DateMessage)
Handlebars.registerPartial('HeaderChat', Components.HeaderChat)
Handlebars.registerPartial('IconUpload', Components.IconUpload)
Handlebars.registerPartial('InputMessage', Components.InputMessage)
Handlebars.registerPartial('InputSearch', Components.InputSearch)
Handlebars.registerPartial('Message', Components.Message)

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
    
    if (this.state.currentPage === "mainPaige") {
        console.log('render')
      template = Handlebars.compile(Pages.MainPage);
      this.appElement.innerHTML = template({
      });
    } 
  //  this.attachEventListeners();
  }

  
}