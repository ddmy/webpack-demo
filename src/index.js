import _ from 'lodash';
import './index.css'
import echo from './print.js'
import { cube } from './math.js';
// import girl from '../public/img/2.jpg'

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack~~~~', '5 cube is', cube(5)], ' ')
  element.innerHTML = ['Hello', 'webpack~~~~', '5 cube is', cube(5)].join()

  const btn = document.createElement('button')
  btn.innerText = '点击我啊兄弟快点的sssss!'
  btn.onclick = echo

  element.appendChild(btn)
  element.classList.add('hello')

  // 将图像添加到我们现有的 div。
  // var myIcon = new Image();
  // myIcon.src = girl;
  // element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
