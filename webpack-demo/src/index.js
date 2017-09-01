/**
 * Created by hetaohua on 2017/8/31.
 */
import _ from 'lodash'
import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print.js'

function component() {
    var element = document.createElement('div')
    element.innerHTML = _.join(['Hello','webpack'],' ')
    element.classList.add('hello')

    var button = document.createElement('button')
    button.innerHTML = 'Click me and check the console'
    button.onclick = printMe
    element.appendChild(button)

    //将图片添加到现有的 div
    var myIcon = new Image()
    myIcon.src = Icon
    element.appendChild(myIcon)
    console.log(Data)
    return element
}

document.body.appendChild(component())

if(module.hot) {
    module.hot.accept('./print.js',function(){
        console.log("Accepting the updated printMe module!")
        printMe()
    })
}
