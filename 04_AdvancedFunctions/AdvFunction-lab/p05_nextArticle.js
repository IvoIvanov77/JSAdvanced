/**
 * Created by Ivaylo on 5/20/2018.
 */

function getArticleGenerator(articles) {
    return () => {
        if(articles.length > 0){
            $('#content').append($(`<article>${articles.shift()}</article>`));
        }
    }
}

