# Mutnemom

> 2021년 7월 13일 ~ 9월 6일<br>
> [Momentum](https://chrome.google.com/webstore/detail/momentum/laookkfknpbbblfpciffpaejjkokdgca) clone using `Vanilla JS`<br>
> 수정을 위한 준비 중입니다. 이전 코드는 `legacy` 폴더에서 확인할 수 있습니다.

## 🖇️ Contents
1. [Technical Stack](#Stack)
2. [Features](#Features)
   1. [Clock](#1-Clock)
   2. [Save/Load user name](#2-Save-and-Load-user-name)
   3. [Todo List](#3-TODO-List)

<!-- <h3 align='center'>Desktop Preview</h3>
<p align='center'>
  <img src='./assets/preview_desktop.GIF'/>
</p>
<h3 align='center'>Mobile Preview</h3>
<p align='center'>
  <img src='./assets/preview_mobile.GIF'/>
</p> -->

## 💻 Stack
<p>
  <img src="https://img.shields.io/static/v1?label=&message=HTML&color=important&logo=html5&logoColor=FFFFFF"/>
  <img src="https://img.shields.io/static/v1?label=&message=CSS&color=3178C6&logo=css3&logoColor=FFFFFF"/>
  <img src="https://img.shields.io/static/v1?label=&message=Javascript&color=F1E05A&logo=javascript&logoColor=FFFFFF"/>
</p>

## 💡 Features

### 1. Clock
   * Date 객체와 setInterval 함수를 통한 현재 시간 표시
   ```javascript
   // get current time
   function getCalendar() {
   
     // ...
     
     const date = new Date()
     const year = date.getFullYear()
     const month = date.getMonth() + 1
     const day = date.getDate()
     const dayOfWeek = date.getDay()
     const hour = date.getHours()
     const minute = date.getMinutes()
     const sec = date.getSeconds()
     
     // ...
   }
   
   // update time per second
   setInterval(getCalendar, 1000)
   ```
   
### 2. Save and Load user name
   * `localStorage` 활용
      * 유저 이름이 비어 있을 경우 `input` 태그를 통해 유저 이름 입력, `localStorage`에 저장
      * 유저 이름이 있을 경우 `input` 태그 숨김, 불러와서 유저 이름 표시
      * 유저 이름을 클릭하여 기존 저장 이름 제거 후 새로운 이름 설정 가능
   ```javascript
   // set user name
   localStorage.setItem(USER_NAME, user_name)
   
   // get user name
   localStorage.getItem(USER_NAME)
   ```
   
### 3. TODO List
  * todo 추가/제거
  * todo가 완료 표시
  * 완료 todo를 완료되지 않은 상태로 표시
  * 추가된 todo `localStorage` 저장, 화면이 다시 로딩되도 화면에 표시

### 4. Future works
   1. 페이지를 로딩할 때 저장된 이미지가 랜덤하게 배경으로 설정됨
   2. 브라우저 위치 권한 허가 및 날씨 API를 통한 현재 위치의 날씨 표시
