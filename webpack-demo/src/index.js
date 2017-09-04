/**
 * Created by hetaohua on 2017/8/31.
 */
// import _ from 'lodash'
// import './style.css'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print.js'
import  { cube }from './math.js'

if(process.env.NODE_ENV !== 'production') {
    console.log('looks like we are in development mode!')
}

function component() {
    // var element = document.createElement('div')
    // element.innerHTML = _.join(['Hello','webpack'],' ')
    // element.classList.add('hello')
    var element = document.createElement('pre')

    // var button = document.createElement('button')
    // button.innerHTML = 'Click me and check the console'
    // button.onclick = printMe
    // element.appendChild(button)
    element.innerHTML = [
        'Hello webpack',
        '5 cubed is equal to ' + cube(5)
    ].join('\n\n')
    //将图片添加到现有的 div
    // var myIcon = new Image()
    // myIcon.src = Icon
    // element.appendChild(myIcon)
    // console.log(Data)
    return element
}

// document.body.appendChild(component())
let element = component()
document.body.appendChild(element)

if(module.hot) {
    module.hot.accept('./print.js',function(){
        console.log("Accepting the updated printMe module!")
        // printMe()
        document.body.removeChild(element)
        element = component()
        document.body.appendChild(element)
    })
}
