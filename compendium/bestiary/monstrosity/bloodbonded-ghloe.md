---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/4
- ttrpg-cli/monster/size/medium
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Bloodbonded"]
---
# [Bloodbonded](3-Mechanics\CLI\bestiary\monstrosity/bloodbonded-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 39*  

> [!quote]-  
> 
> Those who've turned their back on both the Seraphs and the Daemons? That way lies madness.

## Salvage

Bloodbonded still possess the damaged and scarred remnants of their past devotions. When a bloodbonded dies, its blood still pulses and gives off light as it did when it was alive. One vial of this blood can be harvested from a single bloodbonded with a successful DC 10 Wisdom ([Medicine](/3-Mechanics/CLI/rules/skills.md#Medicine)) check. Drinking it within one day causes the user to be affected by a bless spell. When the spell ends, the user suffers one level of exhaustion.

## Lore

- **DC 10 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** Bloodbonded are victims of their own foolish choices, worshipping false gods and then being driven mad by the ruse.  
- **DC 15 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** Bloodbonded use their followers as weapons, even causing them to explode in a wave of fiery blood, which damages nearby creatures.  

```statblock
"name": "Bloodbonded (GHLoE)"
"size": "Medium"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "16"
"ac_class": "[studded leather](/3-Mechanics/CLI/items/studded-leather-armor.md), [shield](/3-Mechanics/CLI/items/shield.md)"
"hp": !!int "66"
"hit_dice": "12d8 + 12"
"stats":
- !!int "12"
- !!int "15"
- !!int "13"
- !!int "15"
- !!int "7"
- !!int "18"
"speed": "30 ft. (or 10 ft. if missing a leg)"
"saves":
  "Wisdom": !!int "0"
  "Constitution": !!int "3"
"skillsaves":
  "Deception": !!int "6"
  "Insight": !!int "0"
  "Persuasion": !!int "6"
"damage_vulnerabilities": "psychic"
"damage_resistances": "necrotic, radiant"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened)"
"senses": "passive Perception 8"
"languages": "Celestial, Infernal, one national language"
"cr": "4"
"traits":
- "desc": "As a bonus action, the bloodbonded can inspire an ally within 30 feet to\
    \ an enraged state of bloodlust for one minute. These followers gain 5 temporary\
    \ hp, resistance to bludgeoning, piercing, and slashing damage, and vulnerability\
    \ to psychic damage. All attacks made by the bloodbonded followers are reckless,\
    \ gaining advantage to hit enemies but granting enemies advantage on attacks against\
    \ them."
  "name": "Bloody Inspiration"
- "desc": "Allies of the bloodbonded within 60 feet of it have advantage on Charisma\
    \ and Wisdom saving throws."
  "name": "Resolute Followers"
"actions":
- "desc": "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6\
    \ + 1) bludgeoning damage."
  "name": "Mace"
- "desc": "As a bonus action, the bloodbonded can infuse one of its bloodbonded followers\
    \ who is under the effects of Bloody Inspiration with a fatal fury. This magic\
    \ causes the follower to foam bloodily at the mouth. If the follower is not slain\
    \ before the start of the bloodbonded's next turn, the follower dies and explodes\
    \ in a shower of superheated blood. Creatures within 10 feet must make a DC 14\
    \ Dexterity saving throw, taking 12 (2d8 + 3) fire damage on a failure and taking\
    \ half damage on a success."
  "name": "Rage Bomb (2/Day)"
- "desc": "The bloodbonded targets a creature it can see within 60 feet and utters\
    \ words of madness. The target must succeed on a DC 14 Constitution saving throw\
    \ or take 9 (2d8) fire damage as its blood superheats. The bloodbonded must\
    \ be able to speak to use this ability."
  "name": "Blood Boil"
"reactions":
- "desc": "When a bloodbonded would take damage from a melee or ranged attack it can\
    \ see that targets only the bloodbonded, it can use its reaction to call on one\
    \ of its followers within 5 feet to take the damage instead."
  "name": "Loyal Followers"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/bloodbonded-ghloe.webp"
```
^statblock