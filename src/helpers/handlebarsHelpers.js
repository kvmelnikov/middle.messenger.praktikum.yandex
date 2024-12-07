import Handlebars from 'handlebars';

Handlebars.registerHelper('isProfileType', function(value) {
    return value === 'default'
  });

  Handlebars.registerHelper('isProfileTypeChange', function(value) {
    return value === 'change-profile'
  });  