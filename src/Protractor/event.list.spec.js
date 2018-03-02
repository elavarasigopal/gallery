import { browser } from "protractor";

describe('event list details:', function(){
    describe('when clicking on the button', function(){
        it ('should nav to the each page', function(){
            browser.get('http://localhost:4200/gallery');
            var firstElement = element.all(by.binding('name')).first();

            var name;

            firstElement.getText().then(function(text){
                name = text;
            });

            firstElement.click();

            browser.waitForAngular();

            var header = element(by.binding('name');
        )
        });
    });

});