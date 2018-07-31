const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

var db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.setAHostB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (club a's id)
		b:String (event b's id)
	}
	*/
    const clubAID = data.a
    const eventBID = data.b
    return Promise.all([writeAHostEventB(clubAID, eventBID, 'host')])
});

exports.setAJoinClubB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (club b's id)
	}
	*/
    const userAUID = data.a
    const clubBID = data.b
    return Promise.all([writeAJoinClubB(userAUID, clubBID, 'member')])
});

exports.setAJoinEventB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (event b's id)
	}
	*/
    const userAUID = data.a
    const eventBID = data.b
    return Promise.all([writeAJoinEventB(userAUID, eventBID, 'joiner')])
});

exports.setAUnhostB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (club a's id)
		b:String (event b's id)
	}
	*/
    const clubAID = data.a
    const eventBID = data.b
    return Promise.all([writeAUnhostEventB(clubAID, eventBID, 'host')])
});

exports.setADisjoinClubB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (club b's id)
	}
	*/
    const userAUID = data.a
    const clubBID = data.b
    return Promise.all([writeADisjoinClubB(userAUID, clubBID, 'member')])
});

exports.setADisjoinEventB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (event b's id)
	}
	*/
    const userAUID = data.a
    const eventBID = data.b
    return Promise.all([writeADisjoinEventB(userAUID, eventBID, 'joiner')])
});

exports.setAFollowB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (user b's uid)
	}
	*/
    const userAUID = data.a
    const userBUID = data.b
    if (userAUID === userBUID) {
        return
    }
    return Promise.all([writeAFollowing(userAUID, userBUID), writeBFollower(userAUID, userBUID)])
});

exports.setAUnfollowB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (user b's uid)
	}
	*/
    const userAUID = data.a
    const userBUID = data.b
    if (userAUID === userBUID) {
        return
    }
    return Promise.all([writeAUnfollowing(userAUID, userBUID), writeBUnfollower(userAUID, userBUID)])
});

exports.ifAFollowedB = functions.https.onCall((data, context) => {
	/*
	Data = {
		a:String (user a's uid)
		b:String (user b's uid)
	}
	return = {
		value:Bool (if a followed b or not)
	}
	*/
    const userAUID = data.a
    const userBUID = data.b
    return db.collection('users').doc(userAUID).collection('following').get().then(snap => {
        var returnValue = false
        snap.forEach(doc => {
            if (doc.data().id === userBUID) {
                returnValue = true
            }
        })
        return {
            value: returnValue
        }
    })
});

exports.getPostFeedREFsForUser = functions.https.onCall((data, context) => {
	/*
		Data = {
			UID:String (this user's uid)
		}

		return = {
			value:String (document id for posts in posts collection)
		}
	*/
    return getFollowingUserUIDsForUser(data.UID).then(followingUserUIDList => {
        console.log("followingUserUIDList", followingUserUIDList)
        var returnValue = []
        var returnPromise = []

        returnPromise.push(db.collection('users').doc(data.UID).collection('posts').get().then(snap => {
            snap.forEach(doc => {
                returnValue.push(doc.data().ref.id)
            })
            return null
        }))

        followingUserUIDList.forEach(followingUID => {
            returnPromise.push(db.collection('users').doc(followingUID).collection('posts').get().then(snap => {
                snap.forEach(doc => {
                    returnValue.push(doc.data().ref.id)
                })
                return null
            }))
        })

        return Promise.all(returnPromise).then(_ => {
            return {
                value: returnValue
            }
        })
    })
});

//helper functions

function writeAHostEventB(clubAID, eventBID, position) {
    return db.collection('club_event').doc(clubAID + eventBID).set({
        club: clubAID,
        event: eventBID,
        avaliable: true
    })
}

function writeAJoinEventB(userAUID, eventBID, position) {
    return db.collection('user_event').doc(userAUID + eventBID).set({
        user: userAUID,
        event: eventBID,
        avaliable: true,
        position: 'joiner'
    })
}

function writeAJoinClubB(userAUID, clubBID, position) {
    return db.collection('user_club').doc(userAUID + clubBID).set({
        user: userAUID,
        club: clubBID,
        avaliable: true,
        position: 'member'
    })
}

function writeAUnhostEventB(clubAID, eventBID) {
    return db.collection('club_event').doc(clubAID + eventBID).update({
        avaliable: false
    })
}

function writeADisjoinEventB(userAUID, eventBID) {
    return db.collection('user_event').doc(userAUID + eventBID).update({
        avaliable: false
    })
}

function writeADisjoinClubB(userAUID, clubBID) {
    return db.collection('user_club').doc(userAUID + clubBID).update({
        avaliable: false
    })
}

function getFollowingUserUIDsForUser(uid) {
    return db.collection('users').doc(uid).collection('following').get().then(snap => {
        var returnValue = []
        snap.forEach(doc => {
            returnValue.push(doc.data().id)
        })
        return returnValue
    })
}

function writeAFollowing(userAUID, userBUID) {
    return db.collection('users').doc(userAUID).collection('following').doc(userBUID).set({
        id: userBUID
    })
}

function writeBFollower(userAUID, userBUID) {
    return db.collection('users').doc(userBUID).collection('follower').doc(userAUID).set({
        id: userAUID
    })
}

function writeAUnfollowing(userAUID, userBUID) {
    return db.collection('users').doc(userAUID).collection('following').doc(userBUID).delete()
}

function writeBUnollower(userAUID, userBUID) {
    return db.collection('users').doc(userBUID).collection('follower').doc(userAUID).delete()
}

