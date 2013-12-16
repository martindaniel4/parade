if (Meteor.isClient) {

var paradeData =  [
  {
    "value":"http://www.youtube.com/watch?v=kKv127gtA70",
    "date":"28/11/2013"
  },
  {
    "value":"http://fr.wikihow.com/nettoyer-une-%C3%A9ponge",
    "date":"29/11/2013"
  },
  {
    "value":"L'architecture c'est, avec des matériaux bruts, établir des rapports émouvants",
    "date":"30/11/2013"
  },
  {
    "value":"Marcel Duchamp et Yves Tanguy prirent un jour un peu de cocaine pour se donner le courage d'aller, pour la première fois voir André Breton qui ne comprit rien à leur discours.",
    "date":"01/12/2013"
  },
  {
    "value":"This world is wild at heart and weird on top",
    "date":"02/12/2013"
  },
  {
    "value":"Bourriaud est un con.",
    "date":"03/12/2013"
  },
  {
    "value":"http://www.youtube.com/watch?v=z-Lhu4JFePk",
    "date":"04/12/2013"
  },
  {
    "value":"http://bit.ly/ImkE9k",
    "date":"05/12/2013"
  },
  {
    "value":"http://bit.ly/1iQBpaj",
    "date":"06/12/2013"
  },
  {
    "value":"FLCG. Front de Libération du Cheddar Grillé. ",
    "date":"07/12/2013"
  },
  {
    "value":" ..et c etait comme un concentre de mots justes qui font du bien",
    "date":"08/12/2013"
  },
  {
    "value":"http://bit.ly/1c7umXR",
    "date":"09/12/2013"
  },
  {
    "value":"amour\nbella\naime\nenvie\nbelle\ndormir\nbabe\nbaby",
    "date":"10/12/2013"
  },
  {
    "value":"Note que..",
    "date":"11/12/2013"
  },
  {
    "value":"Doucement, y a mes parents juste à côté",
    "date":"12/12/2013"
  },
  {
    "value":"l'histoire fascinante de la moon cup",
    "date":"13/12/2013"
  },
  {
    "value":"Ah non, ça c'est ton casque",
    "date":"14/12/2013"
  },
  {
    "value":"Di u vi salve regina\nEe madre univerzale\nPerqui favore zizare\nAl paradizu (bis)\n\nVo oi siete joya i risu\nDi i tutti scunzolati\nDi tutti tribulati\nLunica speme (bis)\n\n",
    "date":"15/12/2013"
  },
  {
    "value":"Il n'y a pas que la moustache qui m'excite",
    "date":"16/12/2013"
  },
  {
    "value":"http://www.youtube.com/watch?v=wHxnvxclme0",
    "date":"17/12/2013"
  },
  {
    "value":"Sometimes there's a man… I won't say hero, 'cause what's a hero? but sometimes there's a man, and I'm talking about the Dude here, sometimes there's a man… ",
    "date":"18/12/2013"
  },
  {
    "value":"http://bit.ly/1eyl8nv",
    "date":"19/12/2013"
  },
  {
    "value":"10 novembre, 20h30 et deux bafles à descendre",
    "date":"20/12/2013"
  },
  {
    "value":"http://www.cndp.fr/uploads/pics/08_02.jpg",
    "date":"21/12/2013"
  },
  {
    "value":"Je m'ennuie de toi",
    "date":"22/12/2013"
  },
  {
    "value":"http://bit.ly/1b3WMgN",
    "date":"23/12/2013"
  }
]
var format = d3.time.format("%d/%m/%Y");
var today = new Date();

  Template.hello.greeting = function () {
    
   var paradeNest = d3.nest().key(function(d) {return d.date;}).map(paradeData);

    if (paradeNest[format(today)] != undefined) {

    return paradeNest[format(today)][0].value;

      } else {

        return "désolé petit baby, la parade n'a pas encore commencé.";

      }

  };

  Template.hello.date = function() {

   var diffDate = Math.round((format.parse("01/01/2014")-today)/(1000*60*24*60));

    return " - " + diffDate + " jours";

  };

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
