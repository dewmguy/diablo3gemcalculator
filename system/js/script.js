function loadGem(gem,level,season) {
 var title = $('.d3-tooltip h3');
 var prop0 = $('.d3-tooltip .property-0');
 var prop1 = $('.d3-tooltip .property-1');
 var prop2 = $('.d3-tooltip .property-2 .prop');
 var requiredObj = $('.d3-tooltip .property-2 .required');
 var flavor = $('.d3-tooltip .property-3');
 var levelcap = $('.d3-tooltip .levelcap');
 var input = $('#gem');
 var cap = 150;
 var type = "jewelry";
 var ranktext = "";

 switch(gem) {
 case '1':
  title.html('Bane of the Powerful');
  flavor.html('"Few things embolden the spirit like a powerful enemy lying dead at your feet." -Andomiel Chu, Master Gem Cutter of Xiansai.');
  coeff1 = 30;
  coeff2 = 1;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  prop1.html('Gain 20% increased damage for <span class="d3-color-blue"><span class="value">'+total+'</span></span> seconds after killing an elite pack.');
  if(season >= 6) { prop2.html('Gain 15% increased damage versus elites and take 15% reduced damage from elites.'); }
  else { prop2.html('Increase damage against elites by 15.0%'); }
  break;
 case '2':
  title.html('Bane of the Trapped');
  flavor.html('Lady Tu de Qing commissioned this gem from the workshops of Xiansai, saying "I prefer my targets asleep or drunk. Barring that, I\'ll take sluggish."');
  coeff1 = 15;
  coeff2 = .3;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(2);
  prop1.html('Increase damage against enemies under the effects of control-impairing effects by<span class="d3-color-blue"> <span class="value">'+total+'%</span></span>.');
  prop2.html('Gain an aura that reduces the movement speed of enemies within 15 yards by 30%.');
  break;
 case '3':
  title.html('Enforcer');
  flavor.html('This stone shares its powerful heart with those who serve the bearer.');
  coeff1 = 15;
  coeff2 = .3;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(2);
  prop1.html('Increase the damage of your pets by <span class="d3-color-blue"><span class="value">'+total+'%</span></span>.');
  if(season >= 6) { prop2.html('Your pets take 90% less damage.'); }
  else { prop2.html('Your pets take 25% less damage.'); }
  break;
 case '4':
  title.html('Gem of Efficacious Toxin');
  flavor.html('The poison mixers of Xiansai tell of a sickly gem cutter named Zhong Yi Rou who would come by their vats and scream, "I\'ll put you all out of work someday! Yes I will!"');
  coeff1 = 2000;
  coeff2 = 50;
  total = coeff1 + (coeff2 * level);
  prop1.html('Poison all enemies hit for <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage over 10 seconds.');
  if(season >= 6) { prop2.html('All enemies you poison take 10% increased damage from all sources and deal 10% less damage.'); }
  else { prop2.html('All enemies you poison take 10% increased damage from all sources.'); }
  break;
 case '5':
  title.html('Gogok of Swiftness');
  flavor.html('"You do not need to be stronger than your enemy, if you are faster of mind and body." -Queen Seondeok ');
  if(season >= 6) {
   coeff1 = .5;
   coeff2 = .01;
   total = coeff1 + (coeff2 * level);
   total = total.toFixed(2);
   prop1.html('Gain Swiftness with every attack, increasing your Attack Speed by 1% and Dodge by <span class="d3-color-blue"><span class="value">'+total+'%</span></span> for 4 seconds. This effect stacks up to 15 times.');
   prop2.html('Gain 1% Cooldown Reduction per stack of Swiftness.');
  }
  else {
   coeff1 = 50;
   coeff2 = 1;
   cap = 50;
   total = coeff1 + (coeff2 * level);
   total = total.toFixed(1);
   prop1.html('<span class="d3-color-blue"><span class="value">'+total+'%</span></span> chance on hit to gain Swiftness, increasing your Attack Speed by 1% for 4 seconds. This effect stacks up to 15 times.');
   prop2.html('Gain 1% Cooldown Reduction per stack of Swiftness.');
  }
  break;
 case '6':
  title.html('Invigorating Gemstone');
  flavor.html('"Some say this stone derives its power from its owners life force, which is shortened with each use. Well I say any fight I can walk away from is a victory, and tomorrow can take care of itself." - Famed warrior Lenalas, the day before his death.');
  if(season >= 7) {
   coeff1 = 1;
   coeff2 = .02;
   total = coeff1 + (coeff2 * level);
   total = total.toFixed(2);
   prop1.html('Each hit done increases healing received by <span class="d3-color-blue"><span class="value">'+total+'%</span></span> for 5 seconds. Stacks up to 10 times.');
   prop2.html('You are immune to control impairing effects.');
  }
  else {
   coeff1 = 30;
   coeff2 = .4;
   cap = 50;
   total = coeff1 + (coeff2 * level);
   total = total.toFixed(1);
   prop1.html('While under any control-impairing effects, reduce all damage taken by <span class="d3-color-blue"><span class="value">'+total+'%</span></span>.');
   prop2.html('Heal for 20% of maximum life when hit by a control-impairing effect.');
  }
  break;
 case '7':
  title.html('Mirinae, Teardrop of the Starweaver');
  flavor.html('"It was said that once a year, the two lovers would arrive at opposite river banks. A bridge of birds would form so they could touch. When they parted, their tears filled the land. Mirinae is one such tear. The sadness and rage in its core will only affect those close to it." -Scholar Sojin Hwang ');
  if(season >= 6) {
   coeff1 = 3000;
   coeff2 = 60;
   total = coeff1 + (coeff2 * level);
   prop1.html('15% chance on hit to smite a nearby enemy for <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage as Holy and heal yourself for 3% of your maximum life.');
   prop2.html('Smite a nearby enemy every 3 seconds.');
  }
  else {
   coeff1 = 2000;
   coeff2 = 40;
   total = coeff1 + (coeff2 * level);
   prop1.html('15% chance on hit to smite a nearby enemy for <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage as Holy.');
   prop2.html('Smite a nearby enemy every 5 seconds.');
  }
  break;
 case '8':
  title.html('Moratorium');
  flavor.html('Precious stones can sometimes be found among the peaks of Ivgorod. The harmonics of these gems, while in combat, are said to forestall death itself.');
  coeff1 = 3;
  coeff2 = .1;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(2);
  prop1.html('35% of all damage taken is instead staggered and dealt to you over <span class="d3-color-blue"><span class="value">'+total+'</span></span> seconds.');
  if(season >= 6) { prop2.html('20% chance on kill to clear all staggered damage.'); }
  else { prop2.html('10% chance on kill to clear all staggered damage.'); }
  break;
 case '9':
  title.html('Pain Enhancer');
  flavor.html('Xiangyi, most beautiful of Xiansai master gem cutters, crafted this gem in honor of a former lover. The angrier she got, the faster she worked, and the gem was ready in no time. Only after she had tested its efficacy was she finally satisfied.');
  if(season >= 6) { coeff1 = 2500; }
  else { coeff1 = 1200; }
  coeff2 = 50;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  total = commafy(total);
  prop1.html('Critical hits cause the enemy to bleed for <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage as Physical over 3 seconds.');
  prop2.html('Gain Blood Frenzy, granting you 3% increased Attack Speed for each bleeding enemy within 20 yards.');
  break;
 case '10':
  title.html('Simplicity\'s Strength');
  flavor.html('"A simple task performed a thousand times may seem a drudgery, yet the power it creates is immeasurable." - Matriarch Lian Rasmussen');
  coeff1 = 25;
  coeff2 = .5;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(2);
  prop1.html('Increase the damage of primary skills by <span class="d3-color-blue"><span class="value">'+total+'%</span></span>.');
  if(season >= 6) { prop2.html('Primary skills heal you for 4% of maximum Life on hit.'); }
  else { prop2.html('Primary skills heal you for 2% of maximum Life on hit.'); }
  break;
 case '11':
  title.html('Taeguk');
  flavor.html('"Given enough resources, one is possessed of an absolute and infinite potentiality." -High Priest Baek');
  if(season >= 6) {
   coeff1 = 2;
   coeff2 = .04;
   total = coeff1 + (coeff2 * level);
   total = total.toFixed(2);
   prop1.html('Gain <span class="d3-color-blue"><span class="value">'+total+'%</span></span> increased damage for 1.5 seconds when you spend resource on a channeled skill. This effect stacks up to 10 times.');
   prop2.html('Gain 2.0% increased Armor for every stack.');
  }
  else {
   coeff1 = 20;
   coeff2 = 1;
   total = coeff1 + (coeff2 * level);
   prop1.html('Gain 0.5% increased damage for 3 seconds after spending primary resource. This effect stacks up to <span class="d3-color-blue"><span class="value">'+total+'</span></span> times.');
   prop2.html('Gain 0.5% increased Armor for every stack.');
  }
  break;
 case '12':
  title.html('Wreath of Lightning');
  flavor.html('The madwoman Arianne believed she could cut a gem that would make for her a hood of lightning. "Lightning," she was heard to mutter. "On my head!" Her body was discovered some weeks later, with no hair, clutching this gem.');
  if(season >= 6) {
   coeff1 = 1250;
   coeff2 = 25;
  }
  else {
   coeff1 = 600;
   coeff2 = 10;
  }
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  total = commafy(total);
  prop1.html('15% chance on hit to gain a Wreath of Lightning, dealing <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage as Lightning every second to nearby enemies for 3 seconds.');
  prop2.html('While under the effect of the Wreath of Lightning, gain 25% increased movement speed.');
  break;
 case '13':
  title.html('Zei\'s Stone of Vengeance');
  flavor.html('Legend says this gem was crafted by Zei to torment fleeing enemies. Other legends claim that Zei never existed.');
  if(season >= 6) {
   coeff1 = 4;
   coeff2 = .08;
  }
  else {
   coeff1 = 4;
   coeff2 = .05;
  }
  total1 = coeff1 + (coeff2 * level);
  total1 = total1.toFixed(2);
  total2 = total1 * 5;
  total2 = total2.toFixed(2);
  prop1.html('Damage you deal is increased by <span class="d3-color-blue"><span class="value">'+total1+'%</span></span> for every 10 yards between you and the enemy hit. Maximum <span class="d3-color-blue"><span class="value">'+total2+'%</span></span> increase at 50 yards.');
  prop2.html('20% chance on hit to Stun the enemy for 1 second.');
  break;
 case '14':
  title.html('Boon of the Hoarder');
  flavor.html('"Rumors speak of a greedy Baroness who sends forth minions to collect treasure, equipped with gems to aid in gathering ever more. Boon of the Hoarder is said to be one of these precious gems." -Abd al-Hazir ');
  coeff1 = 25;
  coeff2 = 1.5;
  cap = 50;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  prop1.html('<span class="d3-color-blue"><span class="value">'+total+'%</span></span> chance on killing an enemy to cause an explosion of gold.');
  prop2.html('Gain 30% increased movement speed for 2 seconds after picking up gold.');
  break;
 case '15':
  title.html('Esoteric Alteration');
  flavor.html('Chuanyang of Xiansai designed a gem which would transport magical energies from their target to the workshop of his greatest competitor, Chau Thanh. He created several copies of this gem before he mysteriously disappeared.');
  coeff1 = 10;
  coeff2 = .5;
  cap = 100;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  prop1.html('Gain <span class="d3-color-blue"><span class="value">'+total+'%</span></span> non-Physical damage reduction.');
  prop2.html('While below half Life, your resistances to Cold, Fire, Lightning, Poison, and Arcane are increased by 75%.');
  break;
 case '16':
  title.html('Gem of Ease');
  flavor.html('This stone twinkles with low level light, inviting its bearer to dream of higher ambitions.');
  type = 'weapons';
  coeff1 = 500;
  coeff2 = 50;
  total = coeff1 + (coeff2 * level);
  prop1.html('Monster kills grant <span class="d3-color-blue"><span class="value">+</span><span class="value">'+total+'</span></span> experience.');
  prop2.html('Level Requirement Set to 1.');
  break;
 case '17':
  title.html('Molten Wildebeest\'s Gizzard');
  flavor.html('The gizzard of the molten wildebeest evinced such extraordinary properties when steeped in the correct mixture of alchemical reagents that the animals were hunted to extinction long ago.');
  coeff1 = 10000;
  coeff2 = 1000;
  total = coeff1 + (coeff2 * level);
  total = commafy(total);
  prop1.html('Regenerates <span class="d3-color-blue"><span class="value">'+total+'</span></span> Life per Second.');
  prop2.html('After not taking damage for 4 seconds, gain an absorb shield for 200% of your total Life per Second.');
  break;
 case '18':
  title.html('Iceblink');
  flavor.html('Adventurers used to speak fondly of splint mail armor that would freeze their opponents in place. The sickly gemcutter, Zhong Yi Rou heard these tales and set out to create a gem that could do the same. "I\'ll make a few modifications all my own, yes I will," she was heard to mutter.');
  coeff1 = 5;
  coeff2 = .4;
  cap = 50;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  prop1.html('Your Cold skills now apply Chill effects and your Chill effects now Slow enemy movement speed by an additional <span class="d3-color-blue"><span class="value">'+total+'%</span></span>.');
  prop2.html('Enemies you Chill have a 10% increased chance to be Critically Hit.');
  break;
 case '19':
  title.html('Mutilation Guard');
  flavor.html('Chau Thanh of Guozhi designed a gem which would transport the pain and suffering of a physical attack to an undisclosed location. When asked about the ultimate destination of this damage, she would simply smile and mutter, "Well deserved. Well deserved."');
  coeff1 = 10;
  coeff2 = .5;
  cap = 100;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(1);
  prop1.html('Gain <span class="d3-color-blue"><span class="value">'+total+'%</span></span> melee damage reduction.');
  prop2.html('While below 50% Life, you may move unhindered through enemies.');
  break;
 case '20':
  title.html('Bane of the Stricken');
  flavor.html('After the defeat of Malthael, Diadra the Scholar wandered the world. She studied the gem cutters of Xiansai, and brought their secrets back to Westmarch. Bane of the Stricken is the first gem to come out of her Westmarch workshop.');
  coeff1 = .8;
  coeff2 = .01;
  total = coeff1 + (coeff2 * level);
  total = total.toFixed(2);
  prop1.html('Each attack you make against an enemy increases the damage it takes from your attacks by <span class="d3-color-blue"><span class="value">'+total+'%</span></span>.');
  prop2.html('Gain 25% increased damage against bosses and Rift Guardians.');
  break;
 case '21':
  title.html('Boyarsky\'s Chip');
  flavor.html('This fragment of a gem, called a chip, was discovered in an underground vault by old man Boyarsky, who fashioned it into the beautiful gem that it is today. It damages those who would damage its owner, and once inserted into a socket, it will never fall out.');
  coeff1 = 16000;
  coeff2 = 800;
  total = coeff1 + (coeff2 * level);
  total = commafy(total);
  prop1.html('Adds <span class="d3-color-blue"><span class="value">'+total+'</span></span> Thorns.');
  prop2.html('Taunt the first enemy hit by your Primary skills for 2 seconds.');
  break;
 case '22':
  title.html('Red Soulstone Shard');
  flavor.html("This looks just like it was part of the infamous red soulstone. But that's impossible... It was destroyed long ago.");
  type = 'helms';
  coeff1 = 12500;
  coeff2 = 50;
  total = coeff1 + (coeff2 * level);
  total = commafy(total);
  prop1.html('Periodically struggle for control, unleashing a ring of Fire that inflicts <span class="d3-color-blue"><span class="value">'+total+'%</span></span> weapon damage to enemies it passes through.');
  prop2.html('After gaining a level, your resource costs are removed and cooldowns on skills are reduced by 75% for 30 seconds.');
  break;
 case '23':
  title.html('Legacy of Dreams');
  flavor.html("A Xiansai master forged this gem from other powerful rings hoping to combine their potencies and form a synergy.");
  cap = 99;
  coeff1 = 3.75;
  coeff2 = 3.75;
  total = coeff1 + (coeff2 * level);
  total = commafy(total);
  prop1.html('While you have no set bonuses equipped every legendary item you have equipped increases your damage dealt by <span class="d3-color-blue"><span class="value">'+total+'%</span></span> and reduces your damage taken by 2%.');
  prop2.html('This bonus is doubled for Ancient items.');
  break;
 }

 if(level > cap) { level = cap; }

 input.prop('max',cap);
 prop0.html(type);

 if(cap < 150) {
  ranktext = (cap === level) ? " (Max)" : '/' + cap;
  if(input.val() > cap) {
   input.val(cap);
   loadNumbers();
  }
 }

 levelcap.html('Rank ' + level + ranktext);

 if(level >= 25) {
  $('.level25').addClass('d3-color-orange');
  requiredObj.hide();
 }
 else {
  $('.level25').removeClass('d3-color-orange');
  requiredObj.show();
 }

}

function loadNumbers() {
 var grlvlobj = $('#riftlevel');
 var grlvl = cleanInput(grlvlobj.val(),1,0);
 var gemobj = $('#gem')
 var gem = cleanInput(gemobj.val(),0,0);
 var selected = $('.gems .clicked').attr('data-gem');
 var season = $('.filters .clicked').attr('data-season');

 loadGem(selected,gem,season);

 var upgrade = $('#upgrade');
 var empowered = $('#empowered');
 var freerank = $('#freerank');
 var gemplus = $('.gemjump .plus');
 var gemminus = $('.gemjump .minus');
 var maxgr = 150;
 var cap = gemobj.attr('max');
 var rankjump = 3;
 var level = 12;
 
 if (freerank.is(':checked')) { level++; rankjump++; }
 if (empowered.is(':checked')) { level++; rankjump++; }

 if (upgrade.is(':checked')) {
  grlvl = gem + level;
  grlvlobj.prop('disabled', true);
 }
 else { grlvlobj.prop('disabled', false); }

 gemplus.html(rankjump);
 gemminus.html(rankjump);
 if(gem < rankjump) { gemminus.hide(); }
 else { gemminus.show(); }
 if(gem + rankjump > cap) { gemplus.hide(); }
 else { gemplus.show(); }
 
 if(grlvl > maxgr) {
  grlvl = maxgr;
  var newcap = grlvl;
  gemobj.prop('max',newcap);
 }

 gemobj.val(gem);
 grlvlobj.val(grlvl);
 loadShards(grlvl);

 var chance0 = 0;
 if(grlvl == 150 && gem + chance0 > 150) { chance0 = 150; } else { chanceBox0 = gem+chance0; }
 var pct0 = loadChance(grlvl,chanceBox0);

 var chance1 = 1;
 if(grlvl == 150 && gem + chance1 > 150) { chance1 = 150; } else { chanceBox1 = gem+chance1; }
 var pct1 = loadChance(grlvl,chanceBox1);

 var chance2 = 2;
 if(grlvl == 150 && gem + chance2 > 150) { chance2 = 150; } else { chanceBox2 = gem+chance2; }
 var pct2 = loadChance(grlvl,chanceBox2);

 var chance3 = 3;
 if(grlvl == 150 && gem + chance3 > 150) { chance3 = 150; } else { chanceBox3 = gem+chance3; }
 var pct3 = loadChance(grlvl,chanceBox3);

 var chance4 = 4;
 if(grlvl == 150 && gem + chance4 > 150) { chance4 = 150; } else { chanceBox4 = gem+chance4; }
 var pct4 = loadChance(grlvl,chanceBox4);

 var FFF = 100 * (1-(.01*pct0)) * (1-(.01*pct0)) * (1-(.01*pct0));
 var SSS = 100 * (.01*pct0) * (.01*pct1) * (.01*pct2);
 if($(empowered).is(':checked') && $(freerank).is(':checked')) {
  FFF *= (1-(.01*pct0));
  FFF *= (1-(.01*pct0));
  SSS *= (.01*pct3);
  SSS *= (.01*pct4);
  chanceFormat(rankjump,gem);
 }
 else if($(freerank).is(':checked') || $(empowered).is(':checked')) {
  FFF *= (1-(.01*pct0));
  SSS *= (.01*pct3);
  chanceFormat(rankjump,gem);
 }
 else { chanceFormat(rankjump,gem); }
 var GT0 = 100 * (1-FFF*.01);

 for(var i=1; i<=5; i++) {
  var upgrade = gem + i;
  if(upgrade > 150) { upgrade = 150; }
  $('#plus'+(i-1)).html(upgrade);
 }
 
 $('#rank0, #rank1, #rank2, #rank3, #rank4').val(function(i){ return [pct0, pct1, pct2, pct3, pct4][i]+'%'; }).css('background-color', function(i){ return loadColor([pct0, pct1, pct2, pct3, pct4][i]); });
 $('#probability-GT0').val(GT0.toFixed(1)+'%').css('background-color',loadColor(GT0,false));
 $('#probability-SSS').val(SSS.toFixed(1)+'%').css('background-color',loadColor(SSS,false));
 $('#probability-FFF').val(FFF.toFixed(1)+'%').css('background-color',loadColor(FFF,true));
}

function chanceFormat(count,gem) {
 $('.adjust').hide().removeClass("full half third quarter fifth");
 var rank = 150 - gem;
 if(count > rank) { count = rank; }
 if(rank == 0) { $(".toggle").hide(); } else { $(".toggle").show(); }
 if(count == 1) { setClass = "full"; }
 else if(count == 2) { setClass = "half"; }
 else if(count == 3) { setClass = "third"; }
 else if(count == 4) { setClass = "quarter"; }
 else if(count == 5) { setClass = "fifth"; }
 for(let i=0; i < count; i++) { $('.adjust').eq(i).show().addClass(setClass); }
}

function loadChance(grlvl,gem) {
 var result = grlvl - gem;
 if(result >= 10) return 100;
 else if(result >=  9) return 90;
 else if(result >=  8) return 80;
 else if(result >=  7) return 70;
 else if(result >=  0) return 60;
 else if(result >= -1) return 30;
 else if(result >= -2) return 15;
 else if(result >= -3) return 8;
 else if(result >= -4) return 4;
 else if(result >= -5) return 2;
 else if(result >= -6) return 1;
 else { return 0 }
}

function loadColor(pct,invert) {
 return 'hsl(' + (invert ? 200 - pct * 2 : pct * 2) + ',40%,50%)';
}

function commafy(num) {
 return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");
}

function loadShards(grlvl) {
 let balance = 500 + (grlvl * 10);
 $('#shards').html('<img src="/img/bloodshard.png" /> <span class="d3-color-blue">'+balance+'</span> <span class="d3-color-purple">Blood Shard Cap</span>');
}

function augmentCalc() {
 var gold = [0,159000,183000,211000,242000,279000,321000,369000,425000,489000,560000,640000,740000,850000,980000,1130000,1300000,1500000,1720000,1980000,2280000,2630000,3020000,3480000,4000000,4600000,4740000,4880000,5030000,5180000,5300000,5500000,5700000,5900000,6100000,6300000,6500000,6700000,6900000,7100000,7300000,7500000,7700000,7900000,8100000,8300000,8500000,8800000,9100000,9400000,9700000,10000000,10300000,10600000,10900000,11200000,11500000,11800000,12200000,12600000,13000000,13400000,13800000,14200000,14600000,15000000,15400000,15900000,16400000,16900000,17400000,17900000,18400000,19000000,19600000,20200000,20800000,21400000,22000000,22700000,23400000,24100000,24800000,25500000,26300000,27100000,27900000,28700000,29600000,30500000,31400000,32300000,33300000,34300000,35300000,36400000,37500000,38600000,39800000,41000000,42200000,43500000,44800000,46100000,47500000,48900000,50400000,51900000,53500000,55100000,56700000,58400000,60100000,61900000,63800000,65700000,67700000,69700000,71800000,73900000,76100000,78400000,80700000,83100000,85600000,88200000,90800000,93500000,96300000,99200000,102200000,105300000,108400000,111600000,114900000,118300000,121800000,125400000,129100000,133000000,137000000,141100000,145300000,149600000,154100000,158700000,163400000,168300000,173300000,178500000,183800000];
 var ancientsObj = $('#augment .ancients');
 var gemlevelObj = $('#augment .gemlevel');
 var totallevelObj = $('#augment .totallevel');
 var griftsObj = $('#augment .grifts');
 var egriftsObj = $('#augment .egrifts');
 var statsoneObj = $('#augment .statsone');
 var statsallObj = $('#augment .statsall');
 var etimereqObj = $('#augment .emaxtime');
 var goldreqObj = $('#augment .maxgold');
 var howfastObj = $('#augment .howfast');
 var estimatedObj = $('#augment .estimatedtime');
 var empestimatedObj = $('#augment .empestimatedtime');
 var empoweredObj = $('#showEmpowered');
 var nodeathObj = $('#showNodeath');
 var timegriftObj = $('#timegrift');
 var level = 7;
 var maxrifts = 3;
 var nminutes = 0;
 var eminutes = 0;

 var howfast = howfastObj.val();
 howfastObj.val(cleanInput(howfast,1,15));

 var ancients = ancientsObj.val();
 var gemlevel = gemlevelObj.val();
 ancientsObj.val(cleanInput(ancients,1,13));
 gemlevelObj.val(cleanInput(gemlevel,125,150));

 var statsone = gemlevel * 5;
 var statsall = statsone * ancients;
 statsoneObj.val(statsone);
 statsallObj.val(statsall);

 var totallevel = ancients * (gemlevel - 125);
 totallevelObj.val(totallevel);

 if(empoweredObj.is(':checked')) { level++; maxrifts++; }
 if(nodeathObj.is(':checked')) { level++; maxrifts++; }

 var grifts = Math.ceil(totallevel / maxrifts);
 griftsObj.val(grifts);

 var egrifts = Math.ceil(totallevel / maxrifts);
 egriftsObj.val(egrifts);

 for(i=0; i<grifts; i++) { nminutes += parseInt(howfast); }
 for(i=0; i<egrifts; i++) { eminutes += parseInt(howfast); }

 estimatedObj.val(gettime(nminutes.toFixed(0)));
 empestimatedObj.val(gettime(eminutes.toFixed(0)));

 var goldone = 0;
 for(var i=0; i<gemlevel; i+=4) { goldone += gold[i+12]; }
 var goldreq = commafy(goldone * ancients);
 goldreqObj.val('~'+goldreq);

 gemlevel = parseInt(gemlevel,10);
 var maxgrift = level + gemlevel;
 if(maxgrift > 150) { maxgrift = 150; }
 timegriftObj.html(maxgrift);
}

function gettime(minutes) {
 var hours = Math.floor(minutes / 60);
 if(minutes > 59) {
  minutes = minutes - (hours * 60);
  if(minutes < 10) { minutes = '0' + minutes; }
  if(minutes > 0) { return hours + ':' + minutes; }
  else { return hours + ':00'; }
 }
 else {
  if(minutes < 10) { minutes = '0' + minutes; }
  else if(minutes == 0) { minutes = '00'; }
  return '0:' + minutes;
 }
}

function augmentCalcMod() {
 var empoweredObj = $('#showEmpowered');
 var normalHtml = $('#augment .normal');
 var empoweredHtml = $('#augment .empowered');
 if(empoweredObj.is(':checked')) {
  empoweredHtml.show();
  normalHtml.hide();
 }
 else {
  normalHtml.show();
  empoweredHtml.hide();
 }
}

function cleanInput(input,min,max) {
 if(!$.isNumeric(input)) { input = min; }
 else {
  input = input.replace(/\D/g,min);
  input = parseFloat(input);
  if(input > max && max > 0) { input = max; }
  else if(input < min) { input = min; }
 }
 return input;
}

/*function checkBattlenet() {
 var battletagobj = $('#battletag');
 var battletag = battletagobj.val();
 var button = $('#bnetSubmit');
 var regex = /^([a-z\u00C0-\u017F]{1}[a-z0-9\u00C0-\u017F]{2,11}#{1}[0-9]{4,8})$/i;
 if(regex.test(battletag) && $('.region').is(':checked') && $('.difficulty').is(':checked')) { button.attr('disabled',false).val('submit'); }
 battletag == "" ? battletagobj.removeClass('error shake') : regex.test(battletag) ? battletagobj.removeClass('error') : battletagobj.addClass('error');     
}*/

/*function submitBattlenet() {
 let battletagobj = $('#battletag');
 let button = $('#bnetSubmit');
 let region = $('input.region:checked').attr('id');
 let difficulty = $('input.difficulty:checked').attr('id');

 button.attr('disabled',true);
 button.val('loading');

 $.post("system/lib/paragon.php",{battletag: $('#battletag').val(), region, difficulty}, function(e) {
  let data = $.parseJSON(e);
  $('#level_nonseason').val(data.nonseason);
  $('#level_season').val(data.season);
  let error = data.error;
  if(error != "0") {
   button.attr('disabled',true);
   battletagobj.addClass('error shake');
   button.val('error');
  }
  else {
   button.attr('disabled',false);
   button.val('submit');
  }
  paragonCalc();
 });
}*/

function statGemUp(gem,rank) {
 gem = parseInt(gem); 
 for(var x = gem + 1; x <= 5; x++) {
  rank = Math.floor(rank / 3);
  $('.statgem[data-stat-gem="'+x+'"]').val(rank);
 }
}

function statGemDown(gem,rank) {
 gem = parseInt(gem);
 for(var x = gem - 1; x > 0; x--) {
  rank *= 3;
  $('.statgem[data-stat-gem='+x+']').val(rank);
 }
}

function statGemGold() {
 let x = 5;
 while (x > 1) {
  let rank = $('.statgem[data-stat-gem='+x+']').val();
  let total = x * 100000 * rank;
  $('.gemgold[data-stat-gold='+x+']').text(commafy(total));
  x--;
 }
}

function statGemDB() {
 const min = 3;
 for (let x = 5; x > min; x--) {
  const rank = $('.statgem[data-stat-gem='+x+']').val();
  $('.gemdb[data-stat-db='+x+']').text(commafy(rank));
 }
}

$(document).ready(function() {
 var gemobj = $('#gem');
 var gems = $('.gems img');
 var filters = $('.filters span');

 $('.column.original,#augment .empowered').hide();
 $('#empowered,#upgrade,#freerank').click(function(){ loadNumbers(); });

 $('.clearform').click(function() {
  $(this).closest('form')[0].reset();
  loadNumbers();
  //checkBattlenet();
  xpLabels();
  augmentCalcMod();
 });

 $('#showxp').on("change",function() { xpLabels(); });
 $('#level_nonseason,#level_season').on("input", function() { paragonCalc(); });
 $('#level_nonseason2,#level_desired').on("input", function() { paragonCalc2(); });
 $('#level_nonseason2,#level_desired,#xphour,#playhours').on("input", function() { paragonCalc3(); });
 $('.statgem').on("input", function() {
  var gem = $(this).attr('data-stat-gem');
  var rank = $(this).val();
  statGemUp(gem,rank);
  statGemDown(gem,rank);
  statGemGold();
  statGemDB();
 });
 $('#augment .ancients,#augment .gemlevel,#augment .howfast').on("input", function() { augmentCalc(); });
 $('#showEmpowered,#showNodeath').on("click",function() { augmentCalcMod(); augmentCalc(); });

 gems.click(function() {
  gems.removeClass('clicked');
  var selectedGemObj = $(this);
  var selectedGem = selectedGemObj.attr('data-gem');
  selectedGemObj.addClass('clicked');
  var gemRankObj = $('#gem');
  var gemRank = gemRankObj.val();
  var selectedSeasonObj = $('.filters .clicked');
  var selectedSeason = selectedSeasonObj.attr('data-season');
  loadGem(selectedGem,gemRank,selectedSeason);
  console.log(selectedSeason);
  gemRankObj.focus();
 });

 filters.click(function() {
  filters.removeClass('clicked');
  var seasonObj = $(this);
  var season = seasonObj.attr('data-season');
  seasonObj.addClass('clicked');
  var categoryObj = $(`.gems img.season${season}`);
  var selectedGemObj = $('.gems img.clicked');
  var gem = selectedGemObj.attr('data-gem');
  gems.removeClass('clicked').addClass('partial');
  if(season > 18) { gems.removeClass('partial'); }
  else { categoryObj.removeClass('partial'); }
  if($(selectedGemObj).hasClass('partial')) {
   var newGemObj = categoryObj.first();
   newGemObj.addClass('clicked');
   gem = newGemObj.attr('data-gem');
  }
  else {
   selectedGemObj.addClass('clicked');
  }
  var level = gemobj.val();
  loadGem(gem,level,season);
 });

 $('.gemjump span').click(function() {
  var gem = parseFloat(gemobj.val());
  var jump = 3;
  if($(empowered).is(':checked')) { jump++; }
  if($(freerank).is(':checked')) { jump++; }
  if($(this).hasClass('plus')) { gemobj.val(gem+jump); }
  if($(this).hasClass('minus')) { gemobj.val(gem-jump); }
  loadNumbers();
 });

 $('.region').click(function() { $('.region').not(this).prop('checked',false); });
 $('.difficulty').click(function() { $('.difficulty').not(this).prop('checked', false); });

 /*$('#bnetSubmit').click(function(e) {
  e.preventDefault();
  submitBattlenet();
 });*/
});
