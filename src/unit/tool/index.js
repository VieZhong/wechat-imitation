export function cutOffText(text, tatalCharLen, extChar) {
    var i = 0,
        textLen = text.length,
        extDot = '',
        textCharLen = 0;
    for (i, textLen; i < textLen; i++) {
        if (textCharLen >= tatalCharLen) {
            extDot = extChar || '...';
            break;
        }
        if (text.charCodeAt(i) < 27 || text.charCodeAt(i) > 126) { //全角
            textCharLen += 2;
        } else {
            textCharLen++;
        }
    }
    return text.substring(0, i) + extDot;
}