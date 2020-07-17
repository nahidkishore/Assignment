//assignment
//nahidkishore99@gmail.com

// feet to mile 
function feetToMile(feet){
  if(feet<0){
    console.log('Please input positive number, Distance can not be negative number');
  }
  else{
    var mile= feet/5280;
    return mile;
  }

  
}
var checkMile=feetToMile(47520);
console.log(checkMile + ' miles ');



// wood calculator

function woodCalculator(chair,table,bed){
  var woodCount=1*chair + 3*table +5*bed;
  if(chair<=0 && table<=0 && bed<=0){
    console.log('please input positive value');
  }
  else{
    return woodCount;
  }
}
var totalWood=woodCalculator(3,4,5);
console.log('You will need total to  '+ totalWood +' number of wood');

// brickCalculator

function brickCalculator(building){
  if(building>=0 && building<=10){
    var topTen=1000*15;
    return topTen;
  }
  else if(building>=11 && building<=20)
  {
    var topTwenty=1000*12;
    return topTwenty;

  }
  else if (building>20){
    var other=1000*10;
    return other;

  }
}
var brickCount=brickCalculator(44);
console.log('you will need: ' + brickCount + ' bricks'); 


//tinyFriends
function tinyFriend(friend){
 var minimum=friend[0];
 for(var i=0;i<friend.length; i++){
   var name=friend[i];
   if(name.length<minimum.length){
     minimum=name;
   }
   
 }
 return minimum;
 

}
var minValue=tinyFriend(['Nil', 'nahid','taniaa','Hridoyy','Jannatt','nahidIslam']);

console.log('Your Smallest word friend name : '+ minValue);


