import Handlebars from 'handlebars';
// import * as Pages from './pages';
// import { mockQuestions, mockAnswers } from './mockData.js';
// import './helpers/handlebarsHelpers.js';

// Register partials

export default class App {
  constructor() {
    this.state = {
      currentPage: 'createQuestionnaire',
      questions: [],
      answers: [],
    };
    this.appElement = document.getElementById('app');
  }

  render() {
    let template;
    if (this.state.currentPage === 'createQuestionnaire') {
      template = Handlebars.compile(Pages.CreatePage);
      this.appElement.innerHTML = template({
        questions: this.state.questions, 
        createButtonEnabled: this.state.questions.length == 0
      });
    } else {
      template = Handlebars.compile(Pages.AnswersPage);
      this.appElement.innerHTML = template({ 
        questions: mockQuestions,
        answers: mockAnswers,
        answerOptions: ['Yes', 'No', 'Maybe'],
      });
    }
    this.attachEventListeners();
  }

  
}