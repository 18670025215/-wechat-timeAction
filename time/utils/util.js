function formatTime(date) {
  var hour = date.getHours()
  var minute = date.getMinutes()
  //var second = date.getSeconds()
  return [hour, minute].map(formatNumber).join(':')
}

function formatDate(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate() + 1
  return [year, month, day].map(formatNumber).join('-')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}



module.exports = {
  formatTime: formatTime,
  formatDate: formatDate
}

function checkStringEmpty(data) {
  if (null == data || "" == data) {
    return false;
  }
  return true;
}
