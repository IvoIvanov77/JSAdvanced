function wikiParser(selector) {

    let text = $(selector).text();

    let boldPattern = /'''(.*?)'''/g;
    let italicPattern = /(?<!')''([^']+?)''/g;
    let h1Pattern = /(?<!=)=([^=]+?)=/g;
    let h2Pattern = /(?<!=)==([^=]+?)==/g;
    let h3Pattern = /(?<!=)===([^=]+?)===/g;
    let linkPattern = /\[\[([^|\[\]]*?)]]/g;
    let pipedLinkPattern = /\[\[([^\]]*)\|(.*?)]]/g;

    text = text.replace(boldPattern, "<b>$1</b>")
        .replace(italicPattern, "<i>$1</i>")
        .replace(h1Pattern, "<h1>$1</h1>")
        .replace(h2Pattern, "<h2>$1</h2>")
        .replace(h3Pattern, "<h3>$1</h3>")
        .replace(linkPattern, '<a href="/wiki/$1\">$1</a>')
        .replace(pipedLinkPattern, '<a href="/wiki/$1\">$2</a>');

    $(selector).html(text);
}


