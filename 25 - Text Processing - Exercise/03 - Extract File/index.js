function extractFile(str) {
    let arr = str.split('\\');
    let element = arr.pop();
    let processed = element.split('.');
    let extension = processed.pop();
    let name = processed.join('.');
    
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');