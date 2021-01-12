(function () {
    var pusher = new Pusher('App_key', {
        authEndpoint: '/pusher/auth',
        cluster: 'cluster',
        encrypted: true
    });
})();
