import { document, console } from 'global';
import { storiesOf } from '@storybook/html';
import button  from '../components/button.html';
import Handlebars from '../node_modules/handlebars/dist/handlebars';
import test from '../components/test.html'

var template = Handlebars.compile(test);
Handlebars.registerPartial('button', button)


storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  // .add('button', () => {
  //   const button = document.createElement('button');
  //   button.type = 'button';
  //   button.innerText = 'Hello Button';
  //   button.addEventListener('click', e => console.log(e));
  //   return button;
  // });
  .add('button', () => button)
  .add('test', () => {
    
    var context = {title: "My New Post", body: "This is my first post!", button: "click"};
    var html = template(context);
    console.log('test',html)
    return html
  })

