function solve(selector) {
    let target = $(selector);
    while ((target = target.children()).length){}

    let element = target.end().eq(0);

    while (!element.is($(selector))){
        element.addClass('highlight');
        element = element.parent()
    }
    element.addClass('highlight');
}