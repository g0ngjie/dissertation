//得到字符总数
export function getChars(str) {
    var i = 0;
    var c = 0.0;
    var unicode = 0;
    var len = 0;
    if (str == "" || str == null) {
        return 0;
    }

    len = str.length;
    for (i = 0; i < len; i++) {
        unicode = str.charCodeAt(i);
        if (unicode < 127) {
            //判断是单字符还是双字符
            c += 1;
        } else {
            //chinese
            c += 2;
        }
    }
    return c;
}