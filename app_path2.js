var path = require('path');
//抓目錄路徑
console.log(path.dirname('/xx/yy/zz.js'));
//路徑合併
console.log(path.join(__dirname, '/xx'));
//抓檔名
console.log(path.basename('/xx/yy/zz.js'));
//抓附檔名
console.log(path.extname('/xx/yy/zz.js'));

//分析路徑
console.log(path.parse('/xx/yy/zz.js'));