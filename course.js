document.addEventListener("DOMContentLoaded", function() {
  // 課表資料：每一列代表一個時段（A~Z），每一欄代表一個星期（假設為星期一到星期五）
  let courseB1136027 = [
    ["0",     "0",     "0",     "0",     "0"],
    ["DA305", "DA208", "0",     "DA208", "0"],
    ["DA305", "DA208", "0",     "DA208", "PE Class"],
    ["DA305", "DA208", "0",     "DA208", "PE Class"],
    ["DA208", "0",     "DA208", "DC103a", "DC211c"],
    ["DA208", "0",     "DA208", "DC103a", "DC211c"],
    ["DA208", "0",     "DA208", "DC103a", "0"],
    ["DA208", "0",     "DA208", "0",     "0"],
    ["0",     "0",     "DA208", "0",     "0"],
  ]; // 余思穎
  
  let courseB11013059 = [
    ["0",   "DH229", "0",   "0",   "0"],
    ["0",   "DH229", "0",   "0",   "0"],
    ["0",   "0",     "0",   "0",   "0"],
    ["0",   "0",     "0",   "0",   "0"],
    ["ES008","DH229", "0",   "0",   "0"],
    ["ES008","DH229", "0",   "0",   "0"],
    ["ES008","EB105", "0",   "0",   "0"],
    ["0",   "EB105", "0",   "0",   "0"],
    ["0",   "EB105", "0",   "0",   "0"],
  ]; // 戴丞漢
  
  let courseB11337005 = [
    ["0","0","0","0","0"],
    ["DA106","0","0","MA308-5","0"],
    ["DA106","0","0","MA308-5","PE Class"],
    ["DA106","0","0","MA308-5","PE Class"],
    ["DA106","DC124b","0","DA106","DA106"],
    ["DA106","DC124b","0","DA106","DA106"],
    ["DA106","DA106","0","DA106","FB201"],
    ["DA106","DA106","DA103","DA106","FB201"],
    ["DA106","DA106","DA103","0","0"],
  ]; // 孫英絜
  
  let courseB11112013 = [
    ["0","0","0","0","0"],
    ["EL104","EL310","MD103","0","EL106"],
    ["EL104","EL310","MD103","VT223","EL106"],
    ["EL104","EL310","MD103","VT223","EL106"],
    ["EL123","EL101","DH123","0","VT223"],
    ["EL123","EL101","DH123","0","VT223"],
    ["EL123","0","0","0","0"],
    ["0","0","DA305","0","0"],
    ["0","0","DA305","0","0"],
  ]; // 賴炯智
  
  let courseB11124001 = [
    ["0","0","0","0","0"],
    ["0","MB104","0","MD102","0"],
    ["0","MB104","0","MD102","0"],
    ["0","MB104","0","MD102","0"],
    ["MB103","MA314","MD102","0","0"],
    ["MB103","MA314","MD102","0","0"],
    ["0","MA314","MD102","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
  ]; // 楊文雅
  
  let courseB11300051 = [
    ["0","0","0","0","0"],
    ["DS323","MA314","0","AI004","0"],
    ["DS323","MA314","0","AI004","DH303"],
    ["DS323","MA314","0","AI004","DH303"],
    ["0","EN401","0","PE Class","EB109"],
    ["0","EN401","0","PE Class","EB109"],
    ["0","EN401","0","EN401","EB109"],
    ["0","0","0","EN401","0"],
    ["0","0","0","EN401","0"],
  ]; // 羅則倫
  
  let courseB10900005 = [
    ["0","0","0","0","0"],
    ["0","DC211c","0","MA314","0"],
    ["0","DC211c","0","MA314","0"],
    ["0","DC211c","0","MA314","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
  ]; // 陳政文
  
  let courseB11015113 = [
    ["0","0","0","0","0"],
    ["FB203","MB102","0","MD304","0"],
    ["FB203","MB102","0","MD304","0"],
    ["FB203","MB102","0","MD304","0"],
    ["FB201","0","0","DC211c","VT223"],
    ["FB201","0","0","DC211c","VT223"],
    ["0","DH123","DH123","DC211c","0"],
    ["0","DH123","DH123","DC211c","0"],
    ["0","0","0","0","0"],
  ]; // 黃子維
  
  // 當使用者點擊「查詢」按鈕時
  document.getElementById("searchBtn").addEventListener("click", function() {
    // 根據使用者選擇的課表來決定查詢哪個陣列
    let scheduleType = document.getElementById("scheduleSelect").value;
    let courseData;
    if (scheduleType === "B1136027") {
      courseData = courseB1136027;
    } else if (scheduleType === "B11013059") {
      courseData = courseB11013059;
    } else if (scheduleType === "B11337005") {
      courseData = courseB11337005;
    } else if (scheduleType === "B11112013") {
      courseData = courseB11112013;
    } else if (scheduleType === "B11124001") {
      courseData = courseB11124001;
    } else if (scheduleType === "B11300051") {
      courseData = courseB11300051;
    } else if (scheduleType === "B10900005") {
      courseData = courseB10900005;
    } else if (scheduleType === "B11015113") {
      courseData = courseB11015113;
    }
    
    // 取得下拉選單中選擇的時段與星期索引值
    let timeSlotIndex = document.getElementById("timeSlotSelect").value;
    let weekdayIndex = document.getElementById("weekdaySelect").value;
    
    let resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";  // 清除先前的結果

    // 取得選擇時段的課表資料
    let row = courseData[timeSlotIndex];
    if (row) {
      // 取得該時段指定星期的課程
      let course = row[weekdayIndex];
      if (course !== "0") {
        resultDiv.textContent = "他會出現在： " + course;
      } else {
        resultDiv.textContent = "我很閒，快來抓我！";
      }
    } else {
      resultDiv.textContent = "查無此時段的課表資料";
    }
  });
});

  
  
  