/**
 * Created by Ivaylo on 5/20/2018.
 */

function processCommands(comands) {

    let commandProcessor = (() => {
        let text = '';
        return {
            append : (newText) => text += newText,
            removeStart :(count) => text = text.slice(count),
            removeEnd : (count) => text = text.substring(0, text.length - count),
            print : () => console.log(text)
        }
    })();

    let text = '';
    let object = {
        append : (newText) => text += newText,
        removeStart :(count) => text = text.slice(count),
        removeEnd : (count) => text = text.substring(0, text.length - count),
        print : () => console.log(text)
    };

    for (let command of comands) {
        let[commandName, arg] = command.split(' ');
        object[commandName](arg);
    }
}

function processCommands_01(comands) {
    let text = '';
    let object = {
        append : (newText) => text += newText,
        removeStart :(count) => text = text.slice(count),
        removeEnd : (count) => text = text.substring(0, text.length - count),
        print : () => console.log(text)
    };

    for (let command of comands) {
        let[commandName, arg] = command.split(' ');
        object[commandName](arg);
    }
}

processCommands_01(['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']);



