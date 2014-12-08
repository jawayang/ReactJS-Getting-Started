# React.js 開發環境

## 說明
此為React的開發環境設定，為了方便測試及開發使用。

## 目錄結構
./src 此為原始檔案
./bulid 此為編譯後的目錄

## 使用方式
開發人員可以在src目錄中，新增修改jsx檔案，
當執行grunt 的時候就會監聽src目錄，並自動編譯。
並透過browser-sync啟動瀏覽器，自動即時更新異動。

## 學習重點
透過browserify加載js檔案，合併成一個檔案。
* transform
* reactify
* browserify-shim
