---
obsidianUIMode: preview
cssclasses: json5e-monster
tags:
- compendium/src/5e/ghloe
- ttrpg-cli/monster/cr/18
- ttrpg-cli/monster/size/gargantuan
- ttrpg-cli/monster/type/monstrosity
statblock: inline
aliases: ["Hraptnon"]
---
# [Hraptnon](3-Mechanics\CLI\bestiary\monstrosity/hraptnon-ghloe.md)
*Source: Grim Hollow: Lairs of Etharis p. 72*  

> [!quote]-  
> 
> The magic our wizard used just bounced off the gigantic creature, and as our fighter slashed at it with her sword, the creature's blood spawned even more monsters.

## Salvage

A central spike growing from the hraptnon can be fashioned into a spear or lance by a proficient weaponsmith succeeding on a DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)) check. This takes 10 days of work and 1000 gp of components. The spear or lance acts as a+3 weapon that does an additional 7 (`2d6`) force damage on a successful hit. This magical weapon can affect the hraptnon, unlike other magical weapons.

## Lore

- **DC 15 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The hraptnon lives in the Stillborn Forest, and it has never been seen outside of the forest bounds.  
- **DC 20 Intelligence ([Arcana](/3-Mechanics/CLI/rules/skills.md#Arcana)).** No magical spells or weapons can hurt the hraptnon, and its blood can spawn creatures known as xakalonus.  
- **DC 25 Intelligence ([History](/3-Mechanics/CLI/rules/skills.md#History)).** The hraptnon cannot be permanently killed unless its heart, which rests in a magical pool in a grove at the center of the Stillborn Forest, is found and destroyed. This heart, known as the Stillborn Heart, could be sold to a sage for a large sum of gold.  

> [!note] GM Advice
> 
> The hraptnon is a great example of a "puzzle monster," a beast that cannot be defeated until its secrets are revealed. Puzzle monsters can be a great deal of fun, especially to challenge extremely powerful parties. Just when the players think they've scored a potentially easy victory, they find that the threat remains.
> 
> The key to maximizing the impact of puzzle monsters like the hraptnon is to make sure not to reveal too much information too soon. Make the characters puzzle out the reality behind the monster, using resources and taking time to do so. When they are finally able to fully defeat the creature, their victory will be all the sweeter.
^gm-advice

```statblock
"name": "Hraptnon (GHLoE)"
"size": "Gargantuan"
"type": "monstrosity"
"alignment": "Chaotic Evil"
"ac": !!int "18"
"ac_class": "natural armor"
"hp": !!int "264"
"hit_dice": "16d20 + 96"
"stats":
- !!int "21"
- !!int "17"
- !!int "22"
- !!int "12"
- !!int "17"
- !!int "12"
"speed": "40 ft., burrow 20 ft., climb 30 ft."
"saves":
  "Dexterity": !!int "9"
  "Wisdom": !!int "9"
  "Strength": !!int "11"
  "Constitution": !!int "12"
"skillsaves":
  "Athletics": !!int "11"
  "Perception": !!int "9"
"damage_immunities": "bludgeoning, piercing, slashing from magical weapons"
"condition_immunities": "[charmed](/3-Mechanics/CLI/rules/conditions.md#charmed),\
  \ [exhaustion](/3-Mechanics/CLI/rules/conditions.md#exhaustion), [frightened](/3-Mechanics/CLI/rules/conditions.md#frightened),\
  \ [stunned](/3-Mechanics/CLI/rules/conditions.md#stunned), [unconscious](/3-Mechanics/CLI/rules/conditions.md#unconscious)"
"senses": "darkvision 120 ft., passive Perception 19"
"languages": "Draconic"
"cr": "18"
"traits":
- "desc": "If the hraptnon fails a saving throw, it can choose to succeed instead."
  "name": "Legendary Resistance (3/Day)"
- "desc": "The hraptnon has advantage on saving throws against spells and other magical\
    \ effects."
  "name": "Magic Resistance"
- "desc": "Unless the hraptnon's Stillborn Heart is removed from its pool, the hraptnon's\
    \ death is temporary. One of its countless xakalonus offspring grows into the\
    \ hraptnon in 24 hours.\n\nIn addition, the hraptnon loses its immunities if the\
    \ Stillborn Heart is removed from the pool."
  "name": "Undying"
"actions":
- "desc": "The hraptnon makes three melee attacks: one bite and two claws. Alternatively,\
    \ the hraptnon can make two spine attacks."
  "name": "Multiattack"
- "desc": "Melee Weapon Attack: +11 to hit, reach 5 ft., one target. Hit: 18\
    \ (3d8 + 5) piercing damage, and the target must succeed on a DC 20 Constitution\
    \ saving throw or be [incapacitated](/3-Mechanics/CLI/rules/conditions.md#incapacitated)\
    \ until the end of the hraptnon's next turn."
  "name": "Bite"
- "desc": "Melee Weapon Attack: +11 to hit, reach 10 ft., one target. Hit: 27\
    \ (4d10 + 5) slashing damage."
  "name": "Claws"
- "desc": "Melee Weapon Attack: +11 to hit, range 60 ft., one target. Hit: 23\
    \ (4d8 + 5) piercing damage, and the target must succeed on a DC 20 Dexterity\
    \ saving throw. On a failed save, the target is knocked [prone](/3-Mechanics/CLI/rules/conditions.md#prone)\
    \ and [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained). The target\
    \ must escape (DC 20) to remove the [restrained](/3-Mechanics/CLI/rules/conditions.md#restrained)\
    \ condition and be able to stand."
  "name": "Spine"
"reactions":
- "desc": "If the hraptnon takes 20 points of damage or more from a single attack,\
    \ it can spawn a xakalonus, which appears in a space adjacent to the hraptnon\
    \ and attacks on the same initiative count as the hraptnon."
  "name": "Spawn Xakalonus"
"legendary_actions":
- "desc": "The hraptnon makes a claw attack."
  "name": "Claw"
- "desc": "The hraptnon casts [bane](/3-Mechanics/CLI/spells/bane.md) as a 3rd level\
    \ spell (DC 20 to resist)."
  "name": "Baneful Howl (Costs 2 Actions)"
- "desc": "One xakalonus within 30 feet of the hraptnon dies. The hraptnon regains\
    \ hit points equal to half the hit points of the xakalonus that died."
  "name": "Life Drain (Costs 3 Actions)"
"source":
- "GHLoE"
"image": "/3-Mechanics/CLI/bestiary/monstrosity/token/hraptnon-ghloe.webp"
```
^statblock