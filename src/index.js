import $ from 'jquery';
import './css/1.css';
import './css/1.less';

$(function(){
    $('li:odd').css('backgroundColor','pink');
    $('li:even').css('backgroundColor','blue');
})

class Person {
    static name = 'jk'
}

console.log(Person.name);

// vue
import Vue from 'vue';
import App from '../components/App.vue'

const vm = new Vue({
    el:'#app',
    render:h => h(App)
})

// react
import React from 'react';
import ReactDOM from 'react-dom';
import AppReact from '../components/AppReact.jsx';

ReactDOM.render(
    <AppReact />,
    document.getElementById('root'),
);