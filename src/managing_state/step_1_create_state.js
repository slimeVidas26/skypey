////////////////////////////////////////////////////

const state = {
    user: [
        {
            contact1: "Alex",
            messages: ['msg1', 'msg2', 'msg3']
        }, {
            contact2: "John",
            messages: ['msg1', 'msg2', 'msg3']
        }
    ]
}

////////////////////////////////////////////////////

const state = {
    user: [],

    messages: [
        'msg1', 'msg2', 'msg3'
    ],
    contacts: ["contact1", "contact2"]
}

////////////////////////////////////////////////////////////

const state = {
    user: [],

    messages: [
        {
            messageTo: "contact1",
            text: "Hello contact1"
        },
         {
            messageTo: "contact2",
            text: "Hello contact2"
        }
    ],
    contacts: ["contact1", "contact2"]
}

//////////////////////////////////////////////////////

const state = {
    user: {
        name,
        email,
        profile_pic,
        status,
        user_id
    },

    messages: [
        {
            messageTo: "contact1",
            text: "Hello contact1"
        }, {
            messageTo: "contact2",
            text: "Hello contact2"
        }
    ],
    contacts: [
        {
            name,
            email,
            profile_pic,
            status,
            user_id
        }, {
            name,
            email,
            profile_pic,
            status,
            user_id_2
        }
    ]
}
////////////////////////////////////////////////////////
const state = {
    user: {
        name,
        email,
        profile_pic,
        status,
        user_id
    },

    messages: [
        {
            messageTo: "contact1",
            text: "Hello contact1"
        }, {
            messageTo: "contact2",
            text: "Hello contact2"
        }
    ],
    contacts: {
        user_id: {
            name,
            email,
            profile_pic,
            status,
            user_id
        },
        user_id_2: {
            name,
            email,
            profile_pic,
            status,
            user_id_2
        }
    }
}
/////////////////////////////////////////////////

const state = {
    user: {
        name,
        email,
        profile_pic,
        status,
        user_id
    },

    messages: {
        user_id: {
            text: "Hello contact1",
            is_user_msg: false
        },
        user_id_2: {
            text: "Hello contact2",
            is_user_msg: false

        }
    },
    contacts: {
        user_id: {
            name,
            email,
            profile_pic,
            status,
            user_id
        },
        user_id_2: {
            name,
            email,
            profile_pic,
            status,
            user_id_2
        }
    }
}

/////////////////////////////////////////////////

const state = {
    user: {
        name,
        email,
        profile_pic,
        status,
        user_id
    },

    messages: {
        user_id: {
            0:{
            text: "Hello contact1",
            is_user_msg: false
            }
        },
        user_id_2: {
            1:{
            text: "Hello contact2",
            is_user_msg: false
            }

        }
    },
    contacts: {
        user_id: {
            name,
            email,
            profile_pic,
            status,
            user_id
        },
        user_id_2: {
            name,
            email,
            profile_pic,
            status,
            user_id_2
        }
    }
}

console.table(state)