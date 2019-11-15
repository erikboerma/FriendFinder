var friends = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendData)
    });
    app.post("/api/friends", function(req, res){
        var newFriendScoreArr = req.body.scores;
        var scoreArr = [];
        var newFriendScoreTotal = 0;

        for (var i =0; i < friendData.length; i++){
            currentFriend = friendData[i];
            
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

        var newBestie = friendData[newFriendScoreTotal];
        res.json(newBestie);
        friendData.push(req.body);


    })   
}