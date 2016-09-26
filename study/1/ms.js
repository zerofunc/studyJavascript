var afterCheck = function(){
    var result;
    var testValue;

    testValue= check();

    if( testValue != 'ok') result='개망';
    else  result='ㅇㅋ';

    return result;
}