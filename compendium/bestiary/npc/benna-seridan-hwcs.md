---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/hwcs
- ttrpg-cli/monster/cr/2
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/humanoid/cervan
statblock: inline
aliases: ["Benna Seridan"]
---
# [Benna Seridan](3-Mechanics\CLI\bestiary\npc/benna-seridan-hwcs.md)
*Source: Humblewood Campaign Setting p. 193*  

Benna is a tall, scarred grove cervan, who wears a red bandana over her lost left eye. The leader of the Bandit Coalition, she is an idealist who believes that Alderheart's canopy, the symbol of birdfolk power in the region, should be burned and its resources looted to help those displaced by the flames. Benna lived a tranquil village life until her mother, a respected village elder and seer, foretold that the flames would come. Word was sent to Alderheart's Council, asking for supplies and aid, both of which were denied because the Council didn't believe in the power of the seer's visions. When the flames had all but consumed the village, birdfolk support arrived, but it was too late. Benna lost her family. She also lost her left eye and left ear due to the burns she sustained while helping others escape from the blaze. She fell in with the bandits and quickly rose through their ranks, thanks to her passion and purpose. She is a seasoned veteran who has been building the bandit forces, and utilizing the organization to care for humblefolk left homeless by the spreading fires. Benna Seridan uses the [cervan bandit general](/3-Mechanics/CLI/bestiary/humanoid/cervan-bandit-general-hwcs.md) stat block, but the [scimitar](/3-Mechanics/CLI/items/scimitar.md) in her main hand is a [blade of the wood](/3-Mechanics/CLI/items/blade-of-the-wood-hwcs.md) *(+1 to attack and damage rolls, see "Appendix D: New Magic Items"), and a [shortsword](/3-Mechanics/CLI/items/shortsword.md) (`1d6 + 3` piercing damage) in her offhand.

```statblock
"name": "Benna Seridan (HWCS)"
"size": "Medium"
"type": "humanoid"
"subtype": "cervan"
"alignment": "Neutral Evil"
"ac": !!int "15"
"ac_class": "[studded leather armor](/3-Mechanics/CLI/items/studded-leather-armor.md)"
"hp": !!int "65"
"hit_dice": "10d8 + 20"
"stats":
- !!int "14"
- !!int "17"
- !!int "14"
- !!int "14"
- !!int "11"
- !!int "14"
"speed": "35 ft."
"saves":
  "Charisma": !!int "4"
  "Dexterity": !!int "5"
"skillsaves":
  "Deception": !!int "4"
  "Persuasion": !!int "4"
"senses": "passive Perception 10"
"languages": "Birdfolk, Cervan"
"cr": "2"
"traits":
- "desc": "If an attack deals over half of Benna Seridan's current remaining hit points\
    \ in damage (even if her hit points are reduced to 0 by the attack), she immediately\
    \ regains 8 (1d12 + 2) hit points."
  "name": "Surge of Vigor (Recharges after a Long Rest)"
- "desc": "Benna Seridan's long jump is 30 feet, and her base high jump is 15 feet,\
    \ with or without a running start."
  "name": "Standing Leap"
"actions":
- "desc": "Benna Seridan makes three melee attacks, two with her scimitar and one\
    \ with her dagger. Alternatively, Benna Seridan can make two ranged attack with\
    \ her daggers."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 7 (1d6\
    \ + 4) slashing damage. The sword has 2 charges. Benna Seridan can expend a charge\
    \ and speak the command word to cast [spike growth](/3-Mechanics/CLI/spells/spike-growth.md)\
    \ (save DC 16) centered on herself. She can pass through this terrain unaffected.\
    \ The sword regains one charge each day at dawn."
  "name": "Scimitar of the Wood"
- "desc": "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6\
    \ + 3) piercing damage."
  "name": "Shortsword"
"reactions":
- "desc": "Benna Seridan adds 2 to her AC against one melee attack that would hit\
    \ her. Benna Seridan must see the attacker and be wielding a melee weapon."
  "name": "Parry"
"source":
- "HWCS"
"image": "/3-Mechanics/CLI/bestiary/npc/token/benna-seridan-hwcs.webp"
```
^statblock