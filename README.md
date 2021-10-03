# ticketweb-frontstage
Demo: [方格子劇場](https://hoyi-23.github.io/ticketweb-frontstage/#/)

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
### 首頁
  1. Banner(輪播)/Navbar
    ![](https://i.imgur.com/MQ7iCJK.jpg)
  2. 近期活動
    ![](https://i.imgur.com/rHUDuEx.jpg)
### 分類頁面
  1. 多條件篩選
    ![](https://i.imgur.com/Ssm24vz.png)

### 購物車
  1. 購物車為空時，顯示推薦活動
    ![](https://i.imgur.com/2zBOIfj.jpg)
  2. 購物車
    ![](https://i.imgur.com/zt0qc4R.png)
### 商品資訊頁面
  1. 單個商品頁面
    ![](https://i.imgur.com/g52nlYF.png)

### 結帳流程
  1. 可帶入已設定之用戶資訊(姓名/email)
    ![](https://i.imgur.com/qshEaFi.png)
  2. 支付方式為信用卡
    ![](https://i.imgur.com/1w9FSe9.png)
### 會員專區
  1. 登入註冊
    ![](https://i.imgur.com/6MTjI5u.png)
  2. 會員資訊
    ![](https://i.imgur.com/bhBt0IS.png)
  3. 會員票券
    ![](https://i.imgur.com/bnAnWU0.png)

## 主要遇到的困難
### SVG hover操作 (解決)
   我想要做顏色改變，放入SVG後卻發現無法使用animation等等
   因為我使用svg-sprite-loader，這個套件可以讓我們在引入上簡單很多，完成設定後，只需要使用<icon>寫入檔案名字即可。
   icon 的顏色是吃父層的 css:color ，想要改變icon 顏色，要把 SVG 檔裡的 fill 或 stroke 改成 currentColor

### 多條件篩選:(解決)
    解決的方式 -> 釐清邏輯
    這次的多條件篩選分別為 關鍵字/排序方式/類別
    我的想法是一個一個篩選下來，先依照類別過濾，再依輸入框過濾，再判斷排序方式。
    若有篩選就會改變結果，監聽每一項結果的改變，就可以做到多個條件的篩選

### firebase updatePhoneNumber
    研究中

### firebase 載入問題

  ```
  @firebase/firestore: Firestore (8.10.0): Could not reach Cloud Firestore backend. Backend didn't respond within 10 seconds.
  This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.
  ```
  我一直擔心是因為firestore的儲存檔案限制，後來我的後台改用firebase storage來儲存較大的檔案(圖檔)，用這個方法來試試看!

    
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
