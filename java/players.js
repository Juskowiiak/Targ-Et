//sei como faz de um jeito mais facil, mas vou optar por este
// (pratica incorreta)
// DECLARACAO DOS PLAYERS
let mod1 = document.querySelector("#mod1");
let mod2 = document.querySelector("#mod2");
let mod3 = document.querySelector("#mod3");
let mod4 = document.querySelector("#mod4");
let mod5 = document.querySelector("#mod5");
let mod6 = document.querySelector("#mod6");
let mod7 = document.querySelector("#mod7");
let mod8 = document.querySelector("#mod8");
let mod9 = document.querySelector("#mod9");
let mod10 = document.querySelector("#mod10");
//DADOS INICIAIS
document.querySelector("#player-video").src = "./video/modelA.mp4";
document.querySelector("#player-pic").src = "./imagem/modelA.png";
document.querySelector(".article-me-info-stats-nome").innerHTML = "Steve Fox";
document.querySelector(".article-me-info-stats-info-text1").innerHTML =
  "<span>S</span>teve was a young British boxer enjoying his run as the middleweight champion of the world. Adopted during infancy, Steve sought the identity of his biological parents, as well as the origin of the scar on his arm.<br><br>";
document.querySelector(".article-me-info-stats-info-text2").innerHTML =
  "<span>S</span>teve entered The King of Iron Fist Tournament 4 to show off his strength to the world and find out where he came from. With the help of Lei Wulong, he learned the secret of his birth. Having made a comeback as the world champion, Steve immediately decided to enter the next tournament.";

// FUNCOES EM MARCHA
mod1.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelA.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelA.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML = "Steve Fox";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>S</span>teve was a young British boxer enjoying his run as the middleweight champion of the world. Adopted during infancy, Steve sought the identity of his biological parents, as well as the origin of the scar on his arm.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>S</span>teve entered The King of Iron Fist Tournament 4 to show off his strength to the world and find out where he came from. With the help of Lei Wulong, he learned the secret of his birth. Having made a comeback as the world champion, Steve immediately decided to enter the next tournament.";
});
mod2.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelB.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelB.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML = "Hworang";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>A</span> student of Taekwondo who works out at Baek Doo San's dojang, Hwoarang makes a lot of money through dishonest gambling wagers. As part of what's called a fraud team, he and other members pick fights for money.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>O</span>ne day, members of the Mishima Group came to town, among them Jin Kazama. Hwoarang talks them into his game and is matched against Jin. Hwoarang embarrassingly can only manage a draw. He hangs his head in disbelief at the first blemish in his perfect career.";
});
mod3.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelC.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelC.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Kazuya Kasama";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>K</span>azuya was born the son of Heihachi Mishima and Kazumi Mishima and raised on the Mishima Estate, the Mishima Clan's enormous aristocratic home in Japan. Kazuya's mother loved and doted on him, as did Kazuya's grandfather, Jinpachi Mishima, who also taught him Mishima Style Fighting Karate from a young age.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>K</span>azuya's life took a turn for the worse however when he was five years old. First, his beloved grandfather disappeared, Then, Kazuya's mother was killed by Heihachi. Unbeknown to Kazuya, his mother had been tasked with stopping Heihachi from going down a warmongering path at all costs.";
});
mod4.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelD.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelD.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Jin Kazama";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>J</span>in Kazama is the son of Jun Kazama and Kazuya Mishima. During Jun's pregnancy, part of Kazuya's Devil, (which fled Kazuya when he was thrown into a volcano by his father) attempted to possess Jin, who inherited his father's Devil Gene.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>W</span>hen Jin was fifteen years old, Jun sensed the approach of a great evil. Preparing for the worst, she informed Jin of his origins and told him that, if anything should happen to her, he was to seek out his grandfather, Heihachi Mishima.";
});
mod5.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelE.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelE.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML = "King";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>K</span>ing used to be a street brawling orphan with no care in the world except fighting. In one of his fights, King was grievously wounded and collapsed in front of a monastery. The Marquez priests took him in, saving him from death..<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>A</span>fter recovering, King realized the error of his ways and resolved to start a new life. He became a Catholic priest and renounced his old fighting ways. He then became a man with a mission: he dreamed of building an orphanage for street children, hoping to save them from becoming the kind of fighter he used to be..";
});
mod6.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelF.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelF.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Ling Xiaoyu";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>L</span>ing Xiaoyu was a young, talented martial artist who dreamed of building the perfect theme park in China. Her teacher and distant relative, Wang Jinrei, told her about Heihachi Mishima, owner of the wealthy and resource-rich Mishima Zaibatsu.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>X</span>iaoyu wished to seek him out to make her dream a reality, but was unsure how to get to Japan. Her chance came when she was on holiday with her family in Hong Kong. She left her family and stowed away on a yacht marked with the Mishima Zaibatsu’s name.";
});
mod7.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelG.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelG.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Anna Williams";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>A</span>longside her sister, Nina Williams, Anna was taught assassination arts by her father and Aikido by her mother.[1] Anna developed a deadly rivalry with Nina, and the two would often attempt to humiliate or kill one another.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>A</span>nna received a tip-off that Nina had begun working for the Mishima Zaibatsu, the corporation responsible for the war engulfing the world. Driven by the intense rivalry with her sister, Anna joined G Corporation, an organization opposing the Zaibatsu in the war.";
});
mod8.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelH.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelH.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Nina Williams";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>N</span>ina and her younger sister are from a family of assassins, and both hail from the Republic of Ireland, Nina is cold and indifferent, and ruthlessly efficient in her work. She has been the subject of numerous experiments.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>A</span>ll of these experiments affected her mind and caused emotions to be repressed, or memories and agency to be lost. This could indicate that Nina's distant personality is partially artificial in nature.Regardless, Nina exhibits little care for or trust in others, the exception to this is her father.";
});
mod9.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelI.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelI.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Michelle Chang";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>M</span>ichelle Chang is a young Native American woman of mixed descent, from Arizona. Michelle learns from her mother that her father has been killed by Heihachi's men. Outraged, Michelle entered the first King of Iron Fist Tournament determined to exact revenge on Heihachi.<br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>T</span>wo years after the first tournament, Kazuya organized a second and, determined to seize Michelle's amulet, kidnapped her mother in order to ensure her participation. His plan worked, and Michelle entered the second King of Iron Fist Tournament.";
});
mod10.addEventListener("click", function () {
  document.querySelector("#player-video").src = "./video/modelJ.mp4";
  document.querySelector("#player-pic").src = "./imagem/modelJ.png";
  document.querySelector(".article-me-info-stats-nome").innerHTML =
    "Heihachi Mishima";
  document.querySelector(".article-me-info-stats-info-text1").innerHTML =
    "<span>H</span>eihachi Mishima is the son of Jinpachi Mishima, a man who founded a family corporation that grew in size selling weapons during World War Two.He trained his son Heihachi, and Heihachi's future wife, Kazumi Hachijo. Heihachi and Kazumi married and, when Heihachi was 26, they had a son named Kazuya Mishima. <br><br>";
  document.querySelector(".article-me-info-stats-info-text2").innerHTML =
    "<span>H</span>eihachi grew to become a formidable martial artist and shrewd businessman. He coveted his father's corporation and disagreed with the direction his father had taken it. When he was around thirty years old, Heihachi launched a coup and seized control of his father's corporation from him.";
});
