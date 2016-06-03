//First attempt with e2e testing with protractor using jasmine framwork - lets do it
var _ = require('lodash');

describe('Sjov med protractor', function(){


beforeEach(function() {
  browser.get('/');
});


  it('Test om forsiden loades med logo goaltrackerlogo.png vises', function(){
      expect(element(by.css('img')).getAttribute('src'))
      .toMatch(/goaltrackerlogo.png$/);
  });

  it('Test om Add Goal I navbar er gemt hvis ikke logget ind', function(){
    element.all(by.css('.md-primary')).then(function(items) {
    expect(items[0].getText()).toBe('HOME');
    expect(items[1].getText()).toBe('GOAL');
    expect(items[2].isDisplayed()).toBe(false);
});
});

it('Test om Add Goal i navbar er vist efter login', function(){
        login();
        element.all(by.css('.md-primary')).then(function(items) {
            expect(items[2].isDisplayed()).toBe(true);
        });
        logout();

  });


it('Test om Dialogen åbner på Add Goal klik', function(){
        login();
        openDialog();

    var createTitle = $('.createtitle').getText();
    expect(createTitle).toEqual('Create new Goal');
    browser.refresh();
    logout();
});


it('Test Create Goal kan lave et goal', function(){
  login();
  openDialog();
  element(by.model('goal.name')).sendKeys('Interval løbe træning');
  element(by.model('goal.share')).click();
  element.all(by.css('.md-datepicker-triangle-button')).then(function(elements){
    elements[0].click();
      browser.sleep(500);
    browser.actions().sendKeys( protractor.Key.ENTER ).perform();
      browser.sleep(500);
    elements[1].click();
    browser.actions().sendKeys( protractor.Key.ENTER ).perform();
  });
  element(by.model('selectedCategory.name')).click();
  browser.sleep(500);
  browser.actions().sendKeys( protractor.Key.ENTER ).perform();
  element(by.model('goal.updateInterval')).click();
  browser.sleep(500);
  browser.actions().sendKeys(protractor.Key.ENTER).perform();



  element(by.model('sub')).sendKeys('1 sæt - Spurt 60 sek');
  element(by.css('.addsubgoal')).click();

  element(by.model('sub')).sendKeys('2 sæt - Spurt 40 sek');
  element(by.css('.addsubgoal')).click();

  element(by.model('sub')).sendKeys('3 sæt - Spurt 30 sek');
  element(by.css('.addsubgoal')).click();

  element(by.model('sub')).sendKeys('4 sæt - Spurt 20 sek');
  element(by.css('.addsubgoal')).click();

  element(by.css('.addgoal')).click();

  element.all(by.binding('goal.name')).filter(function (elem) {
         return elem.getText().then(function (text) {
             return text === 'Interval løbe træning';
         });
     }).then(function (filteredElements) {
          expect(filteredElements[0].getText()).toBe('Interval løbe træning');
     });
  });


});


function login(){
        element.all(by.css('.md-primary')).then(function(items){
        items[5].click();
        element(by.model('vm.user.email')).sendKeys('test@example.com');
        element(by.model('vm.user.password')).sendKeys('test');
        element(by.css('.btn-login')).click();
});
}

function logout(){
  element.all(by.css('.md-primary')).then(function(items){
  items[7].click();
});
}

function openDialog(){
  element.all(by.css('.md-primary')).then(function(items) {
  items[2].click();
});
}
