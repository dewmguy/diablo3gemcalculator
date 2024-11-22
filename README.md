# Diablo 3 Gem Calculator

Diablo 3 Gem Calculator web app provides an interface for displaying the properties of legendary gems in diablo 3. the calculator predicts the probabilities and chances of sucessfully upgrading a legendary gem at the end of a greater rift.

## Gem Calculator

Make a selection of a legendary gem in the panel to show the properties of that gem in the item tooltip. Use the season filter option to show the gems that were added during that season. Legendary gems may have different properties in various seasons.

Input the rank of your gem to quickly see the properties of the gem at a given level.

Input the level of the greater rift you intend to run in order to level the gem.

The blood shard capacity will dynamically adjust to the rift level you enter.

Checkmark the appropriate calculator modifiers relative to the goals of leveling your legendary gem.

- **Empowered**: Checking this box will add another roll to your upgrade chances. Empowering a greater rift provides an additional opportunity to level a legendary gem when the greater rift is completed within the time limit.
- **No-Death Bonus**: Checking this box will add annother roll to your upgrade chances. An additional opportunity to level a legendary gem is given to you when the greater rift is completed within the time limit, and you did not die a single time in the attempt.
- **100% Upgrade**: Checking this box will automatically adjust the value of the Rift Level input to show the level of greater rift required to get 100% chance to upgrade on every roll of your legendary gem.

### Upgrade Chances

The boxes in this section indicate the percent chances of every consecutive roll available to you, based on the options chosen above, to upgrade your legendary gem. Each box has a dynamically adjusted background color and the percent chance, and beneath each box is the gem rank your gem will be if you succeed that gem upgrade roll.

### Upgrade Probability

The boxes in this section indicate the probabilities of the rolls available to you, based on the options chosen above, to upgrade your legendary gem. Each box has a dynamically adjusted background color and the percent probability of the 3 outcomes: Win All, Win Some (>1), or Lose All. **Win All** is calculated by multiplying all of the chances of success for each consecutive roll together. **Lose All** is calculated by multiplying the chance of failure for the first roll and multiplying it with itself the same number of rolls you have. **Win Some** is calculated by taking the difference between the probability to Lose All and 1.

## Paragon Calculator

Input your battle.net battle tag into the input box, choose the realm and game style, and press submit. The form will connect to the battle.net api to extract your paragon levels for the current season and non-season, and automatically populate the inputs below, where applicable.

The first calculation method accepts your current non-season level with your current or desired season level to output what your non-season level will be once the current season has ended.

The second calculation method accepts your desired season level and your current non-season level to output the number of levels you need to achieve in the current season to reach the non-season level you desire.

## Stat Gem Calculator

Type the number of gems that you have or want in any given slot. The fields to the right of your input will indicate the number of gems of a greater quality that you can craft with the number you've typed. The fields to the left of your input will indicate the number of gems of a lesser quality are needed to craft the number you've typed.