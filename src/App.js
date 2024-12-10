import Handlebars from 'handlebars';
import * as Pages from './pages';
import * as Components from './components';
// import { mockQuestions, mockAnswers } from './mockData.js';
import './helpers/handlebarsHelpers.js';

// Register partials
Handlebars.registerPartial('WorkspaceChat', Components.WorkspaceChat)
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
Handlebars.registerPartial('Link', Components.Link)
Handlebars.registerPartial('Time', Components.Time)
Handlebars.registerPartial('FooterChat', Components.FooterChat)
Handlebars.registerPartial('ChatForm', Components.ChatForm)
Handlebars.registerPartial('SvgIcon', Components.SvgIcon)
Handlebars.registerPartial('InputProfile', Components.InputProfile)
Handlebars.registerPartial('ButtonIcon', Components.ButtonIcon)
Handlebars.registerPartial('ButtonApperance', Components.ButtonApperance)
Handlebars.registerPartial('LeftNavigate', Components.LeftNavigate)
Handlebars.registerPartial('FormProfile', Components.FormProfile)
Handlebars.registerPartial('FormProfilePasword', Components.FormProfilePasword)
Handlebars.registerPartial('FormLogin', Components.FormLogin)
Handlebars.registerPartial('InputLogin', Components.InputLogin)
Handlebars.registerPartial('FormSignin', Components.FormSignin)
Handlebars.registerPartial('TooltipAttach', Components.TooltipAttach)
Handlebars.registerPartial('TooltipAttachElement', Components.TooltipAttachElement)
Handlebars.registerPartial('TooltipUser', Components.TooltipUser)
Handlebars.registerPartial('DialogWindow', Components.DialogWindow)

export default class App {
  constructor() {
    this.state = {
      currentPage: 'login',
      action: 'default',
      error: 'not-error'
    };
    this.appElement = document.getElementById('app');
  }

  render() {

    let template;
    if (this.state.currentPage === "error") {
      template = Handlebars.compile(Pages.Login);
      this.appElement.innerHTML = template({
        
      });
    } 

    if (this.state.currentPage === "login") {
      template = Handlebars.compile(Pages.Login);
      this.appElement.innerHTML = template({
      });
    } 
    if (this.state.currentPage === "mainPaige") {
      template = Handlebars.compile(Pages.MainPage);
      this.appElement.innerHTML = template({
      });
    } 
    if(this.state.currentPage === "profile") {
      template = Handlebars.compile(Pages.Profile);
      this.appElement.innerHTML = template({
        editProfile: this.state.action
      });
    }
    if(this.state.currentPage === "signin") {
      template = Handlebars.compile(Pages.Signin);
      this.appElement.innerHTML = template({
      });
    }

    if(this.state.currentPage === "auxiliaryElements") {
      template = Handlebars.compile(Pages.AuxiliaryElements);
      this.appElement.innerHTML = template({
      });
    }
    
    this.attachEventListeners();
  }

  attachEventListeners() {
    
    const links = document.querySelectorAll('.link');
    const Buttons = document.querySelectorAll('.button');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage(e.target.dataset.page);
        this.changeAction(e.target.dataset.action)
      }); 
    });

    Buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        this.changePage(e.target.dataset.page);
        this.changeAction(e.target.dataset.action)
      }); 
    });
    
  }

changeAction(action) {
  this.state.action = action
  this.render()
}

changePage(page) {
  this.state.currentPage = page
  this.render() 
}

  
  
}
