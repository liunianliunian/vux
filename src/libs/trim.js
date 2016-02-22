export default function (str, replaceBreak) {
  str = str.replace(/^\s\s*/, '')
  var ws = /\s/
  var i = str.length
  while (ws.test(str.charAt(--i)))
  var rs = str.slice(0, i + 1)
  if (!replaceBreak){
    return rs
  }else{
    return rs.replace(/(?:\r\n|\r|\n)/g, '')
  }
}
