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
        subscribedUsers: []
    }

    var publicChannel = pusher.subscribe('update');

    const chatBody = $(document)
    const chatRoomsList = $('#rooms')
    const chatReplyMessage = $('#replyMessage')

    const helpers = {
        clearChatMessages: () => {
            $('#chat-msgs').html('')
        },

        displayChatMessage: (message) => {
            if (message.email === chat.email) {
                $('#chat-msgs').prepend(
                    `<tr>
                        <td>
                            <div class="sender">${message.sender} @ <span class="date">${message.createdAt}</span></div>
                            <div class="message">${message.text}</div>
                        </td>
                    </tr>`
                )
            }
        },

        loadChatRoom: evt => {
            chat.currentRoom = evt.target.dataset.roomId
            chat.currentChannel = evt.target.dataset.channelId
            chat.endUserName =  evt.target.dataset.userName
            if (chat.currentRoom !== undefined) {
                $('.response').show()
                $('#room-title').text('Write a message to ' + evt.target.dataset.userName+ '.')
            }

            evt.preventDefault()
            helpers.clearChatMessages()
        },
    }
})();
