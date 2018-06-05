function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

    var isAnagram = newString.length > 0 && (newString.toLowerCase().split('').sort().join('') === str.toLowerCase().split('').sort().join(''));

    console.log(isAnagram);
    return newString;

}
reverseString('Ala');