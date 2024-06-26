---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/5
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/corvum
statblock: inline
aliases: ["Corvum Assassin"]
---
# [Corvum Assassin](3-Mechanics\CLI\bestiary\humanoid/corvum-assassin-hwcs.md)
*Source: Humblewood Campaign Setting p. 194*  

Frequently members of criminal organizations, contract killers can be found in the Wood's largest and most politically complex perches. They serve powerful figures with a lack of scruples and an abundance of coin. Assassins are trained from a young age to become deadly masters of their craft, learning how to skulk the branchroads and keep hidden in the canopy to time the perfect ambush. Corvums, with their natural intelligence and cunning, make the best assassins.

```statblock
"name": "Corvum Assassin (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "corvum"
"alignment": "Lawful Neutral"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "54"
"hit_dice": "12d8"
"stats":
- !!int "10"
- !!int "16"
- !!int "11"
- !!int "14"
- !!int "14"
- !!int "10"
"speed": "30 ft."
"saves":
  "Dexterity": !!int "6"
  "Intelligence": !!int "5"
"skillsaves":
  "Nature": !!int "5"
  "Stealth": !!int "9"
  "Insight": !!int "5"
  "Perception": !!int "8"
"senses": "passive Perception 18"
"languages": "Birdfolk, Thieves' Cant, can also understand Auran but can't speak it"
"cr": "5"
"traits":
- "desc": "When falling at least 10 feet, the assassin can spend a reaction to fly\
    \ up to their speed in one direction as they descend. They land in an unoccupied\
    \ space at the end of their movement, and take no falling damage. They cannot\
    \ glide while carrying heavy objects, heavy weapons, or shields (though they can\
    \ drop any held items as part of their reaction)."
  "name": "Glide"
- "desc": "The assassin has advantage on Strength ([Athletics](/3-Mechanics/CLI/rules/skills.md#Athletics))\
    \ checks made to climb any surface their talons could reasonably grip."
  "name": "Talons"
- "desc": "During their first turn, the assassin has advantage on attack rolls against\
    \ any creature that hasn't taken a turn. Any hit the assassin scores against a\
    \ surprised creature is a critical hit."
  "name": "Assassinate"
- "desc": "Once per turn, the assassin deals an extra 10 (3d6) damage when they\
    \ hit a target with a weapon attack and have advantage on the attack roll, or\
    \ when the target is within 5 feet of an ally of the assassin that isn't [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ and the assassin doesn't have disadvantage on the attack roll."
  "name": "Sneak Attack"
- "desc": "The assassin has advantage on Dexterity ([Stealth](/3-Mechanics/CLI/rules/skills.md#Stealth))\
    \ checks made in dim light or darkness."
  "name": "Skulker"
"actions":
- "desc": "The assassin makes two melee attacks: one with their shortsword and one\
    \ with their dagger. Or the assassin makes two ranged attacks with their daggers."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4\
    \ + 3) slashing damage."
  "name": "Talons"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d6\
    \ + 3) piercing damage, and the target must make a DC 13 Constitution saving\
    \ throw, taking 10 (3d6) poison damage on a failed save, or half as much damage\
    \ on a successful one. "
  "name": "Shortsword"
- "desc": "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60\
    \ ft., one target. Hit: 5 (1d4 + 3) piercing damage, and the target must make\
    \ a DC 13 Constitution saving throw, taking 10 (3d6) poison damage on a failed\
    \ save, or half as much damage on a successful one. "
  "name": "Dagger"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/humanoid/token/corvum-assassin-hwcs.webp"
```
^statblock