class Quiz {
  constructor(){
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide()  
    background("cyan")
    var title= createElement('h2');
    title.html=("whoquizz");
    title.position=(width/2+70,0);
    Contestant.getPlayerInfo()
    if(contestantInfoRef==undefined){
      contestant=new contestant()
    }
    if(this.input2==answer){
    contestantinforef=("green");
    }  
  }

}
