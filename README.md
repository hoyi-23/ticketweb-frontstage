# ticketweb-frontstage
Demo: 

登入帳號: test@test.com
登入密碼: 123456

也可以自行註冊

## 運用
1. vue cli3 快速建構專案
2. firebase (authentication / firestore) 做為後端
3. Sass 做樣式管理 ( 搭配bootstrap5 自訂修改樣式)
4. Vue router 實現SPA
5. VueX 實現資料管理
6. 使用AI製作輸出SVG檔案，並使用SVG-sprite-loader將使用SVG簡單化


## 完成功能
1. navbar hover效果
2. 連接兩個firebase專案(後台: 管理商品 / 前台: 顧客會員與訂單)
3. 會員登入與註冊;會員可以自行修改資料(姓名/電話)
4. 使用LocalStorage記住目前登入的會員資訊與購物車內容(結帳時可直接帶入會員資料)
5. 多條件篩選( 包含 關鍵字/排序方式/商品類別)
6. Loading樣式，增加使用者體驗

## 預計完成
1. SVG animation
2. 手機用戶的互動效果(如何取代hover)
3. 會員忘記密碼與修改密碼(firebase)

## 專案預覽
1. 首頁

2. 分類頁面

3. 會員登入/註冊/會員專區

4. 購物車

5. 結帳流程

## 主要遇到的困難
1. SVG hover動畫操作
   正在研究中..

2. 多條件篩選:
    解決的方式 -> 釐清邏輯
    這次的多條件篩選分別為 關鍵字/排序方式/類別
    我的想法是一個一個篩選下來，先依照類別過濾，再依輸入框過濾，再判斷排序方式。
    若有篩選就會改變結果，監聽每一項結果的改變，就可以做到多個條件的篩選


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
