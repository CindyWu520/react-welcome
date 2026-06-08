# React

## what is React

Library, not framework (unlike Angular is a Framework). Developed by facebook.
It's SPA (Single page application). Made from reusable components. </br>

Benefit:
- component: has logic and UI
- statement
- vitual DOM (document object modle, HTML), more fast, only update the change part instead of whole page
- easy to mantain
- flexible

## set up

npm create vite@latest --react --javaScript
npm run dev

## JSX

### JSX dynamic expression

- variable
- function
- ternaryOperator
- list

## Components
### props
Parent component can pass props to children component.
Simple and eazy to understand.

### 回调函数
父组件传函数给子组件，子组件通过调用函数把数据回传给父组件 eg.childToParent.jsx

### lifeCycle
- mounting: add to dom
- updating: change of state/props, update UI. !important
- unmounting: remove from dom

## Hooks
Introduced from React 16.8. 
允许在函数组件中使用状态和生命周期，替代了类组件中（state，lifecycle）中复杂的状态管理和生命周期

### useState
状态钩子，适用于组件需要修改状态
比如：输入框内容，计数器

### useEffect
副作用钩子，control lifeCycle of component </br>
useEffect接受两个参数：回调参数，依赖数组（决定when to execute useEffect）</br>
use senario:
- like send reuqest get data from database
- add event listener
- setTimeout or setInterval
- clear event listener, clear timeout

#### 依赖数组
- 无依赖: 每次组件渲染后都会执行
- 空数组 (empty array): only executed when mounted (only once); used in send request to server 
- 有依赖项: event listener
- 清理副作用

### useContext
access share data in react context. avoid prop drilling, 
- theme
- user information
- language

## questions
- devDependencies vs denpendencies
- onclick={changeNameOnClick} instead of {changeNameOnClick()}


![useState](./docs/useState.png)
![state-update-rules](./docs/state-update-rules.png)
![state-is-immutable](./docs/state-is-immutable.png)
