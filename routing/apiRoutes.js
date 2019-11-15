var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friends)
    });
    app.post("/api/friends", function(req, res){
        var newFriendScoreArr = req.body.scores;
        var scoreArr = [];
        var newFriendScoreTotal = 0;

        for (var i =0; i < friends.length; i++){
            currentFriend = friends[i];
            
            var friendScore = 0;
            for (var j = 0; j < currentFriend.scores.length; j++){
                friendScore += (Math.abs(parseInt(currentFriend.scores[j])- parseInt(newFriendScoreArr)));
            }
            scoreArr.push(friendScore);
        }
        for (var k = 0; k < scoreArr.length; k++){
            if (scoreArr[k] <= scoreArr[newFriendScoreTotal]){
                newFriendScoreTotal = k;
            }
        }

        var newBestie = friends[newFriendScoreTotal];
        res.json(newBestie);
        friends.push(req.body);


    })   
}