(function () {
    var pusher = new Pusher('App_key', {
        authEndpoint: '/pusher/auth',
        cluster: 'cluster',
        encrypted: true
    });

    let chat = {
        name: undefined,
        email: undefined,
        endUserName: undefined,
        currentRoom: undefined,
        currentChannel: undefined,
        subscribedChannels: [],
        subscribedUser: []
    }

    var publicChannel = pusher.subscribe('update')

    const chatBody = $(document)
    const chatRoomList = $('#rooms')
    const chatReplyMessage = $('#replyMessage')

    const helpers = {
        clearChatMessages: () => {
            $('chat-msgs').html('')
        },
    }
})();
